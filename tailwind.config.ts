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
            "--tw-prose-body": "var(--foreground)",
            "--tw-prose-headings": "var(--foreground)",
            "--tw-prose-lead": "var(--foreground)",
            "--tw-prose-links": "var(--foreground)",
            "--tw-prose-bold": "var(--foreground)",
            "--tw-prose-counters": "var(--foreground)",
            "--tw-prose-bullets": "var(--foreground)",
            "--tw-prose-hr": "var(--foreground)",
            "--tw-prose-quotes": "var(--foreground)",
            "--tw-prose-quote-borders": "var(--foreground)",
            "--tw-prose-captions": "var(--foreground)",
            "--tw-prose-code": "var(--foreground)",
            "--tw-prose-pre-code": "var(--foreground)",
            "--tw-prose-pre-bg": "var(--foreground)",
            "--tw-prose-th-borders": "var(--foreground)",
            "--tw-prose-td-borders": "var(--foreground)",
            "--tw-prose-invert-body": "var(--foreground)",
            "--tw-prose-invert-headings": "var(--foreground)",
            "--tw-prose-invert-lead": "var(--foreground)",
            "--tw-prose-invert-links": "var(--foreground)",
            "--tw-prose-invert-bold": "var(--foreground)",
            "--tw-prose-invert-counters": "var(--foreground)",
            "--tw-prose-invert-bullets": "var(--foreground)",
            "--tw-prose-invert-hr": "var(--foreground)",
            "--tw-prose-invert-quotes": "var(--foreground)",
            "--tw-prose-invert-quote-borders": "var(--foreground)",
            "--tw-prose-invert-captions": "var(--foreground)",
            "--tw-prose-invert-code": "var(--foreground)",
            "--tw-prose-invert-pre-code": "var(--foreground)",
            "--tw-prose-invert-pre-bg": "var(--foreground)",
            "--tw-prose-invert-th-borders": "var(--foreground)",
            "--tw-prose-invert-td-borders": "var(--foreground)",
          },
        },
      }),
    },
  },
  plugins: [],
} satisfies Config;
