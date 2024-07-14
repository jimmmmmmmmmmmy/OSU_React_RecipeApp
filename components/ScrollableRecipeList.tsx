import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const { width } = Dimensions.get('window');

const RecipeCard = ({ title, creator }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.card}>
      <LinearGradient
        style={styles.cardGradient}
        locations={[0, 1]}
        colors={["rgba(0, 0, 0, 0)", "#000"]}
      />
      <Text style={styles.foodTitle} numberOfLines={2}>
        {title}
      </Text>
      <Text style={styles.creator}>{creator}</Text>
      <TouchableOpacity 
        style={[styles.heartIconContainer, isLiked && styles.heartIconContainerLiked]} 
        onPress={toggleLike}
      >
        <Ionicons 
          name="heart-outline" 
          size={16} 
          color={isLiked ? '#FFFFFF' : '#000000'} 
        />
      </TouchableOpacity>
    </View>
  );
};

const ScrollableRecipeList = ({ recipes }) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.cardsContainer}>
        {recipes.map((recipe, index) => (
          <RecipeCard 
            key={index} 
            title={recipe.title} 
            creator={recipe.creator} 
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  cardsContainer: {
    padding: 20,
  },
  card: {
    height: 200,
    marginBottom: 20,
    borderRadius: Border.br_3xs,
    overflow: 'hidden',
  },
  cardGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  foodTitle: {
    position: 'absolute',
    bottom: 40,
    left: 10,
    right: 10,
    color: Color.white,
    fontSize: FontSize.textStyleSmallerTextRegular_size,
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    fontWeight: "600",
  },
  creator: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: Color.colourStylesNeutralColourGray3,
    fontSize: FontSize.textStyleSmallerTextSmallLabel_size,
    fontFamily: FontFamily.textStyleSmallerTextRegular,
  },
  heartIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  heartIconContainerLiked: {
    backgroundColor: '#FF0000',
  },
});

export default ScrollableRecipeList;