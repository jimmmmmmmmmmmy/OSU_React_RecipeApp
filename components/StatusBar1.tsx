import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type StatusBar1Type = {
  battery?: ImageSourcePropType;
  combinedShape?: ImageSourcePropType;
  wiFi?: ImageSourcePropType;

  /** Style props */
  wiFiIconAlignSelf?: string;
  wiFiIconPosition?: string;
  wiFiIconTop?: number | string;
  wiFiIconRight?: number | string;
  wiFiIconLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StatusBar1 = ({
  battery,
  combinedShape,
  wiFi,
  wiFiIconAlignSelf,
  wiFiIconPosition,
  wiFiIconTop,
  wiFiIconRight,
  wiFiIconLeft,
}: StatusBar1Type) => {
  const statusBarStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", wiFiIconAlignSelf),
      ...getStyleValue("position", wiFiIconPosition),
      ...getStyleValue("top", wiFiIconTop),
      ...getStyleValue("right", wiFiIconRight),
      ...getStyleValue("left", wiFiIconLeft),
    };
  }, [
    wiFiIconAlignSelf,
    wiFiIconPosition,
    wiFiIconTop,
    wiFiIconRight,
    wiFiIconLeft,
  ]);

  return (
    <View style={[styles.statusBar, statusBarStyle]}>
      <View style={[styles.symbols, styles.timePosition]}>
        <Image
          style={[styles.batteryIcon, styles.timePosition]}
          contentFit="cover"
          source={battery}
        />
        <Image
          style={styles.combinedShapeIcon}
          contentFit="cover"
          source={combinedShape}
        />
        <Image style={styles.wiFiIcon} contentFit="cover" source={wiFi} />
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
    fontWeight: "600",
    fontFamily: FontFamily.sFProTextSemibold,
    color: Color.neutral100,
    textAlign: "left",
  },
  barsstatusTime: {
    marginTop: -10,
    left: 0,
    width: 180,
    height: 22,
  },
  statusBar: {
    alignSelf: "stretch",
    height: 44,
  },
});

export default StatusBar1;
