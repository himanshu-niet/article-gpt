/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["i.imgur.com", "www.google.com", "media.giphy.com"],
  },
};

module.exports = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://article-gpt.vercel.app/:path*',
          },
        ]
      },
  };

// const withPWA = require("next-pwa");

// module.exports = withPWA({
//   dest: "public",
//   register: true,
//   disable: process.env.NODE_ENV === "development",
//   skipWaiting: true,
// });
