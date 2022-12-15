/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ko"],
    defaultLocale: "ko",
    domains: [
      {
        domain: "everstar-global-en.vercel.app",
        defaultLocale: "en",
      },
      {
        domain: "everstar-global-kr.vercel.app",
        defaultLocale: "ko",
      },
    ],
  },
};
