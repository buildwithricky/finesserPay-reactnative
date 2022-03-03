export default ({ ...config }) => ({
  icon: './assets/ios.png',
  splash: {
    image: './assets/iphone-preview.png',
    resizeMode: 'cover',
    backgroundColor: '#EEB315',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive.png',
      backgroundColor: '#FFFFFF',
    },
  },
  // expo: {
  //   name: 'your app name',
  //   android: {
  //     package: 'com.creativeIndustry.finesser',
  //   },
  //   ios: {
  //     supportsTablet: true,
  //   },
  // },
});
