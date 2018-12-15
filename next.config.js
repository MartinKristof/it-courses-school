module.exports = (config, options) => {
  const configOptions = config;
  const { dev } = options;

  if (!dev) {
    const originalEntry = configOptions.entry;
    configOptions.entry = async () => {
      const entries = await originalEntry();

      if (
        entries['main.js'] &&
        !entries['main.js'].includes('./polyfills/index.js')
      ) {
        entries['main.js'].unshift('./polyfills/index.js');
      }

      return entries;
    };
  }

  return configOptions;
};
