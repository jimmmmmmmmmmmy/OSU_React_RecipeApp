import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

type Recipe = {
  id: string;
  title: string;
  creator: string;
  time: string;
  category?: string;
  likes?: number;
  description?: string;
  ingredients: string[];
  instructions: string[];
  imageSource?: any;
};

type RecipeDetailsRouteProp = RouteProp<
  {
    RecipeDetails: {
      recipe: Recipe;
    };
  },
  'RecipeDetails'
>;

type Props = {
  route: RecipeDetailsRouteProp;
};

const RecipeDetails: React.FC<Props> = ({ route }) => {
  const { recipe } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={recipe.imageSource || require("../assets/image-61.png")}
          style={styles.image}
        />
        <LinearGradient
          style={styles.gradient}
          colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]}
        />
        <Text style={styles.title}>{recipe.title}</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Ionicons name="time-outline" size={24} color={Color.e5481} />
          <Text style={styles.infoText}>{recipe.time}</Text>
        </View>
        {recipe.category && (
          <View style={styles.infoItem}>
            <Ionicons name="restaurant-outline" size={24} color={Color.e5481} />
            <Text style={styles.infoText}>{recipe.category}</Text>
          </View>
        )}
        <View style={styles.infoItem}>
          <Ionicons name="person-outline" size={24} color={Color.e5481} />
          <Text style={styles.infoText}>{recipe.creator}</Text>
        </View>
        {recipe.likes !== undefined && (
          <View style={styles.infoItem}>
            <Ionicons name="heart-outline" size={24} color={Color.e5481} />
            <Text style={styles.infoText}>{recipe.likes} likes</Text>
          </View>
        )}
      </View>

      {recipe.description && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{recipe.description}</Text>
        </View>
      )}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ingredients</Text>
        {recipe.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.listItem}>• {ingredient}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Instructions</Text>
        {recipe.instructions.map((instruction, index) => (
          <Text key={index} style={styles.listItem}>{index + 1}. {instruction}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

type Styles = {
  container: ViewStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
  gradient: ViewStyle;
  title: TextStyle;
  infoContainer: ViewStyle;
  infoItem: ViewStyle;
  infoText: TextStyle;
  section: ViewStyle;
  sectionTitle: TextStyle;
  description: TextStyle;
  listItem: TextStyle;
};

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  imageContainer: {
    height: 250,
    justifyContent: 'flex-end',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    fontSize: FontSize.h2_size,
    fontWeight: '700',
    color: Color.white,
    padding: 20,
    fontFamily: FontFamily.h2,
  },
  infoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: Color.white,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 5,
    fontSize: FontSize.p2_size,
    fontFamily: FontFamily.h2,
    color: Color.mainText,
  },
  section: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: Color.outline,
  },
  sectionTitle: {
    fontSize: FontSize.h2_size,
    fontWeight: '700',
    marginBottom: 10,
    color: Color.e5481,
    fontFamily: FontFamily.h2,
  },
  description: {
    fontSize: FontSize.p2_size,
    lineHeight: 25,
    color: Color.mainText,
    fontFamily: FontFamily.h2,
  },
  listItem: {
    fontSize: FontSize.p2_size,
    lineHeight: 25,
    marginBottom: 5,
    color: Color.mainText,
    fontFamily: FontFamily.h2,
  },
});

export default RecipeDetails;