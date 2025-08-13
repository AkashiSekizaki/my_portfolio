/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // basePath を削除またはコメントアウト
  // basePath: '/my_portfolio',

  // または、basePath が必要な場合は空文字に
  basePath: "",
};

module.exports = nextConfig;
