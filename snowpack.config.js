// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/dist'
  },
  plugins: [
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv'
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    tailwindConfig: '/tailwind.config.js'
  },
  buildOptions: {
    /* ... */
  },
};
