import React, { useState, useCallback } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RecipeCard from './RecipeCard';
import SectionHeader from './SectionHeader';
import recipeData from '../data/recipeData.json';
import images from '../data/images';

const RecipeRecommends = () => {
  const navigation = useNavigation();
  const [sortedRecipes, setSortedRecipes] = useState([]);
  const [userIngredients, setUserIngredients] = useState({ fridge: [], pantry: [] });

  const loadUserIngredients = useCallback(async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userIngredients');
      if (jsonValue != null) {
        setUserIngredients(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.error('Failed to load user ingredients:', e);
    }
  }, []);

  const countAvailableIngredients = useCallback((recipe) => {
    return recipe.ingredients.filter(ingredient =>
      userIngredients.fridge.some(item => item.id === ingredient.id) ||
      userIngredients.pantry.some(item => item.id === ingredient.id && item.inStock)
    ).length;
  }, [userIngredients]);

  const sortRecipes = useCallback(() => {
    const sorted = [...recipeData].sort((a, b) => {
      const aCount = countAvailableIngredients(a);
      const bCount = countAvailableIngredients(b);
      return bCount - aCount; // Sort in descending order
    });
    setSortedRecipes(sorted);
  }, [countAvailableIngredients]);

  useFocusEffect(
    useCallback(() => {
      loadUserIngredients().then(sortRecipes);
    }, [loadUserIngredients, sortRecipes])
  );

  const handleSeeAll = () => {
    navigation.navigate('RecipeRecommendations', { source: 'RecipeRecommends' });
  };

  const handleRecipePress = (recipe) => {
    navigation.navigate('RecipeDetails', { recipe });
  };

  return (
    <View style={styles.container}>
      <SectionHeader title="Recipe Recommends:" onSeeAll={handleSeeAll} />
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardsContainer}
      >
        {sortedRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            imageSource={images[recipe.imageSource.split('/').pop().split('.')[0]]}
            title={recipe.title}
            time={recipe.time}
            creator={recipe.creator}
            style={styles.card}
            onPress={() => handleRecipePress(recipe)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  cardsContainer: {
    paddingRight: 20,
  },
  card: {
    width: 150,
    height: 150,
    marginRight: 10,
  },
});

export default RecipeRecommends;