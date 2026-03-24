import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 18,
          background:
            "radial-gradient(circle at top right, rgba(124,58,237,0.32), transparent 42%), linear-gradient(180deg, #0a1022 0%, #060913 100%)",
          border: "1px solid rgba(145, 167, 255, 0.2)",
        }}
      >
        <div
          style={{
            position: "relative",
            width: 34,
            height: 34,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 34,
              height: 7,
              borderRadius: 999,
              transform: "rotate(45deg)",
              background:
                "linear-gradient(90deg, rgba(97,166,255,1) 0%, rgba(196,181,253,1) 100%)",
              boxShadow: "0 0 18px rgba(97, 166, 255, 0.6)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 34,
              height: 7,
              borderRadius: 999,
              transform: "rotate(-45deg)",
              background:
                "linear-gradient(90deg, rgba(196,181,253,1) 0%, rgba(97,166,255,1) 100%)",
              boxShadow: "0 0 18px rgba(124, 58, 237, 0.45)",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
