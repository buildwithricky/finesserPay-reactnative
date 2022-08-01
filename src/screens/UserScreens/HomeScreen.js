import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  StatusBar,
  ScrollView,
  Pressable,
  Switch,
} from "react-native";
import { colors, fonts, fontSizes, width } from "../../utils/utils";
import CircleBtn from "../../components/home/CircleBtn";

import { homeicons } from "../../utils/icons";
import card from "../../../assets/card.png";
import { useGlobalContext } from "../../context/Provider";
import TransactionList from "../../components/home/Transactions/TransactionList";

//home screen mock data
const homedata = [
  {
    name: "Transfer",
    icon: homeicons.transfer,
  },
  {
    name: "Payment",
    icon: homeicons.payment,
  },
  {
    name: "Payout",
    icon: homeicons.payout,
  },
  {
    name: "Top up",
    icon: homeicons.topup,
  },
];

const HomeScreen = () => {
  const [isBalanceShow, setIsBalanceShow] = useState(true);
  const toggleSwitch = () =>
    setIsBalanceShow((previousState) => !previousState);
  const { signOut, dispatch, globalState } = useGlobalContext();
  const userName = () => {
    if (globalState.userData === null) {
      return "logging out";
    }

    return globalState.userData.payload.firstName;
  };
  const userWalletBalanceAmount = "10000000";
  const currencySymbol = "NGN";

  return (
    <>
      <StatusBar backgroundColor="#EEEEEF" />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.textCon}>
            <Text style={styles.text}>Hi, {userName()}</Text>
          </View>
          <View style={styles.imgcon}>
            <ImageBackground source={card} style={styles.bgImage}>
              <View>
                <Text
                  style={{
                    textAlign: "center",
                    color: colors.contextColor,
                    padding: 5,
                    fontSize: 12,
                    fontFamily: fonts.regular,
                  }}
                >
                  MY WALLET
                </Text>
              </View>
              <View
                style={{
                  marginLeft: 42,
                }}
              >
                <View>
                  <Text
                    style={{
                      color: colors.contextColor,
                      fontFamily: fonts.medium,
                      fontSize: fontSizes.s,
                    }}
                  >
                    My Balance
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: colors.contextColor,
                      fontFamily: fonts.bold,
                      fontSize: fontSizes.ssm,
                    }}
                  >
                    {isBalanceShow
                      ? "**********"
                      : `${currencySymbol} ${userWalletBalanceAmount}`}
                  </Text>
                </View>
              </View>

              {/* //TOGGLE WALLET VISIBILITY */}
              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "flex-end",
                  flex: 1,
                  padding: 10,
                  marginRight: 13,
                }}
              >
                <View
                  style={{
                    color: colors.contextColor,
                    justifyContent: "center",
                    fontSize: 12,
                    fontFamily: fonts.semiBold,
                  }}
                >
                  <Text
                    style={{
                      color: colors.contextColor,
                      fontSize: 12,
                      fontFamily: fonts.semiBold,
                    }}
                  >
                    Hide Balance{" "}
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    paddingRight: 14,
                  }}
                >
                  <Pressable hitSlop={65} onPress={toggleSwitch}>
                    <Switch
                      disabled={false}
                      circleSize={21}
                      barHeight={11}
                      circleBorderWidth={2}
                      backgroundActive={colors.primaryColor}
                      backgroundInactive={"#ffffff"}
                      circleActiveColor={"#000000"}
                      circleInActiveColor={"#000000"}
                      circleBorderInactiveColor={"#FFFFFF"}
                      circleBorderActiveColor={"#FFFFFF"}
                      // custom component to render inside the Switch circle (Text, Image, etc.)
                      renderActiveText={false}
                      renderInActiveText={false}
                      switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
                      switchBorderRadius={30} //
                      onValueChange={toggleSwitch}
                      value={isBalanceShow}
                    />
                  </Pressable>
                </View>
              </View>
            </ImageBackground>
          </View>

          {/* action buttons */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.btnContainer}>
              {homedata.map((item, index) => {
                return (
                  <CircleBtn key={index} icon={item.icon} text={item.name} />
                );
              })}
            </View>
          </View>

          {/* transactionlist */}
          <View>
            <TransactionList />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: colors.contextColor,
  },
  container: {
    paddingHorizontal: 20,
  },
  textCon: {},
  text: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.bold,
    color: colors.primaryColor,
    marginBottom: 15,
  },
  bgImage: {
    height: 130,
    width: width,

    paddingHorizontal: 18,
  },
  imgcon: {
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    marginTop: 41,
    height: 78,
    width: 279,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
});
