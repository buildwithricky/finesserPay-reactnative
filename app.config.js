export default ({ ...config }) => ({
  icon: './assets/ios.png',
  splash: {
    image: './assets/iphone-preview.png',
    resizeMode: 'cover',
    backgroundColor: '#ffffff',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive.png',
      backgroundColor: '#FFFFFF',
    },
  },
});
