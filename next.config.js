/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "kr-KR"],
    defaultLocale: "kr-KR",
    domains: [
      {
        domain: "everstar-global-en.vercel.app",
        defaultLocale: "en-US",
      },
      {
        domain: "everstar-global-kr.vercel.app",
        defaultLocale: "kr-KR",
      },
    ],
  },
};
