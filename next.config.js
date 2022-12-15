/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "kr-KR"],
    defaultLocale: "en-US",
    domains: [
      {
        domain: "https://everstar-global-en.vercel.app",
        defaultLocale: "en-US",
      },
      {
        domain: "https://everstar-global-en.vercel.app",
        defaultLocale: "kr-KR",
      },
    ],
  },
};
