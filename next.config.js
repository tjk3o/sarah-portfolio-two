const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
});
