import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RecipeCard from './RecipeCard';
import { Border, Color } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import recipeData from '../data/recipeData.json';
import images from '../data/images';

const { width } = Dimensions.get('window');
const cardWidth = width - 40; // Full width minus padding

const ScrollableRecipeList = ({ recipes }) => {
  const [likedRecipes, setLikedRecipes] = useState<Set<number>>(new Set());

  const navigation = useNavigation();

  const toggleLike = (index: number) => {
    setLikedRecipes(prevLiked => {
      const newLiked = new Set(prevLiked);
      if (newLiked.has(index)) {
        newLiked.delete(index);
      } else {
        newLiked.add(index);
      }
      return newLiked;
    });
  };

  const handleRecipePress = (recipe) => {
    navigation.navigate('RecipeDetails', { recipe });
  };

  const getImageSource = (imagePath) => {
    const imageName = imagePath.split('/').pop().split('.')[0];
    return images[imageName];
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.cardWrapper}>
      <RecipeCard 
        imageSource={getImageSource(item.imageSource)}
        title={item.title}
        creator={`by ${item.creator}`}
        style={styles.card}
        onPress={() => handleRecipePress(item)}
      />
      <TouchableOpacity 
        style={[
          styles.heartIconContainer, 
          likedRecipes.has(index) && styles.heartIconContainerLiked
        ]} 
        onPress={() => toggleLike(index)}
      >
        <Ionicons 
          name={likedRecipes.has(index) ? "heart" : "heart-outline"}
          size={16} 
          color={likedRecipes.has(index) ? '#FFFFFF' : '#000000'} 
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={recipes}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 20,
  },
  cardWrapper: {
    position: 'relative',
    marginBottom: 0,
  },
  card: {
    height: 200,
    marginBottom: 20,
    borderRadius: Border.br_3xs,
    overflow: 'hidden',
  },
  heartIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
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
    backgroundColor: Color.colorRed || '#FF0000',
  },
});

export default ScrollableRecipeList;
