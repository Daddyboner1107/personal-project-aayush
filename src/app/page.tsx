import fs from "node:fs";
import path from "node:path";
import { ExperienceShell } from "@/components/screens/ExperienceShell";
import { loveContent } from "@/config/love-content";

export default function HomePage() {
  const relativeAudioPath = loveContent.music.audioSrc.replace(/^\/+/, "");
  const audioFilePath = path.join(process.cwd(), "public", relativeAudioPath);
  const hasTrackFile = fs.existsSync(audioFilePath);

  return <ExperienceShell hasTrackFile={hasTrackFile} />;
}
