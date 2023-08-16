import { StyleSheet, Text, View } from "react-native";
import React from "react";


export default function Button() {
  return (
    <View>
      <Text>
        Welcome
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    width: 200,
    height: 200,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
