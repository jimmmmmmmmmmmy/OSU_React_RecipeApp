import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import FrameComponent2 from "../components/FrameComponent2";
import ScanCategory from "../components/ScanCategory";
import Add from "../components/Add";
import TextInputValidationEmpt from "../components/TextInputValidationEmpt";
import LocationIngredientAdd from "../components/LocationIngredientAdd";
import StatusBar2 from "../components/StatusBar2";
import { Color, Padding, FontFamily, Border, FontSize } from "../GlobalStyles";

const AddIngredient = () => {
  return (
    <View style={[styles.addIngredient, styles.addIngredientBg]}>
      <View style={[styles.homeIndicator, styles.addIngredientBg]}>
        <View style={styles.line} />
      </View>
      <View style={[styles.time, styles.timeFlexBox1]}>
        <Text style={styles.myFridge}>My Fridge</Text>
      </View>
      <View style={[styles.time1, styles.timeFlexBox1]}>
        <Text style={styles.myFridge}>10 Items</Text>
      </View>
      <FrameComponent2 />
      <View style={[styles.time2, styles.timeFlexBox]}>
        <Text style={styles.myFridge}>My Pantry</Text>
      </View>
      <View style={[styles.time3, styles.timeFlexBox]}>
        <Text style={styles.myFridge}>10 Items</Text>
      </View>
      <View style={styles.recipeWrapper}>
        <View style={styles.recipe}>
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
      <View style={styles.overlay} />
      <View style={[styles.productCard, styles.productCardLayout]}>
        <View style={styles.productCardChild} />
        <Image
          style={styles.iconlylightheart}
          contentFit="cover"
          source={require("../assets/iconlylightheart.png")}
        />
        <View style={[styles.image5Parent, styles.parentPosition]}>
          <Image
            style={[styles.image5Icon, styles.image5IconLayout]}
            contentFit="cover"
            source={require("../assets/image-51.png")}
          />
          <Text style={[styles.elenaShelby, styles.elenaShelbyTypo]}>
            Elena Shelby
          </Text>
        </View>
      </View>
      <View style={[styles.productCard1, styles.productCardLayout]}>
        <View style={styles.productCardChild} />
        <Image
          style={styles.iconlylightheart}
          contentFit="cover"
          source={require("../assets/iconlylightheart.png")}
        />
        <View style={[styles.rectangleParent, styles.parentPosition]}>
          <Image
            style={[styles.groupChild, styles.image5IconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-196.png")}
          />
          <Text style={[styles.johnPriyadi, styles.elenaShelbyTypo]}>
            John Priyadi
          </Text>
        </View>
      </View>
      <ScanCategory
        chooseOneOption="Add Ingredient"
        close1={require("../assets/close1.png")}
        scanCategoryPosition="absolute"
        scanCategoryWidth={373}
        scanCategoryTop={386}
        scanCategoryLeft={1}
      />
      <ScanCategory
        chooseOneOption="Add Ingredient"
        close1={require("../assets/close1.png")}
        scanCategoryPosition="absolute"
        scanCategoryWidth={373}
        scanCategoryTop={386}
        scanCategoryLeft={1}
      />
      <View style={styles.primaryDefault}>
        <Add
          default1="Add"
          primaryDefaultPosition="unset"
          primaryDefaultBackgroundColor="#181818"
          primaryDefaultWidth={156}
        />
      </View>
      <View style={[styles.textInputEmpty, styles.textLayout]}>
        <TextInputValidationEmpt enterName="Enter Name" />
      </View>
      <View style={[styles.textInputEmpty1, styles.textLayout]}>
        <TextInputValidationEmpt enterName="Enter quantity" />
        <TextInputValidationEmpt enterName="Enter quantity" />
      </View>
      <View style={styles.fiterrate}>
        <LocationIngredientAdd
          prop="Fridge"
          property1DefaultPosition="absolute"
          property1DefaultBorderColor="#303030"
          property1DefaultTop={0}
          property1DefaultLeft={0}
          property1DefaultWidth={64}
          property1DefaultHeight={37}
          property1DefaultBackgroundColor="#fff"
        />
        <LocationIngredientAdd
          prop="Pantry"
          property1DefaultPosition="absolute"
          property1DefaultBorderColor="#fff"
          property1DefaultTop={0}
          property1DefaultLeft={76}
          property1DefaultWidth={66}
          property1DefaultHeight={37}
          property1DefaultBackgroundColor="#010101"
        />
        <LocationIngredientAdd
          prop="Freezer"
          property1DefaultPosition="absolute"
          property1DefaultBorderColor="#040404"
          property1DefaultTop={0}
          property1DefaultLeft={155}
          property1DefaultWidth={70}
          property1DefaultHeight={37}
          property1DefaultBackgroundColor="#fff"
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
  addIngredientBg: {
    backgroundColor: Color.white,
    overflow: "hidden",
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
  timeFlexBox: {
    top: 497,
    paddingVertical: Padding.p_9xs_5,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
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
  productCardLayout: {
    height: 264,
    width: 151,
    top: 642,
    position: "absolute",
  },
  parentPosition: {
    left: "0%",
    bottom: "88.26%",
    top: "0%",
    height: "11.74%",
    position: "absolute",
  },
  image5IconLayout: {
    borderRadius: Border.br_2xs,
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  elenaShelbyTypo: {
    color: Color.mainText,
    fontFamily: FontFamily.h2,
    fontWeight: "500",
    letterSpacing: 1,
    fontSize: FontSize.s_size,
    top: "25.81%",
    textAlign: "left",
    position: "absolute",
  },
  textLayout: {
    height: 56,
    width: 295,
    left: 35,
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
    width: 375,
    height: 34,
    left: 0,
    position: "absolute",
    overflow: "hidden",
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
    top: 0,
    left: 0,
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
  overlay: {
    left: -5,
    backgroundColor: Color.black,
    width: 382,
    height: 811,
    opacity: 0.6,
    top: 0,
    position: "absolute",
  },
  productCardChild: {
    height: "12.12%",
    width: "21.19%",
    top: "23.86%",
    right: "10.6%",
    bottom: "64.02%",
    left: "68.21%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGray_100,
    position: "absolute",
  },
  iconlylightheart: {
    height: "7.58%",
    width: "13.25%",
    top: "26.14%",
    right: "14.57%",
    bottom: "66.29%",
    left: "72.19%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  image5Icon: {
    width: "26.27%",
    right: "73.73%",
  },
  elenaShelby: {
    left: "33.05%",
  },
  image5Parent: {
    width: "78.15%",
    right: "21.85%",
  },
  productCard: {
    left: 23,
  },
  groupChild: {
    width: "26.72%",
    right: "73.28%",
  },
  johnPriyadi: {
    left: "33.62%",
  },
  rectangleParent: {
    width: "76.82%",
    right: "23.18%",
  },
  productCard1: {
    left: 199,
  },
  primaryDefault: {
    top: 711,
    left: 102,
    width: 160,
    height: 78,
    position: "absolute",
  },
  textInputEmpty: {
    top: 462,
  },
  textInputEmpty1: {
    top: 534,
  },
  fiterrate: {
    top: 625,
    left: 70,
    width: 225,
    height: 37,
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
  addIngredient: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default AddIngredient;
