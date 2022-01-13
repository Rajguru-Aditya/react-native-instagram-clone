import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Home/Header";
import HomeStyles from "./HomeStyles";

const HomeScreen = () => {
  return (
    <SafeAreaView style={HomeStyles.container}>
      <Header />
    </SafeAreaView>
  );
};

export default HomeScreen;
