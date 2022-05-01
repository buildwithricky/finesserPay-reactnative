import React from "react";
import plusIcon from "../../assets/plusIcon.png";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
const PlusButton = () => {
  return (
    <View style={styles.plusButton}>
      <TouchableWithoutFeedback>
        <Image source={plusIcon} />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  plusButton: {
    height: 35,
    width: 35,
    backgroundColor: "#F9F9F9",
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    borderRadius: 8,
    shadowRadius: 6,
  },
});
export default PlusButton;
