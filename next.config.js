/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'kr-KR'],
    defaultLocale: 'en-US',
    domains: [
      {
        domain: 'everstarglobal.local.en:3000',
        defaultLocale: 'en-US',
        http: true,
      },
      {
        domain: 'everstarglobal.local.kr:3000',
        defaultLocale: 'kr-KR',
        http: true,
      },
    ],
  },
}
