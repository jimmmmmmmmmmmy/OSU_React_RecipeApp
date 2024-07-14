import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

export type CardType = {
  /** Style props */
  propLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Card = ({ propLeft }: CardType) => {
  const card1Style = useMemo(() => {
    return {
      ...getStyleValue("left", propLeft),
    };
  }, [propLeft]);

  return (
    <View style={[styles.card1, styles.card1Position, card1Style]}>
      <View style={[styles.card1, styles.card1Position]}>
        <View style={[styles.image, styles.card1Position]} />
        <View style={[styles.love, styles.loveLayout]}>
          <View style={[styles.loveChild, styles.childBg]} />
          <View style={styles.iconlove}>
            <View style={[styles.iconloveChild, styles.childBg]} />
            <Image
              style={styles.stroke1Stroke}
              contentFit="cover"
              source={require("../assets/stroke-1-stroke.png")}
            />
          </View>
        </View>
        <View style={[styles.timePortion, styles.timeLayout]}>
          <View style={[styles.time, styles.timeLayout]}>
            <Text style={[styles.time1, styles.minsFlexBox]}>Time</Text>
            <Text style={[styles.mins, styles.minsTypo]}>20 Mins</Text>
          </View>
        </View>
        <View style={[styles.titleButton, styles.titleButtonLayout]}>
          <Text style={[styles.choppedSpring, styles.titleButtonLayout]}>
            Chopped Spring
          </Text>
        </View>
        <Image
          style={styles.foodPhotoChild}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card1Position: {
    width: 150,
    left: 0,
    position: "absolute",
  },
  loveLayout: {
    height: 24,
    width: 24,
  },
  childBg: {
    backgroundColor: Color.white,
    position: "absolute",
  },
  timeLayout: {
    height: 42,
    width: 54,
    position: "absolute",
  },
  minsFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  minsTypo: {
    color: Color.neutral100,
    fontWeight: "600",
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    left: 0,
  },
  titleButtonLayout: {
    width: 126,
    position: "absolute",
  },
  image: {
    top: 55,
    backgroundColor: Color.colorSilver,
    height: 188,
    borderRadius: Border.br_xs,
  },
  loveChild: {
    right: 0,
    height: 24,
    width: 24,
    borderRadius: Border.br_xs,
    top: 0,
  },
  iconloveChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    opacity: 0,
  },
  stroke1Stroke: {
    height: "78.13%",
    width: "86.88%",
    top: "11.25%",
    right: "6.25%",
    bottom: "10.63%",
    left: "6.88%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  iconlove: {
    top: 4,
    right: 4,
    width: 16,
    height: 16,
    position: "absolute",
  },
  love: {
    top: 207,
    right: 12,
    position: "absolute",
  },
  time1: {
    fontSize: FontSize.s_size,
    color: Color.colorSilver,
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  mins: {
    top: 22,
    fontSize: FontSize.poppinsLabelBold_size,
    lineHeight: 20,
    textAlign: "left",
    position: "absolute",
  },
  time: {
    left: 0,
    width: 54,
    top: 0,
  },
  timePortion: {
    top: 189,
    left: 12,
  },
  choppedSpring: {
    fontSize: FontSize.textStyleNormalTextBold_size,
    lineHeight: 22,
    textAlign: "center",
    color: Color.neutral100,
    fontWeight: "600",
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    left: 0,
    top: 0,
  },
  titleButton: {
    top: 121,
    height: 44,
    left: 12,
  },
  foodPhotoChild: {
    left: 22,
    width: 110,
    height: 110,
    top: 0,
    position: "absolute",
  },
  card1: {
    height: 243,
    top: 0,
  },
});

export default Card;
