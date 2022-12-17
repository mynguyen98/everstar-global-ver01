/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ko"],
    defaultLocale: "ko",
    localeDetection: false,
    domains: [
      {
        // domain: "everstar-global-en.vercel.app",
        domain: "everstar.en:3000",
        defaultLocale: "en",
        http: true,
      },
      {
        // domain: "everstar-global-kr.vercel.app",
        domain: "everstar.kr:3000",
        defaultLocale: "ko",
        http: true,
      },
    ],
  },
};
