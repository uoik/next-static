/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: ".",
  webpack: (config) => {
    config.externals = [
      ...config.externals,
      {
        canvas: 'canvas',
        bufferutil: 'bufferutil', // 配置bufferutil的警告
        'utf-8-validate': 'utf-8-validate', // 配置 utf-8-validate 的警告
        indexof: 'indexof', // 配置 indexof 的警告
      },
    ];
    return config;
  },
};

export default nextConfig;
