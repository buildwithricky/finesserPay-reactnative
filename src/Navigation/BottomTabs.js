import React from "react";
import {
  Text,
  StyleSheet,
  Image,
  Pressable,
  View,
  TouchableOpacity,
  Dimensions,
  Platform,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native";
import { icons } from "../utils/icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { colors, fonts, fontSizes } from "../utils/utils";
import { drawerIcons } from "../utils/icons";

import Home from "../screens/UserScreens/HomeScreen";
import Wallet from "../screens/UserScreens/Wallet";
import Schedule from "../screens/UserScreens/Schedule";

import Notify from "../screens/UserScreens/Notify";
import Profile from "../screens/UserScreens/Profile";
import PlusButton from "../components/PlusButton";

const { height } = Dimensions.get("screen");
// tab navigation

const Tab = createBottomTabNavigator();
//tab button
const buttonNativeFeedback = ({ children, style, ...props }) => (
  <TouchableNativeFeedback
    {...props}
    useForeground={true}
    background={TouchableNativeFeedback.Ripple("#00000", false, 55)}
  >
    <View style={style}>{children}</View>
  </TouchableNativeFeedback>
);

const buttonOpacity = (props) => <TouchableOpacity {...props} />;
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerLeft: (props) => (
          <TouchableOpacity
            style={{
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              width: 50,
            }}
            onPress={navigation.openDrawer}
          >
            <Image source={drawerIcons.openBtn} />
          </TouchableOpacity>
        ),

        headerRightContainerStyle: {
          right: 5,
          justifyContent: "center",
          alignItems: "center",
        },

        headerTitleAlign: "center",
        headerTitleStyle: {
          color: colors.primaryColor,
          fontSize: 32,
          fontFamily: fonts.semiBold,
          lineHeight: 40,
        },
        headerShadowVisible: false,
        headerStyle: {
          height: height * 0.1,
        },
        headerLeftContainerStyle: {
          left: 3,
        },

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HOME") {
            iconName = icons.homeIcon;
          } else if (route.name === "WALLET") {
            iconName = icons.walletIcon;
          } else if (route.name === "SCHEDULE") {
            iconName = icons.calendarIcon;
          } else if (route.name === "NOTIFY") {
            iconName = icons.notificationIcon;
          } else if (route.name === "PROFILE") {
            iconName = icons.ellipseIcon;
          }

          return (
            <Image
              source={iconName}
              style={{
                opacity: focused ? 1 : 0.7,
                resizeMode: "contain",
              }}
            />
          );
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarButton:
          Platform.os === "ios" ? buttonOpacity : buttonNativeFeedback,

        tabBarStyle: {
          height: 80,
          overflow: "hidden",
          borderTopStartRadius: 30,
          position: "absolute",
          borderTopEndRadius: 30,
          shadowColor: "#000000",
          shadowOffset: { width: 5, height: 10 },
          shadowRadius: 6,
          elevation: 10,
        },
        tabBarLabelStyle: {
          marginBottom: 15,
          fontFamily: fonts.semiBold,
          fontSize: 8,
          color: "#1C1C1C",
        },
        tabBarBadgeStyle: {
          backgroundColor: "#EEB315",
          color: "#FFFFFF",
        },
        tabBarItemStyle: {
          paddingTop: 15,

          justifyConter: "center",
        },
      })}
    >
      <Tab.Screen
        name="HOME"
        component={Home}
        options={{
          headerRight: (props) => (
            <Text>
              <Image source={drawerIcons.downArrow} />
              Individual/Music
            </Text>
          ),
          headerTitle: (props) => (
            <Image
              style={{
                height: 45,
                width: 45,
              }}
              source={drawerIcons.logo}
            />
          ),
        }}
      />
      <Tab.Screen
        name="WALLET"
        component={Wallet}
        options={{
          headerRight: (props) => <PlusButton />,
        }}
      />
      <Tab.Screen name="SCHEDULE" component={Schedule} />
      <Tab.Screen
        name="NOTIFY"
        component={Notify}
        options={{ tabBarBadge: 3 }}
      />
      <Tab.Screen
        name="PROFILE"
        component={Profile}
        options={{
          headerTitleContainerStyle: {
            display: "none",
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
