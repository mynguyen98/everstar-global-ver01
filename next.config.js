/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  reactStrictMode: true,
  i18n: {
    /**
     * Provide the locales you want to support in your application
     */
    locales: ["en-US", "kr-KR"],
    // localeDetection: false,
    /**
     * This is the default locale you want to be used when visiting
     * a non-locale prefixed path.
     */
    defaultLocale: "en-US",
    domains: [
      {
        domain: "everstar.en",
        defaultLocale: "en-US",
      },
      {
        domain: "everstar.kr",
        defaultLocale: "kr-KR",
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
};

// module.exports = nextConfig
