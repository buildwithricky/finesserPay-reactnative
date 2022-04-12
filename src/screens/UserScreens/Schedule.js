import React,{useEffect} from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { colors, fonts, fontSizes } from "../../utils/utils";
const Schdule = () => {
   useEffect(() => {
   alert("still in development come back soon") 
  }, [])
  return (
    <View style={styles.container}>
      <Text>Schedule is still in development check back soon</Text>
    </View>
  );
};

export default Schdule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.contextColor,
  },
});
