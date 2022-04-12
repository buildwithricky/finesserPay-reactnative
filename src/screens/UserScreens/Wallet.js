import React,{useEffect} from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet ,StatusBar} from "react-native";
import { colors, fonts, fontSizes } from "../../utils/utils";
const Wallet = () => {
   useEffect(() => {
   alert("still in development come back soon") 
  }, [])
  return (
    <>
    <View style={styles.container}>
      <Text>wallet</Text>
    </View>
    </>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.contextColor,
  },
});
