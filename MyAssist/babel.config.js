module.exports = {
  presets: ['module:@react-native/babel-preset', '@babel/preset-typescript'],
  plugins: ['babel-plugin-styled-components',['react-native-reanimated/plugin', { relativeSourceLocation: true }],],
};
