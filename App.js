import AppLoading from "expo-app-loading";
import { Asset, useAssets } from "expo-asset";
import { GetStarted } from "./src/screens/authScreens/Getstarted";
import SignUp from "./src/screens/authScreens/Signup";
import Verify from "./src/screens/authScreens/Verify";
import Completed from "./src/screens/authScreens/Completed";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";

import SideDrawer from "./src/Navigation/SideDrawer";

import { SelectInterest } from "./src/screens/authScreens/SelectInterest";
import { SelectAccountType } from "./src/screens/authScreens/SelectAccountType";

import BackIcon from "./src/utils/BackIcon";
import theme from "./src/utils/theme";

//Fonts
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";
import { colors, fonts } from "./src/utils/utils";
import Constants from "expo-constants";
import * as SplashScreen from "expo-splash-screen";
import * as Updates from "expo-updates";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Tabs from "./src/Navigation/BottomTabs";

const Stack = createStackNavigator();

// Instruct SplashScreen not to hide yet, we want to do this manually
SplashScreen.preventAutoHideAsync().catch(() => {
  /* reloading the app might trigger some race conditions, ignore them */
});

export default function App() {
  const [assets, error] = useAssets([
    require("./assets/iphone-preview.png"),
    require("./assets/ios.png"),
    require("./assets/adaptive.png"),
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
      <AnimatedAppLoader image={require("./assets/iphone-preview.png")}>
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
  const [isSplashReady, setSplashReady] = useState(false);

  const startAsync = useCallback(
    // If you use a local image with require(...), use `Asset.fromModule`
    () => Asset.fromModule(image).downloadAsync(),
    [image]
  );

  const onFinish = useCallback(() => setSplashReady(true), []);

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

  return <AnimatedSplashScreen image={image}>{children}</AnimatedSplashScreen>;
}

function AnimatedSplashScreen({ children, image }) {
  const animation = useMemo(() => new Animated.Value(1), []);
  const [isAppReady, setAppReady] = useState(false);
  const [isSplashAnimationComplete, setAnimationComplete] = useState(false);

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
              backgroundColor: Constants.manifest.splash.backgroundColor,
              opacity: animation,
            },
          ]}
        >
          <Animated.Image
            style={{
              width: "100%",
              height: "100%",
              resizeMode: Constants.manifest.splash.resizeMode || "contain",
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

// change default transition for android

//app navigationComponent
const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerBackImage: () => <BackIcon width={25} height={17} />,
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: colors.primaryColor,
          fontSize: 32,
          fontFamily: fonts.semiBold,
          lineHeight: 40,
        },
        headerShadowVisible: false, // applied here
        headerBackTitleVisible: false,
        headerStyle: {
          height: 150,
        },
      }}
    >
      <Stack.Screen
        name="gettingStarted"
        component={GetStarted}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SIGN UP" component={SignUp} />
      <Stack.Screen name="Verify" component={Verify} />
      <Stack.Screen
        name="Completed"
        options={{ headerShown: false }}
        component={SelectAccountType}
      />
      {/* <Stack.Screen name="Account Type"  options={{headerShown: false}}  component={SelectAccountType} /> */}
      <Stack.Screen
        name="SelectInterest"
        options={{ headerShown: false }}
        component={SelectInterest}
      />
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Tabs}
      />
    </Stack.Navigator>
  );
};

const MyStack = () => {
  return <SideDrawer item={AppNavigator} />;
};

function MainScreen({ fonts }) {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
