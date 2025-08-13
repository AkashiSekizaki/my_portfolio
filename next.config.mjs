// next.config.mjs
/** @type {import('next').NextConfig} */

// ✅ ここをあなたのリポジトリ名に合わせて変更
const repo = "my_portfolio";

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // GitHub Pages は静的サイトのみ → 静的エクスポート
  output: "export",

  // プロジェクトページ（https://username.github.io/<repo>/）用のベースパス設定
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",

  // GitHub Pages でルート/配下の index.html を確実に解決させるための保険
  trailingSlash: true,

  // 画像は静的に最適化（外部最適化サーバーは使わない）
  images: { unoptimized: true },

  // （既存設定を維持）
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  // ベースパスをクライアント側でも使えるように（<img> などで利用）
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : "",
  },
};

export default nextConfig;
