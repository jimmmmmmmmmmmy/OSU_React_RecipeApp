import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

export type InputFieldType = {
  inputPlaceholder?: string;
  loginInputPlaceholder?: string;

  /** Style props */
  propTop?: number | string;
  propLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const InputField = ({
  inputPlaceholder,
  loginInputPlaceholder,
  propTop,
  propLeft,
}: InputFieldType) => {
  const inputFieldStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.inputField, inputFieldStyle]}>
      <View style={styles.inputFieldChild} />
      <Text style={[styles.placeholder, styles.labelTypo]}>
        {inputPlaceholder}
      </Text>
      <Text style={[styles.label, styles.labelTypo]}>
        {loginInputPlaceholder}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  labelTypo: {
    textAlign: "left",
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    position: "absolute",
  },
  inputFieldChild: {
    height: "67.9%",
    width: "100%",
    top: "32.1%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.colourStylesNeutralColourGray4,
    borderWidth: 1.5,
    left: "0%",
    position: "absolute",
  },
  placeholder: {
    top: "55.56%",
    left: "6.35%",
    fontSize: FontSize.textStyleSmallerTextRegular_size,
    color: Color.colourStylesNeutralColourGray4,
  },
  label: {
    top: "0%",
    fontSize: FontSize.poppinsLabelBold_size,
    color: Color.colourStylesLabelColour,
    left: "0%",
  },
  inputField: {
    top: 381,
    left: 30,
    width: 315,
    height: 81,
    position: "absolute",
  },
});

export default InputField;
