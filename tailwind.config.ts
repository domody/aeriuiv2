import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: () => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "oklch(var(--foreground))",
            "--tw-prose-headings": "oklch(var(--foreground))",
            "--tw-prose-lead": "oklch(var(--foreground))",
            "--tw-prose-links": "oklch(var(--foreground))",
            "--tw-prose-bold": "oklch(var(--foreground))",
            "--tw-prose-counters": "oklch(var(--foreground))",
            "--tw-prose-bullets": "oklch(var(--foreground))",
            "--tw-prose-hr": "oklch(var(--foreground))",
            "--tw-prose-quotes": "oklch(var(--foreground))",
            "--tw-prose-quote-borders": "oklch(var(--foreground))",
            "--tw-prose-captions": "oklch(var(--foreground))",
            "--tw-prose-code": "oklch(var(--foreground))",
            "--tw-prose-pre-code": "oklch(var(--foreground))",
            "--tw-prose-pre-bg": "oklch(var(--foreground))",
            "--tw-prose-th-borders": "oklch(var(--foreground))",
            "--tw-prose-td-borders": "oklch(var(--foreground))",
            "--tw-prose-invert-body": "oklch(var(--foreground))",
            "--tw-prose-invert-headings": "oklch(var(--foreground))",
            "--tw-prose-invert-lead": "oklch(var(--foreground))",
            "--tw-prose-invert-links": "oklch(var(--foreground))",
            "--tw-prose-invert-bold": "oklch(var(--foreground))",
            "--tw-prose-invert-counters": "oklch(var(--foreground))",
            "--tw-prose-invert-bullets": "oklch(var(--foreground))",
            "--tw-prose-invert-hr": "oklch(var(--foreground))",
            "--tw-prose-invert-quotes": "oklch(var(--foreground))",
            "--tw-prose-invert-quote-borders": "oklch(var(--foreground))",
            "--tw-prose-invert-captions": "oklch(var(--foreground))",
            "--tw-prose-invert-code": "oklch(var(--foreground))",
            "--tw-prose-invert-pre-code": "oklch(var(--foreground))",
            "--tw-prose-invert-pre-bg": "oklch(var(--foreground))",
            "--tw-prose-invert-th-borders": "oklch(var(--foreground))",
            "--tw-prose-invert-td-borders": "oklch(var(--foreground))",
          },
        },
      }),
    },
  },
  plugins: [],
} satisfies Config;
