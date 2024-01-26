/** @type {import('next').NextConfig} */

const path = require('path')

const outputFileTracingRoot = path.join(__dirname)

const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['sqlite3'],
  },
}

module.exports = nextConfig
