module.exports = {
  presets: [
    "module:metro-react-native-babel-preset",
    ["@babel/preset-react", { runtime: "automatic", development: false }]
  ],
  plugins: [
    ["@babel/plugin-transform-private-methods", { loose: true }]
  ],
};