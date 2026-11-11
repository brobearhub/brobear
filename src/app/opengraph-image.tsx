import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          backgroundColor: "#171717",
          backgroundImage:
            "radial-gradient(1000px 600px at 60% 40%, rgba(240, 44, 32, 0.22), rgba(7, 7, 7, 0.96) 70%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              gap: 18,
              alignItems: "baseline",
              fontSize: 78,
              fontWeight: 900,
              color: "#f7efe8",
              letterSpacing: -1.2,
              lineHeight: 1,
            }}
          >
            <span>Бурый</span>
            <span style={{ color: "#f02c20" }}>Медведь</span>
          </div>
          <div style={{ fontSize: 32, fontWeight: 700, color: "rgba(247, 239, 232, 0.85)", lineHeight: 1.25 }}>
            Центр разработки и автоматизации бизнеса
          </div>
          <div style={{ marginTop: 10, fontSize: 28, fontWeight: 600, color: "rgba(247, 239, 232, 0.72)" }}>
            Веб‑приложения · CRM · AI‑решения
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
