const api = require('./api/api.json');
const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  exportPathMap() {
    const courses = api.course;
    const staticPages = {
      '/404': { page: '/_error' },
      '/courses': { page: '/courses' },
      '/favorites': { page: '/favorites' },
      '/index': { page: '/index' },
      '/login': { page: '/login' },
      '/signin': { page: '/signin' },
      '/': { page: '/' },
    };

    const pages = courses.reduce(
      (pages, post) =>
        Object.assign(
          {},
          pages,
          {
            [`/detail/${post.id}`]: {
              page: '/detail',
              query: { id: post.id },
            },
          },
          {
            [`/course-register/${post.id}`]: {
              page: '/course-register',
              query: { id: post.id },
            },
          },
        ),
      {},
    );

    return Object.assign({}, pages, staticPages);
  },
  assetPrefix: isProd ? 'http://kitlab.pef.czu.cz/1819zs/ete89e/02/' : './',
  publicRuntimeConfig: {
    cdnPath: isProd ? 'http://kitlab.pef.czu.cz/1819zs/ete89e/02/' : '',
    linkPrefix: isProd ? 'http://kitlab.pef.czu.cz/1819zs/ete89e/02' : '',
  },
  webpack: (config, options) => {
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
  },
};
