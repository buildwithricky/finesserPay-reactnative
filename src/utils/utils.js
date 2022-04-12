import { Dimensions } from "react-native";

export const { height, width } = Dimensions.get("screen");
export const colors = {
  primaryColor: "#EEB315",
  secondaryColor: "#0B0B0B",
  accent:"#1C1C1C",
  contextColor: "#FFFFFF",
};

export const fonts = {
  light: "Quicksand_300Light",
  regular: "Quicksand_400Regular",
  medium: "Quicksand_500Medium",
  semiBold: "Quicksand_600SemiBold",
  bold: "Quicksand_700Bold",
};

export const fontSizes = {
  xs: 12,
  s: 14,
  sm: 16,
  ssm: 18,
  md: 20,
  lg: 24,
};
