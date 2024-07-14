import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type AddType = {
  default1?: string;

  /** Style props */
  primaryDefaultPosition?: string;
  primaryDefaultBackgroundColor?: string;
  primaryDefaultWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Add = ({
  default1,
  primaryDefaultPosition,
  primaryDefaultBackgroundColor,
  primaryDefaultWidth,
}: AddType) => {
  const primaryDefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("position", primaryDefaultPosition),
      ...getStyleValue("backgroundColor", primaryDefaultBackgroundColor),
      ...getStyleValue("width", primaryDefaultWidth),
    };
  }, [
    primaryDefaultPosition,
    primaryDefaultBackgroundColor,
    primaryDefaultWidth,
  ]);

  return (
    <View style={[styles.primaryDefault, primaryDefaultStyle]}>
      <Text style={styles.default}>{default1}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    fontSize: FontSize.p2_size,
    letterSpacing: 0.1,
    fontWeight: "700",
    fontFamily: FontFamily.h2,
    color: Color.white,
    textAlign: "center",
  },
  primaryDefault: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.primary,
    alignItems: "center",
    paddingHorizontal: Padding.p_13xl,
    paddingVertical: Padding.p_lgi,
  },
});

export default Add;
