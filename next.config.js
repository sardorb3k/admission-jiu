/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  // middlewares: [
  //   (req, res, next) => {
  //     console.log("Incoming request:", req.url);
  //     next();
  //   },
  // ],
};

module.exports = nextConfig;
