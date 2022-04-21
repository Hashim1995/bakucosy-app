module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co"],
  },
  async rewrites() {
    return [
      {
        source: "/product/:path*",
        destination: "https://bakucosybackend.vercel.app/productlist/:path*",
      },
    ];
  },
};
