/** @type {import('next').NextConfig} */
const nextConfig = {
  // 開発時は output: export を無効化
  ...(process.env.NODE_ENV === "production" && {
    output: "export",
    trailingSlash: true,
  }),
};

export default nextConfig;
