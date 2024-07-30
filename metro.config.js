const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  const { assetExts, sourceExts } = defaultConfig.resolver;

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
      assetExts: [...assetExts, 'png', 'otf', 'ttf'].filter(ext => ext !== 'json'),
      sourceExts: [...sourceExts, 'json'], // Add 'json' to sourceExts
    },
  };
})();