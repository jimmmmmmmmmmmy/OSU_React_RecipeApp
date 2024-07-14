const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  return {
    ...defaultConfig,
    watchFolders: [
      // Add any additional directories you want to watch
    ],
    server: {
      watchOptions: {
        ignored: /node_modules/,
        max_user_watches: 200000,
      },
    },
    resolver: {
      ...defaultConfig.resolver,
      assetExts: [...defaultConfig.resolver.assetExts, 'png', 'otf', 'ttf'],
    },
  };
})();