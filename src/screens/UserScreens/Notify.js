import React,{useEffect} from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { colors, fonts, fontSizes } from "../../utils/utils";
const Notify = () => {
  useEffect(() => {
   alert("still in development come back soon") 
  }, [])
  return (
    <View style={styles.container}>
      <Text>notify</Text>
    </View>
  );
};

export default Notify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.contextColor,
  },
});
