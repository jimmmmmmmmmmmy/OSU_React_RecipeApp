import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type LogoutType = {
  label?: string;

  /** Style props */
  property1ActivePosition?: string;
  property1ActiveBackgroundColor?: string;
  property1ActiveWidth?: number | string;
  property1ActiveTop?: number | string;
  property1ActiveLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Logout = ({
  label,
  property1ActivePosition,
  property1ActiveBackgroundColor,
  property1ActiveWidth,
  property1ActiveTop,
  property1ActiveLeft,
}: LogoutType) => {
  const property1ActiveStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1ActivePosition),
      ...getStyleValue("backgroundColor", property1ActiveBackgroundColor),
      ...getStyleValue("width", property1ActiveWidth),
      ...getStyleValue("top", property1ActiveTop),
      ...getStyleValue("left", property1ActiveLeft),
    };
  }, [
    property1ActivePosition,
    property1ActiveBackgroundColor,
    property1ActiveWidth,
    property1ActiveTop,
    property1ActiveLeft,
  ]);

  return (
    <View style={[styles.property1active, property1ActiveStyle]}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    flex: 1,
    fontSize: FontSize.s_size,
    fontWeight: "600",
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    color: Color.white,
    textAlign: "center",
  },
  property1active: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.primary50,
    width: 160,
    flexDirection: "row",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
  },
});

export default Logout;
