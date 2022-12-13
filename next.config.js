/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  reactStrictMode: true,
  i18n: {
    /**
     * Provide the locales you want to support in your application
     */
    locales: ['en', 'kr'],
    /**
     * This is the default locale you want to be used when visiting
     * a non-locale prefixed path.
     */
    defaultLocale: 'en',
    domains: [
      {
        domain: 'everstarglobal.local.en',
        defaultLocale: 'en',
      },
      {
        domain: 'everstarglobal.local.kr',
        defaultLocale: 'kr',
      },
      // {
      //   domain: 'example.fr',
      //   defaultLocale: '',
      //   // an optional http field can also be used to test
      //   // locale domains locally with http instead of https
      //   http: true,
      // },
    ],
  },
}

// module.exports = nextConfig
