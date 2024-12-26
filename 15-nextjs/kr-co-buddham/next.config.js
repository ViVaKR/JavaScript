const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
    openAnalyzer: true
});

module.exports = withBundleAnalyzer({
    reactStrictMode: true,
    experimental: {
        // This will show more detailed hydration error messages
    }
});
