import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const StatusBar2 = () => {
  return (
    <View style={styles.statusBar}>
      <View style={[styles.symbols, styles.timePosition]}>
        <Image
          style={[styles.batteryIcon, styles.timePosition]}
          contentFit="cover"
          source={require("../assets/battery2.png")}
        />
        <Image
          style={styles.combinedShapeIcon}
          contentFit="cover"
          source={require("../assets/combined-shape2.png")}
        />
        <Image
          style={styles.wiFiIcon}
          contentFit="cover"
          source={require("../assets/wifi2.png")}
        />
      </View>
      <View style={[styles.barsstatusTime, styles.timePosition]}>
        <Text style={[styles.time, styles.timePosition]}>19:27</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  batteryIcon: {
    marginTop: -5.9,
    right: 1,
    width: 25,
    height: 12,
  },
  combinedShapeIcon: {
    width: 17,
    height: 11,
  },
  wiFiIcon: {
    width: 15,
    height: 11,
  },
  symbols: {
    marginTop: -5.4,
    right: 14,
    width: 68,
    height: 13,
    overflow: "hidden",
  },
  time: {
    marginTop: -9,
    left: 30,
    fontSize: FontSize.p2_size,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.sFProDisplayMedium,
    color: Color.colourStylesNeutralColourGray1,
    textAlign: "left",
  },
  barsstatusTime: {
    marginTop: -10,
    width: 180,
    height: 22,
    left: 0,
  },
  statusBar: {
    top: 0,
    right: 0,
    height: 44,
    left: 0,
    position: "absolute",
  },
});

export default StatusBar2;
