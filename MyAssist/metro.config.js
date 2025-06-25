const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

const customConfig = {
  resolver: {
    sourceExts: [...defaultConfig.resolver.sourceExts, 'js', 'json', 'ts', 'tsx', 'svg'],
    blacklistRE: /node_modules\/react-native\/Libraries\/vendor\/emitter\/.*/,
    assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== "svg"),
  },
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),

  },
};

module.exports = mergeConfig(defaultConfig, customConfig);
