type RateLimitOptions = {
  windowMs: number;
  maxRequests: number;
  cooldownMs: number;
};

type RateLimitEntry = {
  count: number;
  resetAt: number;
  cooldownUntil: number;
};

type RateLimitResult = {
  allowed: boolean;
  retryAfterSeconds: number;
};

declare global {
  var __nexoraRateLimitStore: Map<string, RateLimitEntry> | undefined;
}

const rateLimitStore = globalThis.__nexoraRateLimitStore ?? new Map();

if (!globalThis.__nexoraRateLimitStore) {
  globalThis.__nexoraRateLimitStore = rateLimitStore;
}

const normalizeIp = (value: string | null) => {
  if (!value) {
    return "unknown";
  }

  const candidate = value
    .split(",")[0]
    .trim()
    .replace(/[^a-fA-F0-9:.\-]/g, "");

  return candidate || "unknown";
};

export function getClientIp(headers: Headers) {
  return normalizeIp(
    headers.get("x-forwarded-for") ??
      headers.get("x-real-ip") ??
      headers.get("cf-connecting-ip"),
  );
}

export function checkRateLimit(
  key: string,
  options: RateLimitOptions,
): RateLimitResult {
  const now = Date.now();

  for (const [entryKey, entry] of rateLimitStore.entries()) {
    if (entry.resetAt <= now && entry.cooldownUntil <= now) {
      rateLimitStore.delete(entryKey);
    }
  }

  const current = rateLimitStore.get(key);
  const hasExpiredWindow = !current || current.resetAt <= now;

  const entry: RateLimitEntry = hasExpiredWindow
    ? {
        count: 0,
        resetAt: now + options.windowMs,
        cooldownUntil: 0,
      }
    : current;

  const retryAfterMs = Math.max(entry.cooldownUntil - now, entry.resetAt - now);

  if (entry.cooldownUntil > now || entry.count >= options.maxRequests) {
    rateLimitStore.set(key, entry);

    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil(retryAfterMs / 1000)),
    };
  }

  entry.count += 1;
  entry.cooldownUntil = now + options.cooldownMs;

  rateLimitStore.set(key, entry);

  return {
    allowed: true,
    retryAfterSeconds: 0,
  };
}
