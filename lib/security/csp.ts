type ContentSecurityPolicyOptions = {
  nonce: string;
  isDevelopment: boolean;
};

export function buildContentSecurityPolicy({
  nonce,
  isDevelopment,
}: ContentSecurityPolicyOptions) {
  return [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${
      isDevelopment ? " 'unsafe-eval'" : ""
    }`,
    `style-src 'self' 'nonce-${nonce}'`,
    "img-src 'self' data: blob:",
    "font-src 'self'",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "frame-src 'none'",
    "worker-src 'self' blob:",
    "manifest-src 'self'",
    "media-src 'self'",
    !isDevelopment ? "upgrade-insecure-requests" : "",
  ]
    .filter(Boolean)
    .join("; ");
}
