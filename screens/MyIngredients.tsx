import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import FrameComponent from "../components/FrameComponent";
import StatusBar2 from "../components/StatusBar2";
import { Padding, FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const MyIngredients = () => {
  return (
    <View style={styles.myIngredients}>
      <View style={styles.homeIndicator}>
        <View style={styles.line} />
      </View>
      <View style={[styles.time, styles.timeFlexBox1]}>
        <Text style={styles.myFridge}>My Fridge</Text>
      </View>
      <View style={[styles.time1, styles.timeFlexBox1]}>
        <Text style={styles.myFridge}>10 Items</Text>
      </View>
      <FrameComponent />
      <View style={[styles.time2, styles.timeFlexBox]}>
        <Text style={styles.myFridge}>My Pantry</Text>
      </View>
      <View style={[styles.time3, styles.timeFlexBox]}>
        <Text style={styles.myFridge}>10 Items</Text>
      </View>
      <View style={styles.recipeWrapper}>
        <View style={[styles.recipe, styles.bgPosition1]}>
          <View style={styles.recipeLayout}>
            <View style={[styles.bg, styles.bgPosition]} />
            <Text style={styles.label}>500g</Text>
            <Text style={[styles.noodles, styles.titleTypo]}>Noodles</Text>
            <Image
              style={styles.imageIcon}
              contentFit="cover"
              source={require("../assets/image.png")}
            />
          </View>
          <View style={[styles.recipe6, styles.recipeLayout]}>
            <View style={[styles.bg, styles.bgPosition]} />
            <Text style={styles.label}>300g</Text>
            <Text style={[styles.noodles, styles.titleTypo]}>Granola</Text>
            <Image
              style={styles.imageIcon}
              contentFit="cover"
              source={require("../assets/image.png")}
            />
          </View>
          <View style={[styles.recipe6, styles.recipeLayout]}>
            <View style={[styles.bg, styles.bgPosition]} />
            <Text style={styles.label}>300g</Text>
            <Text style={[styles.noodles, styles.titleTypo]}>Taco Shells</Text>
            <Image
              style={styles.imageIcon}
              contentFit="cover"
              source={require("../assets/image.png")}
            />
          </View>
          <View style={[styles.recipe6, styles.recipeLayout]}>
            <View style={[styles.bg, styles.bgPosition]} />
            <Text style={styles.label}>300g</Text>
            <Text style={[styles.noodles, styles.titleTypo]}>Slice Bread</Text>
            <Image
              style={styles.imageIcon}
              contentFit="cover"
              source={require("../assets/image.png")}
            />
          </View>
          <View style={[styles.recipe6, styles.recipeLayout]}>
            <View style={[styles.bg, styles.bgPosition]} />
            <Text style={styles.label}>300g</Text>
            <Text style={[styles.noodles, styles.titleTypo]}>Green onion</Text>
            <Image
              style={styles.imageIcon}
              contentFit="cover"
              source={require("../assets/image1.png")}
            />
          </View>
          <View style={[styles.recipe6, styles.recipeLayout]}>
            <View style={[styles.bg, styles.bgPosition]} />
            <Text style={styles.label}>300g</Text>
            <Text style={[styles.noodles, styles.titleTypo]}>Omelette</Text>
            <Image
              style={styles.imageIcon}
              contentFit="cover"
              source={require("../assets/image2.png")}
            />
          </View>
          <View style={[styles.recipe6, styles.recipeLayout]}>
            <View style={[styles.bg, styles.bgPosition]} />
            <Text style={styles.label}>300g</Text>
            <Text style={[styles.noodles, styles.titleTypo]}>Hot Dog</Text>
            <Image
              style={styles.imageIcon}
              contentFit="cover"
              source={require("../assets/image3.png")}
            />
          </View>
          <View style={[styles.recipe6, styles.recipeLayout]}>
            <View style={[styles.bg, styles.bgPosition]} />
            <Text style={styles.label}>300g</Text>
            <Text style={[styles.noodles, styles.titleTypo]}>Oninon</Text>
            <Image
              style={styles.imageIcon}
              contentFit="cover"
              source={require("../assets/image4.png")}
            />
          </View>
          <View style={[styles.recipe6, styles.recipeLayout]}>
            <View style={[styles.bg, styles.bgPosition]} />
            <Text style={styles.label}>300g</Text>
            <Text style={[styles.noodles, styles.titleTypo]}>Lettuce</Text>
            <Image
              style={styles.imageIcon}
              contentFit="cover"
              source={require("../assets/image5.png")}
            />
          </View>
          <View style={[styles.recipe6, styles.recipeLayout]}>
            <View style={[styles.bg, styles.bgPosition]} />
            <Text style={styles.label}>300g</Text>
            <Text style={[styles.noodles, styles.titleTypo]}>Spinach</Text>
            <Image
              style={styles.imageIcon}
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
              style={styles.imageIcon}
              contentFit="cover"
              source={require("../assets/image7.png")}
            />
          </View>
          <View style={[styles.recipe6, styles.recipeLayout]}>
            <View style={[styles.bg, styles.bgPosition]} />
            <Text style={styles.label}>300g</Text>
            <Text style={[styles.noodles, styles.titleTypo]}>Fries</Text>
            <Image
              style={styles.imageIcon}
              contentFit="cover"
              source={require("../assets/image8.png")}
            />
          </View>
          <View style={[styles.recipe6, styles.recipeLayout]}>
            <View style={[styles.bg, styles.bgPosition]} />
            <Text style={styles.label}>300g</Text>
            <Text style={[styles.noodles, styles.titleTypo]}>Chicken</Text>
            <Image
              style={styles.imageIcon}
              contentFit="cover"
              source={require("../assets/image9.png")}
            />
          </View>
          <View style={[styles.recipe6, styles.recipeLayout]}>
            <View style={[styles.bg, styles.bgPosition]} />
            <Text style={styles.label}>300g</Text>
            <Text style={[styles.noodles, styles.titleTypo]}>Burger</Text>
            <Image
              style={styles.imageIcon}
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
        style={styles.createIcon}
        contentFit="cover"
        source={require("../assets/create.png")}
      />
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
  timeFlexBox1: {
    paddingVertical: Padding.p_9xs_5,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    top: 94,
    position: "absolute",
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
  recipeLayout: {
    height: 76,
    width: 315,
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
    width: 375,
    height: 34,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  myFridge: {
    fontSize: FontSize.textStyleSmallerTextRegular_size,
    textAlign: "left",
    color: Color.colourStylesNeutralColourGray3,
    fontFamily: FontFamily.textStyleSmallerTextRegular,
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
    left: 15,
    width: 52,
    height: 52,
    position: "absolute",
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
    width: 315,
    position: "absolute",
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
  createIcon: {
    top: 695,
    left: 143,
    width: 90,
    height: 87,
    position: "absolute",
  },
  vuesaxlineararrowLeftIcon: {
    top: 0,
    left: 0,
  },
  header: {
    top: 56,
    left: 30,
  },
  myIngredients: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default MyIngredients;
