import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

export type TextInputValidationEmptType = {
  enterName?: string;
};

const TextInputValidationEmpt = ({
  enterName,
}: TextInputValidationEmptType) => {
  return (
    <View style={styles.textPosition}>
      <View
        style={[styles.textInputValidationEmptChild, styles.textPosition]}
      />
      <Text style={styles.enterName}>{enterName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  textInputValidationEmptChild: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.outline,
    borderWidth: 1,
  },
  enterName: {
    top: "33.93%",
    left: "7.36%",
    fontSize: FontSize.p2_size,
    letterSpacing: 0.1,
    fontWeight: "500",
    fontFamily: FontFamily.h2,
    color: Color.colourStylesNeutralColourGray1,
    textAlign: "left",
    position: "absolute",
  },
});

export default TextInputValidationEmpt;
