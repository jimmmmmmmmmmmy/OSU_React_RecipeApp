import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const RecipeCardCircular = ({ imageSource, title, time, onPress }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <TouchableOpacity style={styles.recipeCard} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image 
          source={imageSource} 
          style={styles.foodImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.cardContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.recipeTitle} numberOfLines={2}>{title}</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.recipeTime}>{time}</Text>
          <TouchableOpacity 
            style={[styles.heartIconContainer, isLiked && styles.heartIconContainerLiked]} 
            onPress={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
          >
            <Ionicons 
              name={isLiked ? "heart" : "heart-outline"}
              size={20} 
              color={isLiked ? '#FFFFFF' : '#000000'} 
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  recipeCard: {
    width: 180,
    marginRight: 15,
    alignItems: 'center',
  },
  imageContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -50,
    zIndex: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  foodImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  cardContent: {
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    width: '100%',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
    height: 180,
    justifyContent: 'space-between',
  },
  titleContainer: {
    height: 50,
    justifyContent: 'center',
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    color: Color.neutral100,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  recipeTime: {
    fontSize: 16,
    fontWeight: '600',
    color: '#757575',
    fontFamily: FontFamily.textStyleSmallerTextRegular,
  },
  heartIconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  heartIconContainerLiked: {
    backgroundColor: '#FF0000',
  },
});

export default RecipeCardCircular;