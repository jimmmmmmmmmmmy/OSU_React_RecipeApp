import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

export type LocationIngredientAddType = {
  prop?: string;
  vuesaxlinearstar?: ImageSourcePropType;
  star5?: ImageSourcePropType;
  showStarIcon?: boolean;

  /** Style props */
  property1DefaultPosition?: string;
  property1DefaultBorderColor?: string;
  property1DefaultTop?: number | string;
  property1DefaultLeft?: number | string;
  property1DefaultWidth?: number | string;
  property1DefaultHeight?: number | string;
  property1DefaultBackgroundColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const LocationIngredientAdd = ({
  prop,
  vuesaxlinearstar,
  star5,
  showStarIcon,
  property1DefaultPosition,
  property1DefaultBorderColor,
  property1DefaultTop,
  property1DefaultLeft,
  property1DefaultWidth,
  property1DefaultHeight,
  property1DefaultBackgroundColor,
}: LocationIngredientAddType) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultPosition),
      ...getStyleValue("borderColor", property1DefaultBorderColor),
      ...getStyleValue("top", property1DefaultTop),
      ...getStyleValue("left", property1DefaultLeft),
      ...getStyleValue("width", property1DefaultWidth),
      ...getStyleValue("height", property1DefaultHeight),
      ...getStyleValue("backgroundColor", property1DefaultBackgroundColor),
    };
  }, [
    property1DefaultPosition,
    property1DefaultBorderColor,
    property1DefaultTop,
    property1DefaultLeft,
    property1DefaultWidth,
    property1DefaultHeight,
    property1DefaultBackgroundColor,
  ]);

  return (
    <View style={[styles.property1default, property1DefaultStyle]}>
      <Text style={styles.text}>{prop}</Text>
      {showStarIcon && (
        <Image
          style={styles.property1defaultChild}
          contentFit="cover"
          source={star5}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.textStyleSmallerTextRegular_size,
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    color: Color.colorCadetblue,
    textAlign: "left",
  },
  property1defaultChild: {
    borderRadius: Border.br_12xs_5,
    width: 18,
    height: 18,
    marginLeft: 5,
  },
  property1default: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.colorCadetblue,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_8xs,
  },
});

export default LocationIngredientAdd;
