# Nexora Security Notes

## What was hardened

- Global security headers are configured centrally in `next.config.ts`.
- A nonce-based Content Security Policy is applied in `proxy.ts`.
- The contact form now validates and sanitizes on both client and server.
- Payload size, unexpected keys, suspicious patterns, and malformed content types are rejected.
- The public contact endpoint now uses a honeypot, cooldown, and IP-based rate limiting.
- Origin and referer checks protect the endpoint from cross-site abuse.
- Error responses are standardized and avoid leaking internal details.
- Unused public assets were removed to reduce exposed surface.
- Production browser source maps are disabled.

## Supported environment variables

All variables are optional. If they are not present, the project falls back to the public contact defaults already defined in the codebase.

- `CONTACT_RECIPIENT_EMAIL`
- `CONTACT_RECIPIENT_WHATSAPP`
- `CONTACT_RATE_LIMIT_MAX`
- `CONTACT_RATE_LIMIT_WINDOW_MS`
- `CONTACT_COOLDOWN_MS`
- `CONTACT_MAX_BODY_SIZE_BYTES`

The `.env.example` file documents only server-side variables. Do not place secrets in keys prefixed with `NEXT_PUBLIC_`.

## Operational notes

- The current rate limiting is in-memory. It works as lightweight protection for Vercel/serverless, but a distributed external store is recommended if the project needs stronger cross-region abuse protection.
- The CSP uses nonces, so the main route is rendered dynamically to let Next.js attach nonces safely.
- Origin validation accepts the request origin and the forwarded host/protocol seen behind a proxy, which keeps the endpoint compatible with Vercel, custom domains, and local development without opening it to arbitrary origins.
