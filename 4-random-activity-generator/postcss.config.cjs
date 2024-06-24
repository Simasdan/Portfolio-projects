module.exports = () => ({
  plugins: {
    'postcss-import': {},
    '@flemist/postcss-advanced-variables': {},
    'postcss-preset-env': {
      stage: 2,
      autoprefixer: {
        add: true,
        grid: true,
        flexbox: true,
      },
      features: {
        'nesting-rules': true,
        'custom-properties': false,
      },
    },
  },
});
