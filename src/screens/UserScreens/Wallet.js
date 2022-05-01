import React, { useEffect } from "react";
import { colors, fonts, fontSizes, width } from "../../utils/utils";
import walletCard from "../../../assets/wallet-card.png";
import chip from "../../../assets/EMVChip.png";
import mcSymbol from "../../../assets/mcSymbol.png";
import arrow from "../../../assets/arrow.png";

import {
  View,
  ScrollView,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
const Wallet = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        {/* // wallet  */}
        <ImageBackground source={walletCard} style={styles.bgImage}>
          {/* account details */}
          <View>
            <View style={styles.details}>
              <View>
                <Text style={styles.title}>Account balance</Text>
                <Text style={styles.balance}>NGN 100,000,000</Text>
              </View>
              <Image source={mcSymbol} />
            </View>

            {/* //account number */}
            <View style={styles.account}>
              <Text style={styles.accountText}>{"**** **** **** **23"}</Text>
            </View>
            <View style={styles.expiryContainer}>
              <View>
                <Image source={chip} />
              </View>
              <View>
                <Text style={styles.expText}>EXPIRY</Text>
                <Text style={styles.expText}>06/27</Text>
              </View>
            </View>
            <View style={styles.accountName}>
              <Text style={styles.name}>{"NICk NELSON"}</Text>
              <TouchableWithoutFeedback>
                <Text style={styles.copy}>{"click to copy"}</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.list}>
          <Text style={styles.listItem}>Connect to BVN Number</Text>
          <Image source={arrow} />
        </View>
        <View style={styles.list}>
          <Text style={styles.listItem}>Link to your NIN</Text>
          <Image source={arrow} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: colors.contextColor,
  },
  container: {
    flex: 1,
    backgroundColor: colors.contextColor,
    alignItems: "center",
  },
  bgImage: {
    height: 200,
    marginBottom: 34,
    width: width,
    marginTop: 29,
    paddingVertical: 17,
    alignItems: "center",
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.xs,
    marginBottom: 3,
    lineHeight: 15,
    letterSpacing: 0,
    color: colors.contextColor,
  },
  balance: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.ssm,
    lineHeight: 22.5,
    letterSpacing: 0,
    color: colors.contextColor,
  },
  details: {
    marginBottom: 28,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  account: {
    backgroundColor: "#F9F9F91A",
    height: 30,
    width: 282,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  accountText: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.ssm,
    lineHeight: 23,
    letterSpacing: 4,
    textAlign: "center",
    color: colors.contextColor,
  },
  expiryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  expText: {
    fontFamily: fonts.semiBold,
    fontSize: 8,
    lineHeight: 10,
    textAlign: "center",
    color: colors.contextColor,
  },
  accountName: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.sm,
    lineHeight: 20,

    color: colors.contextColor,
  },
  copy: {
    fontFamily: fonts.bold,
    fontSize: fontSizes.s,
    lineHeight: 20,
    color: colors.contextColor,
  },
  list: {
    height: 60,
    width: width * 0.89,
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#F0F0F0",
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderRadius: 15,
    marginBottom: 10,
    flexDirection: "row",
  },
  listItem: {
    fontFamily: fonts.semiBold,
    fontSize: fontSizes.ssm,
    lineHeight: 22.5,
  },
});
