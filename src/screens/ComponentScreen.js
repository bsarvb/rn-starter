import React from "react";
import { Text, StyleSheet } from "react-native";

// const ComponentsScreen = function() {}
const ComponentsScreen = () => {
  return <Text style={dtyles.textStyle}> This is the ComponentsScreen </Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
