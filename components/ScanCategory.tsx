import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

export type ScanCategoryType = {
  image6?: ImageSourcePropType;
  image7?: ImageSourcePropType;
  chooseOneOption?: string;
  close1?: ImageSourcePropType;
  showGroupView?: boolean;
  groupViewVisible?: boolean;

  /** Style props */
  scanCategoryPosition?: string;
  scanCategoryWidth?: number | string;
  scanCategoryTop?: number | string;
  scanCategoryLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ScanCategory = ({
  image6,
  image7,
  chooseOneOption,
  close1,
  showGroupView,
  groupViewVisible,
  scanCategoryPosition,
  scanCategoryWidth,
  scanCategoryTop,
  scanCategoryLeft,
}: ScanCategoryType) => {
  const scanCategoryStyle = useMemo(() => {
    return {
      ...getStyleValue("position", scanCategoryPosition),
      ...getStyleValue("width", scanCategoryWidth),
      ...getStyleValue("top", scanCategoryTop),
      ...getStyleValue("left", scanCategoryLeft),
    };
  }, [
    scanCategoryPosition,
    scanCategoryWidth,
    scanCategoryTop,
    scanCategoryLeft,
  ]);

  return (
    <View style={[styles.scanCategory, scanCategoryStyle]}>
      <View style={[styles.scanCategoryChild, styles.childPosition]} />
      {showGroupView && (
        <View style={[styles.rectangleParent, styles.rectanglePosition]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Image
            style={[styles.image6Icon, styles.iconLayout]}
            contentFit="cover"
            source={image6}
          />
          <Text style={[styles.food, styles.foodTypo]}>Food</Text>
        </View>
      )}
      {groupViewVisible && (
        <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
          <View style={[styles.groupChild, styles.childPosition]} />
          <Image
            style={[styles.image7Icon, styles.iconLayout]}
            contentFit="cover"
            source={image7}
          />
          <Text style={[styles.ingredient, styles.foodTypo]}>Ingredient</Text>
        </View>
      )}
      <Text style={[styles.chooseOneOption, styles.closeIconPosition]}>
        {chooseOneOption}
      </Text>
      <Image
        style={[styles.closeIcon, styles.closeIconPosition]}
        contentFit="cover"
        source={close1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
    backgroundColor: Color.white,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  rectanglePosition: {
    bottom: "35.53%",
    top: "20.71%",
    height: "43.76%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  foodTypo: {
    textAlign: "center",
    color: Color.e5481,
    fontFamily: FontFamily.h2,
    fontWeight: "700",
    letterSpacing: 1,
  },
  closeIconPosition: {
    top: "7.53%",
    position: "absolute",
  },
  scanCategoryChild: {
    shadowColor: "rgba(0, 70, 207, 0.03)",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 56,
    elevation: 56,
    shadowOpacity: 1,
    borderTopLeftRadius: Border.br_13xl,
    borderTopRightRadius: Border.br_13xl,
  },
  groupChild: {
    borderRadius: Border.br_base,
    borderStyle: "solid",
    borderColor: Color.outline,
    borderWidth: 1,
  },
  image6Icon: {
    height: "41.94%",
    width: "65.16%",
    top: "20.43%",
    right: "18.06%",
    bottom: "37.63%",
    left: "16.77%",
    position: "absolute",
    overflow: "hidden",
    maxWidth: "100%",
  },
  food: {
    left: "37.42%",
    lineHeight: 25,
    fontSize: FontSize.p2_size,
    top: "75.27%",
    textAlign: "center",
    color: Color.e5481,
    fontFamily: FontFamily.h2,
    fontWeight: "700",
    letterSpacing: 1,
    position: "absolute",
  },
  rectangleParent: {
    width: "41.33%",
    right: "52.27%",
    left: "6.4%",
  },
  image7Icon: {
    height: "51.61%",
    width: "61.54%",
    top: "16.13%",
    right: "19.23%",
    bottom: "32.26%",
    left: "19.23%",
    position: "absolute",
    overflow: "hidden",
    maxWidth: "100%",
  },
  ingredient: {
    left: "23.72%",
    lineHeight: 25,
    fontSize: FontSize.p2_size,
    top: "75.27%",
    textAlign: "center",
    color: Color.e5481,
    fontFamily: FontFamily.h2,
    fontWeight: "700",
    letterSpacing: 1,
    position: "absolute",
  },
  rectangleGroup: {
    width: "41.6%",
    right: "6.4%",
    left: "52%",
  },
  chooseOneOption: {
    left: "28%",
    fontSize: FontSize.h2_size,
    lineHeight: 27,
    textAlign: "center",
    color: Color.e5481,
    fontFamily: FontFamily.h2,
    fontWeight: "700",
    letterSpacing: 1,
    top: "7.53%",
  },
  closeIcon: {
    height: "5.65%",
    width: "6.4%",
    right: "87.2%",
    bottom: "86.82%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "6.4%",
  },
  scanCategory: {
    width: 375,
    height: 425,
  },
});

export default ScanCategory;
