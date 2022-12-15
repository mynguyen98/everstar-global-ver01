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
        domain: "everstar.en:3000",
        defaultLocale: "en-US",
      },
      {
        domain: "everstar.kr:3000",
        defaultLocale: "kr-KR",
      },
    ],
  },
};
