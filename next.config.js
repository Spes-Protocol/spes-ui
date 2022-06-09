module.exports = {
  // reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'unsplash.com'],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      child_process: false,
      readline: false,
    };
    return config;
  },
}

