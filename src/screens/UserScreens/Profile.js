import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { colors, fonts, fontSizes, width } from "../../utils/utils";
import edit from "../../../assets/Edit.png";
import gallery from "../../../assets/media-library.png";
import heart from "../../../assets/heart.png";
const Profile = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.profileImageContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            }}
            style={styles.profileImage}
          />
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.userName}>{"NICk NELSON"}</Text>
        <Text style={styles.description}>
          {"Professional musical artist, performer and inspirational speaker."}
        </Text>
        <Text style={styles.description}>www.nickneslon@portfolio</Text>
      </View>

      <View style={styles.editProfileButton}>
        <TouchableWithoutFeedback>
          <Text style={styles.editProfile}>
            Edit profile <Image source={edit} />
          </Text>
        </TouchableWithoutFeedback>
      </View>
      {/* slidng selector */}
      <View style={styles.selectContainer}>
        <View style={styles.gallery}>
          <Image source={gallery} />
        </View>
        <View style={styles.heart}>
          <Image source={heart} />
        </View>
      </View>
      <View style={styles.showViews}></View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    backgroundColor: colors.contextColor,
  },
  profileImageContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 82,
    height: 82,
    borderRadius: 41,
  },
  descriptionContainer: {
    marginHorizontal: 73,
  },
  userName: {
    fontFamily: fonts.semiBold,
    fontSize: fontSizes.sm,
    marginBottom: 11,
    lineHeight: 20,
    textAlign: "center",
  },
  description: {
    fontFamily: fonts.regular,
    fontSize: fontSizes.xs,
    marginBottom: 10,
    lineHeight: 15,
    textAlign: "center",
  },

  editProfileButton: {
    borderWidth: 0.5,
    borderColor: "#E7E7E7",
    borderRadius: 15,
    width: width * 0.9,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 26,
  },
  editProfile: {
    fontFamily: fonts.semiBold,
    fontSize: fontSizes.xs,

    lineHeight: 15,
  },

  selectContainer: {
    width: width,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  gallery: {
    borderBottomWidth: 4,
    width: width * 0.5,
    borderBottomColor: colors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  heart: {
    borderBottomWidth: 0,
    width: width * 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  showViews: {
    backgroundColor: "#F9F9F9",
    height: 391,
    width: width,
  },
});
