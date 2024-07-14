import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Card from "./Card";
import { Padding, Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const Popular = () => {
  return (
    <View style={styles.popular}>
      <View style={[styles.cards, styles.tabsPosition]}>
        <Card />
        <Card propLeft={166} />
        <Card propLeft={332} />
      </View>
      <View style={[styles.tabs, styles.tabsPosition]}>
        <View style={[styles.activeLabel, styles.labelSpaceBlock]}>
          <Text style={[styles.label, styles.labelTypo]}>Appetizer</Text>
        </View>
        <View style={[styles.label1, styles.labelSpaceBlock]}>
          <Text style={[styles.label2, styles.labelTypo]}>Breakfast</Text>
        </View>
        <View style={[styles.label3, styles.labelSpaceBlock]}>
          <Text style={[styles.label2, styles.labelTypo]}>Lunch</Text>
        </View>
        <View style={[styles.label5, styles.labelSpaceBlock]}>
          <Text style={[styles.label2, styles.labelTypo]}>Dinner</Text>
        </View>
      </View>
      <Text style={[styles.categoryTitle, styles.labelTypo]}>
        Ingredients on hand:
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tabsPosition: {
    left: 20,
    position: "absolute",
  },
  labelSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_xs,
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
  },
  labelTypo: {
    textAlign: "left",
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    fontWeight: "600",
  },
  cards: {
    top: 110,
    width: 482,
    height: 243,
  },
  label: {
    color: Color.white,
    fontSize: FontSize.s_size,
    textAlign: "left",
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    fontWeight: "600",
  },
  activeLabel: {
    backgroundColor: Color.colourStylesNeutralColourGray3,
    left: 0,
  },
  label2: {
    color: Color.colorSilver,
    fontSize: FontSize.s_size,
    textAlign: "left",
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    fontWeight: "600",
  },
  label1: {
    left: 91,
  },
  label3: {
    left: 188,
  },
  label5: {
    left: 272,
  },
  tabs: {
    top: 56,
    width: 337,
    height: 34,
  },
  categoryTitle: {
    top: 12,
    fontSize: FontSize.textStyleLargeTextBold_size,
    lineHeight: 28,
    color: Color.neutral100,
    left: 20,
    position: "absolute",
  },
  popular: {
    top: 215,
    width: 375,
    height: 365,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
});

export default Popular;
