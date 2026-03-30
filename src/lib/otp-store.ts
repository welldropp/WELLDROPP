// In-memory OTP store with automatic cleanup
// In production with multiple instances, use Redis or a database instead.

interface OtpEntry {
  code: string;
  createdAt: number;
  attempts: number;
}

const store = new Map<string, OtpEntry>();

// Clean up expired entries every 5 minutes
const OTP_TTL_MS = 10 * 60 * 1000; // 10 minutes

if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of store) {
      if (now - entry.createdAt > OTP_TTL_MS) {
        store.delete(key);
      }
    }
  }, 5 * 60 * 1000);
}

export const otpStore = {
  get(email: string): OtpEntry | undefined {
    const entry = store.get(email.toLowerCase());
    if (entry && Date.now() - entry.createdAt > OTP_TTL_MS) {
      store.delete(email.toLowerCase());
      return undefined;
    }
    return entry;
  },

  set(email: string, entry: OtpEntry) {
    store.set(email.toLowerCase(), entry);
  },

  delete(email: string) {
    store.delete(email.toLowerCase());
  },
};
