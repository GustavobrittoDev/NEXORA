export const GLOBAL_SECURITY_HEADERS = [
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value:
      "accelerometer=(), autoplay=(), camera=(), clipboard-read=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), publickey-credentials-get=(), usb=(), xr-spatial-tracking=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-origin",
  },
  {
    key: "X-Permitted-Cross-Domain-Policies",
    value: "none",
  },
  {
    key: "Origin-Agent-Cluster",
    value: "?1",
  },
] as const;

export const PROJECT_PREVIEW_HEADERS = [
  {
    key: "Content-Security-Policy",
    value: "default-src 'none'; img-src 'self' data:; style-src 'unsafe-inline'; sandbox;",
  },
  {
    key: "Content-Disposition",
    value: "inline",
  },
] as const;
