import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import { Asset, useAssets } from 'expo-asset';
import { GetStarted } from './src/screens/Getstarted';
import SignUp from './src/screens/Signup'
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import BackIcon from "./src/utils/BackIcon"
import theme from  './src/utils/theme'

//Fonts
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';
import {colors,fonts} from "./src/utils/utils"
import Constants from 'expo-constants';
import * as SplashScreen from 'expo-splash-screen';
import * as Updates from 'expo-updates';
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  Animated,
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
const   Stack = createStackNavigator();

// Instruct SplashScreen not to hide yet, we want to do this manually
SplashScreen.preventAutoHideAsync().catch(() => {
  /* reloading the app might trigger some race conditions, ignore them */
});

export default function App() {
  const [assets, error] = useAssets([
    require('./assets/iphone-preview.png'),
    require('./assets/ios.png'),
    require('./assets/adaptive.png'),
  ]);

  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return assets ? (
      <AnimatedAppLoader
        image={require('./assets/iphone-preview.png')}>
       
        <MainScreen />
      </AnimatedAppLoader>
    ) : (
      <View>
        <Text>an error occurred</Text>
      </View>
    );
  }
}

function AnimatedAppLoader({ children, image }) {
  const [isSplashReady, setSplashReady] =
    useState(false);

  const startAsync = useCallback(
    // If you use a local image with require(...), use `Asset.fromModule`
    () => Asset.fromModule(image).downloadAsync(),
    [image]
  );

  const onFinish = useCallback(
    () => setSplashReady(true),
    []
  );

  if (!isSplashReady) {
    return (
      <AppLoading
        // Instruct SplashScreen not to hide yet, we want to do this manually
        autoHideSplash={false}
        startAsync={startAsync}
        onError={console.error}
        onFinish={onFinish}
      />
    );
  }

  return (
    <AnimatedSplashScreen image={image}>
      {children}
    </AnimatedSplashScreen>
  );
}

function AnimatedSplashScreen({
  children,
  image,
}) {
  const animation = useMemo(
    () => new Animated.Value(1),
    []
  );
  const [isAppReady, setAppReady] =
    useState(false);
  const [
    isSplashAnimationComplete,
    setAnimationComplete,
  ] = useState(false);

  useEffect(() => {
    if (isAppReady) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => setAnimationComplete(true));
    }
  }, [isAppReady]);

  const onImageLoaded = useCallback(async () => {
    try {
      await SplashScreen.hideAsync();
      // Load stuff
      await Promise.all([]);
    } catch (e) {
      // handle errors
    } finally {
      setAppReady(true);
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isAppReady && children}
      {!isSplashAnimationComplete && (
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor:
                Constants.manifest.splash
                  .backgroundColor,
              opacity: animation,
            },
          ]}>
          <Animated.Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode:
                Constants.manifest.splash
                  .resizeMode || 'contain',
              transform: [
                {
                  scale: animation,
                },
              ],
            }}
            source={image}
            onLoadEnd={onImageLoaded}
            fadeDuration={0}
          />
        </Animated.View>
      )}
    </View>
  );
}
// app entry point
const MyStack = ()=>{
  return(
    <Stack.Navigator  screenOptions={{    
    headerBackImage: ()=>(<BackIcon width={25} height={17} />),
      headerTitleAlign: 'center', headerTitleStyle: {
       color :colors.primaryColor,
       fontSize:32,
       fontFamily:fonts.bold,
       lineHeight:40
           
          }, headerShadowVisible: false, // applied here
    headerBackTitleVisible: false,  headerStyle: {
           height:150 }}}>
      <Stack.Screen name="gettingStarted" component={GetStarted} options={{headerShown: false}}  />
      <Stack.Screen name="SIGN UP" component={SignUp} />
      
    </Stack.Navigator>
  )
  
}


function MainScreen({ fonts }) {
  const onReloadPress = useCallback(() => {
    if (Platform.OS === 'web') {
      location.reload();
    } else {
      Updates.reloadAsync();
    }
  }, []);

  return (
    <PaperProvider theme={theme}>
     <NavigationContainer>
   <MyStack/>
   </NavigationContainer >
    </PaperProvider>
  
  );
}
