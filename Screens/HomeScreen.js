import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Home/Header/Header";
import Stories from "../components/Home/Stories/Stories";
import HomeStyles from "./HomeStyles";

const HomeScreen = () => {
  return (
    <SafeAreaView style={HomeStyles.container}>
      <Header />
      <Stories />
    </SafeAreaView>
  );
};

export default HomeScreen;
