const withTwin = require('./withTwin.js')

/**
 * @type {import('next').NextConfig}
 */
module.exports = withTwin({
  output:
    process.env.NEXT_PUBLIC_STORYBLOK_VERSION !== 'draft'
      ? 'export'
      : undefined,
  reactStrictMode: true,
})
