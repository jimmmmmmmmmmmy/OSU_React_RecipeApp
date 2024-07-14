import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const GroceryRun = () => {
  return (
    <View style={styles.recent}>
      <View style={[styles.cards, styles.cardsPosition]}>
        <View style={[styles.card3, styles.cardLayout2]}>
          <Image
            style={[styles.foodPhotoIcon, styles.card1Position]}
            contentFit="cover"
            source={require("../assets/food-photo.png")}
          />
          <View style={styles.info}>
            <Text style={[styles.foodTitle, styles.seeAllTypo]}>
              How to make fried crab
            </Text>
            <Text style={[styles.creator, styles.seeAllTypo]}>
              By Peprika anny
            </Text>
          </View>
        </View>
        <View style={[styles.card2, styles.cardLayout2]}>
          <Image
            style={[styles.foodPhotoIcon, styles.card1Position]}
            contentFit="cover"
            source={require("../assets/food-photo.png")}
          />
          <View style={styles.info}>
            <Text style={[styles.foodTitle, styles.seeAllTypo]}>{`Home made
cute pancake`}</Text>
            <Text style={[styles.creator, styles.seeAllTypo]}>
              By James wolden
            </Text>
          </View>
        </View>
        <View style={[styles.card1, styles.card1Position]}>
          <Image
            style={[styles.foodPhotoIcon, styles.card1Position]}
            contentFit="cover"
            source={require("../assets/food-photo.png")}
          />
          <View style={styles.info}>
            <Text style={[styles.foodTitle, styles.seeAllTypo]}>{`Indonesian
beef burger`}</Text>
            <Text style={[styles.creator, styles.seeAllTypo]}>
              By Adrianna curl
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.navigation}>
        <Text style={[styles.recentRecipe, styles.seeAllTypo]}>
          Quick grocery run:
        </Text>
        <View style={styles.seeAllButton}>
          <Text style={[styles.seeAll, styles.seeAllTypo]}>See all</Text>
          <Image
            style={styles.iconarrowRight}
            contentFit="cover"
            source={require("../assets/iconarrowright.png")}
          />
        </View>
      </View>
      <View style={[styles.card, styles.cardLayout1]}>
        <LinearGradient
          style={[styles.cardChild, styles.cardLayout]}
          locations={[0, 1]}
          colors={["rgba(0, 0, 0, 0)", "#000"]}
        />
      </View>
      <View style={[styles.card4, styles.cardsPosition]}>
        <LinearGradient
          style={[styles.cardItem, styles.cardLayout]}
          locations={[0, 1]}
          colors={["rgba(0, 0, 0, 0)", "#000"]}
        />
        <View style={[styles.card5, styles.cardLayout1]}>
          <LinearGradient
            style={[styles.cardChild, styles.cardLayout]}
            locations={[0, 1]}
            colors={["rgba(0, 0, 0, 0)", "#000"]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardsPosition: {
    width: 404,
    left: 20,
    position: "absolute",
  },
  cardLayout2: {
    width: 124,
    top: 0,
  },
  card1Position: {
    left: 0,
    position: "absolute",
  },
  seeAllTypo: {
    textAlign: "left",
    fontFamily: FontFamily.textStyleSmallerTextRegular,
  },
  cardLayout1: {
    height: 125,
    width: 124,
    position: "absolute",
  },
  cardLayout: {
    backgroundColor: "transparent",
    borderRadius: Border.br_3xs,
    height: 125,
    left: 0,
    width: 124,
    position: "absolute",
  },
  foodPhotoIcon: {
    height: 124,
    width: 124,
    top: 0,
  },
  foodTitle: {
    color: Color.neutral100,
    textAlign: "left",
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    fontWeight: "600",
    left: 0,
    top: 0,
    position: "absolute",
    lineHeight: 20,
    fontSize: FontSize.poppinsLabelBold_size,
    width: 111,
  },
  creator: {
    top: 44,
    fontSize: FontSize.poppinsTinyRegular_size,
    color: Color.colorSilver,
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  info: {
    top: 132,
    left: 4,
    height: 59,
    width: 111,
    position: "absolute",
  },
  card3: {
    left: 280,
    height: 191,
    position: "absolute",
  },
  card2: {
    left: 140,
    height: 191,
    position: "absolute",
  },
  card1: {
    width: 124,
    top: 0,
    height: 191,
  },
  cards: {
    height: 191,
    top: 56,
  },
  recentRecipe: {
    fontSize: FontSize.textStyleLargeTextBold_size,
    lineHeight: 28,
    color: Color.neutral100,
    textAlign: "left",
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    fontWeight: "600",
    left: 0,
    top: 0,
    position: "absolute",
  },
  seeAll: {
    color: Color.colourStylesNeutralColourGray3,
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    textAlign: "left",
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.poppinsLabelBold_size,
  },
  iconarrowRight: {
    width: 20,
    height: 20,
    marginLeft: 4,
  },
  seeAllButton: {
    top: 4,
    right: 0,
    flexDirection: "row",
    position: "absolute",
  },
  navigation: {
    top: 12,
    width: 335,
    height: 28,
    left: 20,
    position: "absolute",
  },
  cardChild: {
    top: 0,
  },
  card: {
    left: 160,
    top: 56,
  },
  cardItem: {
    top: 1,
  },
  card5: {
    left: 280,
    top: 0,
  },
  card4: {
    top: 55,
    height: 126,
  },
  recent: {
    top: 580,
    left: -1,
    width: 375,
    height: 259,
    overflow: "hidden",
    position: "absolute",
  },
});

export default GroceryRun;
