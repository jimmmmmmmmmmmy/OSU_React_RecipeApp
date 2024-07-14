import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import StatusBar1 from "../components/StatusBar1";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const RecipeDetails = () => {
  return (
    <View style={styles.recipeDetails}>
      <View style={[styles.popUp, styles.popUpLayout]} />
      <Text style={styles.recipeDescriptionWith}>
        Recipe Description with one or two sentences
      </Text>
      <View style={[styles.lineSpacing, styles.lineLayout]} />
      <View style={[styles.lineSpacing1, styles.lineLayout]} />
      <Text style={[styles.recipeTitle, styles.chefSourceTypo]}>
        Recipe Title
      </Text>
      <Text style={[styles.description, styles.chefSourceTypo]}>
        Description
      </Text>
      <Text style={[styles.ingredients, styles.chefSourceTypo]}>
        Ingredients
      </Text>
      <Text style={[styles.eggs, styles.butterTypo]}>4 Eggs</Text>
      <Image
        style={[styles.systemIconsCheckCircle, styles.circleLayout]}
        contentFit="cover"
        source={require("../assets/system-icons--check-circle.png")}
      />
      <Image
        style={[styles.systemIconsCheckCircle1, styles.butterPosition]}
        contentFit="cover"
        source={require("../assets/system-icons--check-circle.png")}
      />
      <Image
        style={[styles.systemIconsCheckCircle2, styles.butter1Position]}
        contentFit="cover"
        source={require("../assets/system-icons--check-circle.png")}
      />
      <Text style={[styles.butter, styles.butterPosition]}>1/2 Butter</Text>
      <Text style={[styles.butter1, styles.butter1Position]}>1/2 Butter</Text>
      <View style={styles.recipeLabel}>
        <Text style={[styles.prepTime, styles.prepTimePosition]}>
          Prep Time
        </Text>
        <Text style={[styles.category, styles.prepTimePosition]}>Category</Text>
        <Image
          style={styles.recipeLabelChild}
          contentFit="cover"
          source={require("../assets/ellipse-16.png")}
        />
      </View>
      <View style={[styles.homeIndicator, styles.homePosition]} />
      <View style={[styles.homeIndicator1, styles.homePosition]} />
      <View style={[styles.profileName, styles.likesPosition]}>
        <Text style={[styles.chefSource, styles.chefSourceTypo]}>
          Chef / Source
        </Text>
        <Image
          style={[styles.image5Icon, styles.image5IconPosition]}
          contentFit="cover"
          source={require("../assets/image-5.png")}
        />
      </View>
      <View style={[styles.likes, styles.likesPosition]}>
        <Text style={[styles.chefSource, styles.chefSourceTypo]}>
          # of Likes
        </Text>
        <View style={[styles.likesChild, styles.image5IconPosition]} />
        <Image
          style={[styles.iconlyboldheart, styles.helpCircleIconCommon]}
          contentFit="cover"
          source={require("../assets/iconlyboldheart1.png")}
        />
      </View>
      <Image
        style={styles.backButtonIcon}
        contentFit="cover"
        source={require("../assets/back-button.png")}
      />
      <StatusBar1
        battery={require("../assets/battery1.png")}
        combinedShape={require("../assets/combined-shape1.png")}
        wiFi={require("../assets/wifi1.png")}
        wiFiIconAlignSelf="unset"
        wiFiIconPosition="absolute"
        wiFiIconTop={0}
        wiFiIconRight={0}
        wiFiIconLeft={0}
      />
      <LinearGradient
        style={[styles.recipeDetailsChild, styles.prepTimePosition]}
        locations={[0, 1]}
        colors={["rgba(0, 0, 0, 0)", "#000"]}
      />
      <Image
        style={[styles.headerIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/vuesaxlineararrowleft2.png")}
      />
      <Image
        style={[styles.helpCircleIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/help-circle.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  popUpLayout: {
    width: 375,
    left: 0,
  },
  lineLayout: {
    height: 1,
    backgroundColor: Color.outline,
    width: 327,
    left: 24,
    position: "absolute",
  },
  chefSourceTypo: {
    color: Color.e5481,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.h2,
    letterSpacing: 1,
    position: "absolute",
  },
  butterTypo: {
    color: Color.mainText,
    left: 56,
    textAlign: "left",
    fontFamily: FontFamily.h2,
    fontWeight: "500",
    lineHeight: 25,
    letterSpacing: 1,
    fontSize: FontSize.p2_size,
  },
  circleLayout: {
    height: 24,
    width: 24,
  },
  butterPosition: {
    top: 720,
    position: "absolute",
  },
  butter1Position: {
    top: 760,
    position: "absolute",
  },
  prepTimePosition: {
    top: 0,
    position: "absolute",
  },
  homePosition: {
    left: "50%",
    height: 5,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  likesPosition: {
    height: 32,
    top: 429,
    position: "absolute",
  },
  image5IconPosition: {
    width: 32,
    height: 32,
    top: 0,
    left: 0,
    position: "absolute",
  },
  helpCircleIconCommon: {
    opacity: 0.5,
    overflow: "hidden",
  },
  iconPosition: {
    top: 58,
    position: "absolute",
  },
  popUp: {
    top: 309,
    borderTopLeftRadius: Border.br_13xl,
    borderTopRightRadius: Border.br_13xl,
    height: 503,
    position: "absolute",
    backgroundColor: Color.white,
    width: 375,
  },
  recipeDescriptionWith: {
    top: 529,
    width: 327,
    textAlign: "left",
    color: Color.colorLightsteelblue,
    fontFamily: FontFamily.h2,
    fontWeight: "500",
    lineHeight: 25,
    letterSpacing: 1,
    fontSize: FontSize.p2_size,
    left: 24,
    position: "absolute",
  },
  lineSpacing: {
    top: 477,
  },
  lineSpacing1: {
    top: 620,
  },
  recipeTitle: {
    top: 353,
    lineHeight: 27,
    fontSize: FontSize.h2_size,
    fontWeight: "700",
    left: 24,
  },
  description: {
    top: 494,
    lineHeight: 27,
    fontSize: FontSize.h2_size,
    fontWeight: "700",
    left: 24,
  },
  ingredients: {
    top: 637,
    lineHeight: 27,
    fontSize: FontSize.h2_size,
    fontWeight: "700",
    left: 24,
  },
  eggs: {
    top: 680,
    position: "absolute",
  },
  systemIconsCheckCircle: {
    borderRadius: Border.br_81xl,
    width: 24,
    left: 24,
    overflow: "hidden",
    top: 680,
    position: "absolute",
  },
  systemIconsCheckCircle1: {
    height: 24,
    width: 24,
    borderRadius: Border.br_81xl,
    left: 24,
    overflow: "hidden",
  },
  systemIconsCheckCircle2: {
    height: 24,
    width: 24,
    borderRadius: Border.br_81xl,
    left: 24,
    overflow: "hidden",
  },
  butter: {
    color: Color.mainText,
    left: 56,
    textAlign: "left",
    fontFamily: FontFamily.h2,
    fontWeight: "500",
    lineHeight: 25,
    letterSpacing: 1,
    fontSize: FontSize.p2_size,
  },
  butter1: {
    color: Color.mainText,
    left: 56,
    textAlign: "left",
    fontFamily: FontFamily.h2,
    fontWeight: "500",
    lineHeight: 25,
    letterSpacing: 1,
    fontSize: FontSize.p2_size,
  },
  prepTime: {
    left: 92,
    textAlign: "left",
    color: Color.colorLightsteelblue,
    fontFamily: FontFamily.h2,
    fontWeight: "500",
    letterSpacing: 1,
    top: 0,
    lineHeight: 25,
    fontSize: FontSize.p2_size,
  },
  category: {
    textAlign: "left",
    color: Color.colorLightsteelblue,
    fontFamily: FontFamily.h2,
    fontWeight: "500",
    letterSpacing: 1,
    top: 0,
    lineHeight: 25,
    fontSize: FontSize.p2_size,
    left: 0,
  },
  recipeLabelChild: {
    top: 10,
    left: 79,
    width: 5,
    height: 5,
    position: "absolute",
  },
  recipeLabel: {
    top: 390,
    width: 169,
    height: 25,
    left: 24,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    backgroundColor: Color.e5481,
    width: 134,
  },
  homeIndicator1: {
    marginLeft: -19.5,
    bottom: 482,
    width: 40,
    backgroundColor: Color.outline,
    left: "50%",
  },
  chefSource: {
    top: 4,
    left: 40,
    fontWeight: "700",
    lineHeight: 25,
    fontSize: FontSize.p2_size,
  },
  image5Icon: {
    borderRadius: Border.br_base,
  },
  profileName: {
    width: 147,
    left: 24,
  },
  likesChild: {
    borderRadius: Border.br_13xl,
    backgroundColor: "#5f5f5f",
  },
  iconlyboldheart: {
    height: "56.25%",
    width: "15.65%",
    top: "25%",
    right: "78.26%",
    bottom: "18.75%",
    left: "6.09%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  likes: {
    left: 237,
    width: 115,
  },
  backButtonIcon: {
    top: 60,
    width: 56,
    height: 56,
    left: 24,
    position: "absolute",
  },
  recipeDetailsChild: {
    borderRadius: Border.br_3xs,
    height: 336,
    backgroundColor: "transparent",
    width: 375,
    left: 0,
  },
  headerIcon: {
    width: 20,
    height: 20,
    left: 24,
  },
  helpCircleIcon: {
    left: 326,
    opacity: 0.5,
    overflow: "hidden",
    height: 24,
    width: 24,
  },
  recipeDetails: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default RecipeDetails;
