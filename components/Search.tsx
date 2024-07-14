import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

export type SearchType = {
  placeholder?: string;

  /** Style props */
  propTop?: number | string;
  propLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Search = ({ placeholder, propTop, propLeft }: SearchType) => {
  const searchStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.search, searchStyle]}>
      <View style={styles.searchChild} />
      <Image
        style={styles.vuesaxoutlinesearchNormalIcon}
        contentFit="cover"
        source={require("../assets/vuesaxoutlinesearchnormal.png")}
      />
      <Text style={styles.placeholder}>{placeholder}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  searchChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.colourStylesNeutralColourGray4,
    borderWidth: 1.3,
    position: "absolute",
  },
  vuesaxoutlinesearchNormalIcon: {
    height: "45%",
    width: "7.06%",
    top: "27.62%",
    right: "89.01%",
    bottom: "27.38%",
    left: "3.93%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  placeholder: {
    top: "28.81%",
    left: "14.89%",
    fontSize: FontSize.textStyleSmallerTextRegular_size,
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    color: Color.colourStylesNeutralColourGray4,
    textAlign: "left",
    position: "absolute",
  },
  search: {
    top: 56,
    left: 52,
    width: 272,
    height: 42,
    position: "absolute",
  },
});

export default Search;
