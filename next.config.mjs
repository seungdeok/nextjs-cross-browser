/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@tanstack/react-query",
    "@tanstack/query-core",
    "recoil",
  ],
  webpack(config) {
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();

      if (entries["main.js"]) {
        entries["main.js"].unshift("./src/polyfills.ts");
      }

      return entries;
    };

    return config;
  },
};

export default nextConfig;
