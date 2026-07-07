/** @type {import('next').NextConfig} */
const isProd = process.env.GITHUB_ACTIONS === 'true'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/page' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/page' : '',
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig