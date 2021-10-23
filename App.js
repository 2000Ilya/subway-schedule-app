import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import LoaderArrow from "./components/LoaderArrow";
import SubwayLine from "./components/SubwayLine";

const screen = Dimensions.get("screen");

export default function App() {
  return (
    <View style={styles.appContainer}>
      {/* <View style={[styles.loaderArrow, { transform: [{ rotate: "180deg" }] }]}>
        <LoaderArrow />
      </View> */}
      <SubwayLine />
      {/* <View style={styles.loaderArrow}>
        <LoaderArrow />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    height: screen.height,
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  loaderArrow: {
    width: (screen.width - screen.width / 1.41) / 2,
    flex: 0,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
