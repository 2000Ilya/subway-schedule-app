import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import StationMark from "./StationMark";
import data from "../../data";

const screen = Dimensions.get("screen");

export default function SubwayLine() {
  return (
    <View style={styles.container}>
      {data.map((e) => (
        <StationMark name={e.stationName} key={e.stationId} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "auto",
    paddingTop: (screen.height * 5) / 60,
    paddingBottom: screen.height / 20,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-around",
    flexDirection: "column-reverse",
    alignItems: "center",
  },
});
