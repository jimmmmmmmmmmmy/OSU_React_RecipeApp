import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const FrameComponent = () => {
  return (
    <View style={styles.recipeWrapper}>
      <View style={styles.bgPosition}>
        <View style={styles.recipeLayout}>
          <View style={[styles.bg, styles.recipeLayout]} />
          <Text style={[styles.label, styles.labelTypo]}>{`1/2 lbs `}</Text>
          <Text style={[styles.label1, styles.labelTypo]}>{` `}</Text>
          <Text style={styles.tomatos}>Tomatos</Text>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require("../assets/image.png")}
          />
          <Image
            style={[styles.deleteIcon, styles.label3Position]}
            contentFit="cover"
            source={require("../assets/delete.png")}
          />
        </View>
        <View style={[styles.recipe6, styles.recipeLayout]}>
          <View style={[styles.bg, styles.recipeLayout]} />
          <Text style={styles.tomatos}>Cabbage</Text>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require("../assets/image.png")}
          />
          <Text style={[styles.label, styles.labelTypo]}>1/2 lbs</Text>
        </View>
        <View style={[styles.recipe6, styles.recipeLayout]}>
          <View style={[styles.bg, styles.recipeLayout]} />
          <Text style={[styles.label3, styles.label3Position]}>1 lbs</Text>
          <Text style={styles.tomatos}>Ground Meat</Text>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require("../assets/image.png")}
          />
        </View>
        <View style={[styles.recipe6, styles.recipeLayout]}>
          <View style={[styles.bg, styles.recipeLayout]} />
          <Text style={[styles.label3, styles.label3Position]}>1 lbs</Text>
          <Text style={styles.tomatos}>Strawberries</Text>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require("../assets/image.png")}
          />
        </View>
        <View style={[styles.recipe6, styles.recipeLayout]}>
          <View style={[styles.bg, styles.recipeLayout]} />
          <Text style={[styles.label5, styles.labelTypo]}>300g</Text>
          <Text style={styles.tomatos}>Green onion</Text>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require("../assets/image1.png")}
          />
        </View>
        <View style={[styles.recipe6, styles.recipeLayout]}>
          <View style={[styles.bg, styles.recipeLayout]} />
          <Text style={[styles.label5, styles.labelTypo]}>300g</Text>
          <Text style={styles.tomatos}>Omelette</Text>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require("../assets/image2.png")}
          />
        </View>
        <View style={[styles.recipe6, styles.recipeLayout]}>
          <View style={[styles.bg, styles.recipeLayout]} />
          <Text style={[styles.label5, styles.labelTypo]}>300g</Text>
          <Text style={styles.tomatos}>Hot Dog</Text>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require("../assets/image3.png")}
          />
        </View>
        <View style={[styles.recipe6, styles.recipeLayout]}>
          <View style={[styles.bg, styles.recipeLayout]} />
          <Text style={[styles.label5, styles.labelTypo]}>300g</Text>
          <Text style={styles.tomatos}>Oninon</Text>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require("../assets/image4.png")}
          />
        </View>
        <View style={[styles.recipe6, styles.recipeLayout]}>
          <View style={[styles.bg, styles.recipeLayout]} />
          <Text style={[styles.label5, styles.labelTypo]}>300g</Text>
          <Text style={styles.tomatos}>Lettuce</Text>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require("../assets/image5.png")}
          />
        </View>
        <View style={[styles.recipe6, styles.recipeLayout]}>
          <View style={[styles.bg, styles.recipeLayout]} />
          <Text style={[styles.label5, styles.labelTypo]}>300g</Text>
          <Text style={styles.tomatos}>Spinach</Text>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require("../assets/image6.png")}
          />
        </View>
        <View style={[styles.recipe6, styles.recipeLayout]}>
          <View style={[styles.bg, styles.recipeLayout]} />
          <Text style={[styles.label5, styles.labelTypo]}>300g</Text>
          <Text style={styles.tomatos}>{`Red & Green Chilli`}</Text>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require("../assets/image7.png")}
          />
        </View>
        <View style={[styles.recipe6, styles.recipeLayout]}>
          <View style={[styles.bg, styles.recipeLayout]} />
          <Text style={[styles.label5, styles.labelTypo]}>300g</Text>
          <Text style={styles.tomatos}>Fries</Text>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require("../assets/image8.png")}
          />
        </View>
        <View style={[styles.recipe6, styles.recipeLayout]}>
          <View style={[styles.bg, styles.recipeLayout]} />
          <Text style={[styles.label5, styles.labelTypo]}>300g</Text>
          <Text style={styles.tomatos}>Chicken</Text>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require("../assets/image9.png")}
          />
        </View>
        <View style={[styles.recipe6, styles.recipeLayout]}>
          <View style={[styles.bg, styles.recipeLayout]} />
          <Text style={[styles.label5, styles.labelTypo]}>300g</Text>
          <Text style={styles.tomatos}>Burger</Text>
          <Image
            style={styles.imageIcon}
            contentFit="cover"
            source={require("../assets/image10.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  recipeLayout: {
    height: 76,
    width: 315,
  },
  labelTypo: {
    textAlign: "right",
    color: Color.colourStylesNeutralColourGray3,
    fontSize: FontSize.poppinsLabelBold_size,
    top: 28,
    fontFamily: FontFamily.textStyleSmallerTextRegular,
  },
  label3Position: {
    left: 271,
    position: "absolute",
  },
  bg: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colourStylesNeutralColourGray4,
    opacity: 0.5,
    left: 0,
    top: 0,
    position: "absolute",
  },
  label: {
    left: 256,
    position: "absolute",
  },
  label1: {
    left: 300,
    position: "absolute",
  },
  tomatos: {
    top: 29,
    left: 83,
    fontSize: FontSize.textStyleNormalTextBold_size,
    fontWeight: "600",
    color: Color.colourStylesLabelColour,
    textAlign: "left",
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    position: "absolute",
  },
  imageIcon: {
    top: 12,
    left: 15,
    width: 52,
    height: 52,
    position: "absolute",
  },
  deleteIcon: {
    top: 25,
    width: 24,
    height: 27,
  },
  recipe6: {
    marginTop: 10,
  },
  label3: {
    textAlign: "right",
    color: Color.colourStylesNeutralColourGray3,
    fontSize: FontSize.poppinsLabelBold_size,
    top: 28,
    fontFamily: FontFamily.textStyleSmallerTextRegular,
  },
  label5: {
    left: 264,
    position: "absolute",
  },
  bgPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  recipeWrapper: {
    top: 138,
    left: 29,
    height: 334,
    width: 315,
    position: "absolute",
  },
});

export default FrameComponent;
