import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { USERS } from "../../../data/users";
import StoriesStyles from "./StoriesStyles";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <Image source={{ uri: story.image }} style={StoriesStyles.story} />
            <Text style={{ color: "white" }}>
              {story.name.length > 11
                ? story.name.slice(0, 10) + "..."
                : story.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;
