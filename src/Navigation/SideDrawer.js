import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {width,height} from "../utils/utils"

import { Image, View, Text, Button, TouchableOpacity } from "react-native";
import CustomDrawerContent from "./DrawerContent"
 const Drawer = createDrawerNavigator();

const MyDrawer = ({ item, navigation }) => {
  return (
    <Drawer.Navigator
    useLegacyImplementaion
    screenOptions={{
      swipeEnabled:false
   , drawerStyle: {
      backgroundColor: '#FFFFFF',
      width: width * 0.6,
      borderTopEndRadius:width * 0.09,
        borderBottomEndRadius:width *0.09,
    },
    }}
      drawerContent={(props)=> <CustomDrawerContent {...props}/>}
      // drawerStyle
      
      drawerHideStatusBarOnOpen={false}
    >
      <Drawer.Screen
        name="HomeEntry"
        component={item}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="Portfolio" component={item} />
      <Drawer.Screen name="Invoicing" component={item} />
      <Drawer.Screen name="Legal" component={item} />
      <Drawer.Screen name="Academy" component={item} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
