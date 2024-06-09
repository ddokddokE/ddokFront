module.exports = {
  root: true,
  extends: [
    '@react-native',
    '@react-native-community',
    'prettier'
  ],
  rules: {
    'prettier/prettier': ['error', { 'endOfLine': 'auto' }],
  },
};
