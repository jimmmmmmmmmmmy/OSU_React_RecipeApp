import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');
const cardWidth = (width - 60) / 3; // Subtracting horizontal padding and gaps

const RecipeCard = ({ imageSource, title, details, servings, time }) => (
  <View style={styles.card}>
    <Image
      style={styles.foodPhotoIcon}
      contentFit="cover"
      source={imageSource}
    />
    <View style={styles.info}>
      <Text style={styles.foodTitle} numberOfLines={1}>{title}</Text>
      <Text style={styles.creator} numberOfLines={2}>
        {details || `Serves: ${servings}\n${time}`}
      </Text>
    </View>
  </View>
);

const RecipeRecommends = () => {
  const navigation = useNavigation();

  const handleSeeAll = () => {
    navigation.navigate('RecipeRecommendations');
  };

  return (
    <View style={styles.recent}>
      <View style={styles.navigation}>
        <Text style={styles.recentRecipe}>Recipe Recommends:</Text>
        <TouchableOpacity style={styles.seeAllButton} onPress={handleSeeAll}>
          <Text style={styles.seeAll}>See all</Text>
          <Image
            style={styles.iconarrowRight}
            contentFit="cover"
            source={require("../assets/iconarrowright.png")}
          />
        </TouchableOpacity>
      </View>
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardsContainer}
      >
        <RecipeCard
          imageSource={require("../assets/food-photo.png")}
          title="Spaghetti and Meatballs"
          servings="4"
          time="30 Minutes"
        />
        <RecipeCard
          imageSource={require("../assets/food-photo.png")}
          title="Shrimp Fried Rice"
          servings="3"
          time="1 Hour"
        />
        <RecipeCard
          imageSource={require("../assets/food-photo.png")}
          title="Vegan Pancakes"
          servings="2"
          time="20 Minutes"
        />
        <RecipeCard
          imageSource={require("../assets/food-photo.png")}
          title="Chicken Stir Fry"
          servings= "4"
          time = "25 Minutes"
        />
        <RecipeCard
          imageSource={require("../assets/food-photo.png")}
          title="Vegetable Curry"
          servings="3"
          time = "45 Minutes"
        />
        <RecipeCard
          imageSource={require("../assets/food-photo.png")}
          title="Beef Tacos"
          servings ="4"
          time="35 Minutes"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  recent: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  recentRecipe: {
    fontSize: FontSize.textStyleLargeTextBold_size,
    lineHeight: 28,
    color: Color.neutral100,
    fontWeight: "600",
    fontFamily: FontFamily.textStyleSmallerTextRegular,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAll: {
    fontSize: FontSize.poppinsLabelBold_size,
    lineHeight: 20,
    color: Color.colourStylesNeutralColourGray3,
    fontWeight: "600",
    fontFamily: FontFamily.textStyleSmallerTextRegular,
  },
  iconarrowRight: {
    width: 20,
    height: 20,
    marginLeft: 4,
  },
  cardsContainer: {
    paddingRight: 20, // Add extra padding to the right for the last card
  },
  card: {
    width: cardWidth,
    marginRight: 10,
  },
  foodPhotoIcon: {
    width: '100%',
    height: 124,
    borderRadius: Border.br_3xs,
  },
  info: {
    marginTop: 8,
  },
  foodTitle: {
    fontSize: FontSize.poppinsLabelBold_size,
    lineHeight: 20,
    color: Color.neutral100,
    fontWeight: "600",
    fontFamily: FontFamily.textStyleSmallerTextRegular,
  },
  creator: {
    fontSize: FontSize.poppinsTinyRegular_size,
    color: Color.colorSilver,
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    marginTop: 4,
  },
});

export default RecipeRecommends;