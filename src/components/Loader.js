import React from "react";
import { View, ActivityIndicator } from "react-native";

export const Loader = () => {
  return (
    <View>
      <ActivityIndicator size="small" color="#0000ff" />
    </View>
  );
};
