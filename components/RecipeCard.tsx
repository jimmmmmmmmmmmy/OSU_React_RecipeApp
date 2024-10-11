import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ViewStyle, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

interface RecipeCardProps {
  imageSource: any;
  title: string;
  creator: string;
  style?: ViewStyle;
  onPress: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ 
  imageSource, 
  title, 
  creator, 
  style,
  onPress
}) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
    <ImageBackground
      source={imageSource}
      style={[styles.card, style]}
      imageStyle={styles.backgroundImage}
    >
      <LinearGradient
        style={styles.cardGradient}
        locations={[0, 1]}
        colors={["rgba(0, 0, 0, 0)", "#000"]}
      />
      <View style={styles.content}>
        <Text style={styles.foodTitle} numberOfLines={2}>{title}</Text>
        <Text style={styles.creator}>{creator}</Text>
      </View>
    </ImageBackground>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: Border.br_3xs,
    overflow: 'hidden',
    height: 120,
    justifyContent: 'flex-end',
  },
  backgroundImage: {
    resizeMode: 'cover',
  },
  cardGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    padding: 15,
    zIndex: 1, // Ensure content is above the gradient
  },
  foodTitle: {
    fontSize: FontSize.poppinsLabelBold_size,
    fontWeight: "600",
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    color: Color.white,
  },
  creator: {
    fontSize: FontSize.poppinsTinyRegular_size,
    color: Color.colourStylesNeutralColourGray3,
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    marginTop: 4,
  },
});

export default RecipeCard;