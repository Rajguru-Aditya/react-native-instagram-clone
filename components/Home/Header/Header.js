import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import HeaderStyles from "./HeaderStyles";

const Header = () => {
  return (
    <View style={HeaderStyles.container}>
      <TouchableOpacity>
        <Image
          style={HeaderStyles.logo}
          source={require("../../../assets/header-logo.png")}
        />
      </TouchableOpacity>
      <View style={HeaderStyles.iconsContainer}>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/48/ffffff/plus-2-math.png",
            }}
            style={HeaderStyles.icons}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/48/ffffff/like--v2.png",
            }}
            style={HeaderStyles.icons}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={HeaderStyles.unreadBadge}>
            <Text style={HeaderStyles.unreadBadgeText}>11</Text>
          </View>
          <Image
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/48/ffffff/facebook-messenger.png",
            }}
            style={HeaderStyles.icons}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
