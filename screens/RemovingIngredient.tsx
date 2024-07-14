import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import FrameComponent1 from "../components/FrameComponent1";
import Add from "../components/Add";
import StatusBar2 from "../components/StatusBar2";
import { Padding, FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const RemovingIngredient = () => {
  return (
    <View style={styles.removingIngredient}>
      <View style={[styles.homeIndicator, styles.homeIndicatorLayout]}>
        <View style={styles.line} />
      </View>
      <View style={[styles.time, styles.timeFlexBox1]}>
        <Text style={[styles.myFridge, styles.myFridgeTypo]}>My Fridge</Text>
      </View>
      <View style={[styles.time1, styles.timeFlexBox1]}>
        <Text style={[styles.myFridge, styles.myFridgeTypo]}>10 Items</Text>
      </View>
      <FrameComponent1 />
      <View style={[styles.time2, styles.timeFlexBox]}>
        <Text style={[styles.myFridge, styles.myFridgeTypo]}>My Pantry</Text>
      </View>
      <View style={[styles.time3, styles.timeFlexBox]}>
        <Text style={[styles.myFridge, styles.myFridgeTypo]}>10 Items</Text>
      </View>
      <View style={[styles.recipeWrapper, styles.popLayout]}>
        <View style={[styles.recipe, styles.bgPosition1]}>
          <View style={styles.recipeLayout}>
            <View style={[styles.bg, styles.bgPosition]} />
            <Text style={styles.label}>500g</Text>
            <Text style={[styles.noodles, styles.titleTypo]}>Noodles</Text>
            <Image
              style={[styles.imageIcon, styles.imageIconPosition]}
              contentFit="cover"
              source={require("../assets/image.png")}
            />
          </View>
          <View style={[styles.recipe6, styles.recipeLayout]}>
            <View style={[styles.bg, styles.bgPosition]} />
            <Text style={styles.label}>300g</Text>
            <Text style={[styles.noodles, styles.titleTypo]}>Granola</Text>
            <Image
              style={[styles.imageIcon, styles.imageIconPosition]}
              contentFit="cover"
              source={require("../assets/image.png")}
            />
          </View>
          <View style={[styles.recipe6, styles.recipeLayout]}>
            <View style={[styles.bg, styles.bgPosition]} />
            <Text style={styles.label}>300g</Text>
            <Text style={[styles.noodles, styles.titleTypo]}>Taco Shells</Text>
            <Image
              style={[styles.imageIcon, styles.imageIconPosition]}
              contentFit="cover"
              source={require("../assets/image.png")}
            />
          </View>
          <View style={[styles.recipe6, styles.recipeLayout]}>
            <View style={[styles.bg, styles.bgPosition]} />
            <Text style={styles.label}>300g</Text>
            <Text style={[styles.noodles, styles.titleTypo]}>Slice Bread</Text>
            <Image
              style={[styles.imageIcon, styles.imageIconPosition]}
              contentFit="cover"
              source={require("../assets/image.png")}
            />
          </View>
          <View style={[styles.recipe6, styles.recipeLayout]}>
            <View style={[styles.bg, styles.bgPosition]} />
            <Text style={styles.label}>300g</Text>
            <Text style={[styles.noodles, styles.titleTypo]}>Green onion</Text>
            <Image
              style={[styles.imageIcon, styles.imageIconPosition]}
              contentFit="cover"
              source={require("../assets/image1.png")}
            />
          </View>
          <View style={[styles.recipe6, styles.recipeLayout]}>
            <View style={[styles.bg, styles.bgPosition]} />
            <Text style={styles.label}>300g</Text>
            <Text style={[styles.noodles, styles.titleTypo]}>Omelette</Text>
            <Image
              style={[styles.imageIcon, styles.imageIconPosition]}
              contentFit="cover"
              source={require("../assets/image2.png")}
            />
          </View>
          <View style={[styles.recipe6, styles.recipeLayout]}>
            <View style={[styles.bg, styles.bgPosition]} />
            <Text style={styles.label}>300g</Text>
            <Text style={[styles.noodles, styles.titleTypo]}>Hot Dog</Text>
            <Image
              style={[styles.imageIcon, styles.imageIconPosition]}
              contentFit="cover"
              source={require("../assets/image3.png")}
            />
          </View>
          <View style={[styles.recipe6, styles.recipeLayout]}>
            <View style={[styles.bg, styles.bgPosition]} />
            <Text style={styles.label}>300g</Text>
            <Text style={[styles.noodles, styles.titleTypo]}>Oninon</Text>
            <Image
              style={[styles.imageIcon, styles.imageIconPosition]}
              contentFit="cover"
              source={require("../assets/image4.png")}
            />
          </View>
          <View style={[styles.recipe6, styles.recipeLayout]}>
            <View style={[styles.bg, styles.bgPosition]} />
            <Text style={styles.label}>300g</Text>
            <Text style={[styles.noodles, styles.titleTypo]}>Lettuce</Text>
            <Image
              style={[styles.imageIcon, styles.imageIconPosition]}
              contentFit="cover"
              source={require("../assets/image5.png")}
            />
          </View>
          <View style={[styles.recipe6, styles.recipeLayout]}>
            <View style={[styles.bg, styles.bgPosition]} />
            <Text style={styles.label}>300g</Text>
            <Text style={[styles.noodles, styles.titleTypo]}>Spinach</Text>
            <Image
              style={[styles.imageIcon, styles.imageIconPosition]}
              contentFit="cover"
              source={require("../assets/image6.png")}
            />
          </View>
          <View style={[styles.recipe6, styles.recipeLayout]}>
            <View style={[styles.bg, styles.bgPosition]} />
            <Text style={styles.label}>300g</Text>
            <Text
              style={[styles.noodles, styles.titleTypo]}
            >{`Red & Green Chilli`}</Text>
            <Image
              style={[styles.imageIcon, styles.imageIconPosition]}
              contentFit="cover"
              source={require("../assets/image7.png")}
            />
          </View>
          <View style={[styles.recipe6, styles.recipeLayout]}>
            <View style={[styles.bg, styles.bgPosition]} />
            <Text style={styles.label}>300g</Text>
            <Text style={[styles.noodles, styles.titleTypo]}>Fries</Text>
            <Image
              style={[styles.imageIcon, styles.imageIconPosition]}
              contentFit="cover"
              source={require("../assets/image8.png")}
            />
          </View>
          <View style={[styles.recipe6, styles.recipeLayout]}>
            <View style={[styles.bg, styles.bgPosition]} />
            <Text style={styles.label}>300g</Text>
            <Text style={[styles.noodles, styles.titleTypo]}>Chicken</Text>
            <Image
              style={[styles.imageIcon, styles.imageIconPosition]}
              contentFit="cover"
              source={require("../assets/image9.png")}
            />
          </View>
          <View style={[styles.recipe6, styles.recipeLayout]}>
            <View style={[styles.bg, styles.bgPosition]} />
            <Text style={styles.label}>300g</Text>
            <Text style={[styles.noodles, styles.titleTypo]}>Burger</Text>
            <Image
              style={[styles.imageIcon, styles.imageIconPosition]}
              contentFit="cover"
              source={require("../assets/image10.png")}
            />
          </View>
        </View>
      </View>
      <Image
        style={[styles.helpCircleIcon, styles.bgPosition]}
        contentFit="cover"
        source={require("../assets/help-circle.png")}
      />
      <Text style={[styles.title, styles.titleTypo]}>My Ingredients</Text>
      <Image
        style={[styles.removingIngredientChild, styles.bgPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-654.png")}
      />
      <View style={[styles.pop, styles.popLayout]}>
        <View style={[styles.popUp, styles.popUpLayout]}>
          <View style={[styles.removeTomatosParent, styles.popUpLayout]}>
            <Text
              style={[styles.removeTomatos, styles.titleTypo]}
            >{`Remove Tomatos? `}</Text>
            <Text
              style={[styles.removingThisIngredient, styles.imageIconPosition]}
            >{`Removing this ingredient will update your recipe recommendations.

You can always re-add this ingredient from the 'Add Ingredient' screen`}</Text>
          </View>
        </View>
        <View style={styles.primaryDefault}>
          <Add
            default1="Remove"
            primaryDefaultPosition="unset"
            primaryDefaultBackgroundColor="#181818"
            primaryDefaultWidth={99}
          />
        </View>
        <Image
          style={styles.closeIcon}
          contentFit="cover"
          source={require("../assets/close.png")}
        />
      </View>
      <StatusBar2 />
      <View style={[styles.header, styles.headerLayout]}>
        <Image
          style={[styles.vuesaxlineararrowLeftIcon, styles.headerLayout]}
          contentFit="cover"
          source={require("../assets/vuesaxlineararrowleft1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeIndicatorLayout: {
    width: 375,
    left: 0,
  },
  timeFlexBox1: {
    paddingVertical: Padding.p_9xs_5,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    top: 94,
    position: "absolute",
  },
  myFridgeTypo: {
    textAlign: "left",
    fontSize: FontSize.textStyleSmallerTextRegular_size,
    fontFamily: FontFamily.textStyleSmallerTextRegular,
  },
  timeFlexBox: {
    top: 497,
    paddingVertical: Padding.p_9xs_5,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  popLayout: {
    width: 315,
    position: "absolute",
  },
  bgPosition1: {
    top: 0,
    left: 0,
  },
  bgPosition: {
    opacity: 0.5,
    position: "absolute",
  },
  titleTypo: {
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    position: "absolute",
  },
  imageIconPosition: {
    left: 15,
    position: "absolute",
  },
  recipeLayout: {
    height: 76,
    width: 315,
  },
  popUpLayout: {
    height: 263,
    width: 297,
    position: "absolute",
  },
  headerLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  line: {
    marginTop: 4,
    marginLeft: -67.5,
    top: "50%",
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colourStylesLabelColour,
    width: 135,
    height: 5,
    position: "absolute",
  },
  homeIndicator: {
    top: 778,
    height: 34,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  myFridge: {
    color: Color.colourStylesNeutralColourGray3,
  },
  time: {
    left: 37,
  },
  time1: {
    left: 300,
  },
  time2: {
    left: 37,
  },
  time3: {
    left: 300,
  },
  bg: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colourStylesNeutralColourGray4,
    height: 76,
    width: 315,
    top: 0,
    left: 0,
  },
  label: {
    top: 28,
    left: 264,
    fontSize: FontSize.poppinsLabelBold_size,
    textAlign: "right",
    color: Color.colourStylesNeutralColourGray3,
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    position: "absolute",
  },
  noodles: {
    top: 29,
    left: 83,
    fontSize: FontSize.textStyleNormalTextBold_size,
    color: Color.colourStylesLabelColour,
  },
  imageIcon: {
    top: 12,
    width: 52,
    height: 52,
  },
  recipe6: {
    marginTop: 10,
  },
  recipe: {
    position: "absolute",
  },
  recipeWrapper: {
    top: 541,
    left: 29,
    height: 334,
  },
  helpCircleIcon: {
    top: 57,
    left: 316,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  title: {
    top: 54,
    left: 119,
    fontSize: FontSize.textStyleMediumTextBold_size,
    color: Color.neutral100,
  },
  removingIngredientChild: {
    top: -8,
    height: 834,
    width: 375,
    left: 0,
  },
  removeTomatos: {
    top: 20,
    left: 60,
    fontSize: FontSize.textStyleLargeTextBold_size,
    color: Color.black,
  },
  removingThisIngredient: {
    top: 72,
    color: Color.colourStylesNeutralColourGray2,
    width: 280,
    textAlign: "left",
    fontSize: FontSize.textStyleSmallerTextRegular_size,
    fontFamily: FontFamily.textStyleSmallerTextRegular,
  },
  removeTomatosParent: {
    borderRadius: 20,
    top: 0,
    left: 0,
    backgroundColor: Color.white,
  },
  popUp: {
    top: 3,
    left: 5,
  },
  primaryDefault: {
    top: 185,
    left: 103,
    width: 166,
    height: 81,
    position: "absolute",
  },
  closeIcon: {
    height: "14.37%",
    width: "7.59%",
    top: "8.38%",
    right: "6.38%",
    bottom: "77.25%",
    left: "86.03%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  pop: {
    top: 322,
    height: 167,
    left: 30,
  },
  vuesaxlineararrowLeftIcon: {
    top: 0,
    left: 0,
  },
  header: {
    top: 56,
    left: 30,
  },
  removingIngredient: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default RemovingIngredient;
