/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  env: {
    RAPID_API_KEY:
      '335a87ec20mshd0e2587349a109ep1cae92jsncff28a0b7280',
  },

  images: {
    remotePatterns: [
      {
        hostname: 'd205bpvrqc9yn1.cloudfront.net',
      },
    ],
  },
};
