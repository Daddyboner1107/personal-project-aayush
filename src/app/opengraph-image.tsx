import { ImageResponse } from "next/og";
import { loveContent } from "@/config/love-content";

export const alt = loveContent.siteMeta.title;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFF9F4",
          backgroundImage:
            "radial-gradient(circle at 20% 25%, #F9D5DF 0%, transparent 45%), radial-gradient(circle at 82% 22%, #E6DDF7 0%, transparent 40%), radial-gradient(circle at 50% 88%, #FDE2CF 0%, transparent 45%)",
          padding: "56px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid rgba(201, 142, 124, 0.45)",
            borderRadius: "42px",
            backgroundColor: "rgba(255, 253, 251, 0.88)",
            padding: "58px 72px",
            boxShadow: "0 24px 60px rgba(176, 113, 96, 0.16)",
            maxWidth: "960px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "#B07160",
              marginBottom: "18px",
            }}
          >
            A Little World Made of Us
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              fontSize: 82,
              fontWeight: 600,
              color: "#3B262E",
              letterSpacing: "-0.02em",
              marginBottom: "18px",
            }}
          >
            <span>MI AMORE</span>
            <svg width="62" height="62" viewBox="0 0 64 64" fill="none">
              <path
                d="M32 52C32 52 10 38.5 10 23.5C10 16.8 15.2 11.5 21.8 11.5C26 11.5 29.7 13.8 32 17.2C34.3 13.8 38 11.5 42.2 11.5C48.8 11.5 54 16.8 54 23.5C54 38.5 32 52 32 52Z"
                fill="#F4B8C8"
                stroke="#C98E7C"
                strokeWidth="3"
              />
            </svg>
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#755863",
            }}
          >
            {loveContent.siteMeta.ogSubtitle}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
