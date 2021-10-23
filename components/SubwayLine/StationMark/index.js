import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Text,
} from "react-native";

const screen = Dimensions.get("screen");

export default function StationMark({ name }) {
  return (
    <TouchableHighlight
      style={styles.mark}
      underlayColor="#ccc"
      onPress={() => alert("Yaay!")}
    >
      <View style={styles.borderMark}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  mark: {
    height: screen.height / 20,
    borderRadius: screen.height / 43,
    width: screen.width / 1.41,
    backgroundColor: "#06713a",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  borderMark: {
    width: screen.width / 1.45,
    borderRadius: screen.height / 52,
    borderColor: "#fff",
    borderWidth: screen.height / 315,
    paddingLeft: screen.width / 50,
    paddingRight: screen.width / 50,
  },
  text: {
    fontFamily: "AvenirNext-Bold",
    fontSize: screen.height / 40,
    color: "#fff",
    textAlign: "center",
  },
});
