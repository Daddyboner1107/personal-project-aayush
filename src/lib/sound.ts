"use client";

import { loveContent } from "@/config/love-content";

/**
 * Sound & Soundtrack Engine.
 * - Strictly OFF by default until the user taps the song/sound button.
 * - Plays `/audio/snowman.mp3` via HTMLAudioElement when bundled in `public/audio/snowman.mp3`.
 * - Falls back gracefully to a soft original music-box ambience loop when no local file is bundled yet.
 */
class LoveSoundEngine {
  private ctx: AudioContext | null = null;
  private audio: HTMLAudioElement | null = null;
  private fadeTimer: number | null = null;
  private ambientTimer: number | null = null;
  private enabled = false;
  private hasTrackFile = false;

  configureTrack(hasTrackFile: boolean) {
    this.hasTrackFile = hasTrackFile;
  }

  setEnabled(next: boolean) {
    this.enabled = next;
    if (typeof window === "undefined") return;

    if (next) {
      this.ensureContext();
      this.playChime([523.25, 659.25, 783.99], 0.06);

      if (this.hasTrackFile) {
        this.startTrackPlayback();
      } else {
        this.startAmbientLoop();
      }
    } else {
      this.stopTrackPlayback();
      this.stopAmbientLoop();
    }
  }

  isEnabled() {
    return this.enabled;
  }

  private startTrackPlayback() {
    if (typeof window === "undefined") return;

    if (!this.audio) {
      this.audio = new Audio(loveContent.music.audioSrc);
      this.audio.loop = true;
      this.audio.preload = "auto";
      this.audio.volume = 0;
      this.audio.addEventListener("error", () => {
        // Fallback smoothly if file becomes unreadable
        this.stopTrackPlayback();
        if (this.enabled) {
          this.startAmbientLoop();
        }
      });
    }

    if (this.fadeTimer) {
      window.clearInterval(this.fadeTimer);
      this.fadeTimer = null;
    }

    this.audio.volume = 0.04;
    void this.audio
      .play()
      .then(() => {
        let vol = 0.04;
        const targetVol = 0.42;
        this.fadeTimer = window.setInterval(() => {
          if (!this.audio || !this.enabled) {
            if (this.fadeTimer) window.clearInterval(this.fadeTimer);
            return;
          }
          vol = Math.min(targetVol, vol + 0.04);
          this.audio.volume = vol;
          if (vol >= targetVol && this.fadeTimer) {
            window.clearInterval(this.fadeTimer);
            this.fadeTimer = null;
          }
        }, 90);
      })
      .catch(() => {
        if (this.enabled) {
          this.startAmbientLoop();
        }
      });
  }

  private stopTrackPlayback() {
    if (this.fadeTimer && typeof window !== "undefined") {
      window.clearInterval(this.fadeTimer);
      this.fadeTimer = null;
    }
    if (this.audio) {
      this.audio.pause();
    }
  }

  private startAmbientLoop() {
    if (typeof window === "undefined" || this.ambientTimer) return;
    // Gentle warm music-box chord progression (C - Am - F - G)
    const chords = [
      [523.25, 659.25, 783.99],
      [440.0, 523.25, 659.25],
      [349.23, 440.0, 523.25],
      [392.0, 493.88, 587.33],
    ];
    let step = 0;

    const playNextChord = () => {
      if (!this.enabled) return;
      const chord = chords[step % chords.length];
      chord.forEach((freq, idx) => {
        this.playTone(freq, 0.9, 0.018, idx * 0.22, "sine");
      });
      step += 1;
    };

    playNextChord();
    this.ambientTimer = window.setInterval(playNextChord, 2600);
  }

  private stopAmbientLoop() {
    if (this.ambientTimer && typeof window !== "undefined") {
      window.clearInterval(this.ambientTimer);
      this.ambientTimer = null;
    }
  }

  private ensureContext(): AudioContext | null {
    if (typeof window === "undefined") return null;
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext?: typeof AudioContext })
          .webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      void this.ctx.resume();
    }
    return this.ctx;
  }

  private playTone(
    freq: number,
    duration = 0.24,
    volume = 0.05,
    delay = 0,
    type: OscillatorType = "sine"
  ) {
    if (!this.enabled) return;
    const ctx = this.ensureContext();
    if (!ctx) return;

    const now = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(volume, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + duration + 0.02);
  }

  playTap() {
    this.playTone(587.33, 0.14, 0.035, 0, "sine");
  }

  playPop() {
    this.playTone(698.46, 0.16, 0.04, 0, "triangle");
    this.playTone(880, 0.18, 0.03, 0.05, "sine");
  }

  playChime(freqs = [523.25, 659.25, 783.99, 1046.5], step = 0.07) {
    freqs.forEach((f, idx) => {
      this.playTone(f, 0.36, 0.035, idx * step, "sine");
    });
  }

  playPageTurn() {
    this.playTone(440, 0.18, 0.028, 0, "sine");
    this.playTone(554.37, 0.22, 0.03, 0.06, "sine");
  }

  playEnvelopeOpen() {
    this.playChime([523.25, 659.25, 783.99, 987.77, 1046.5], 0.08);
  }
}

export const soundEngine = new LoveSoundEngine();
