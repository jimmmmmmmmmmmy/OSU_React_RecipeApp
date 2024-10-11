import React, { useState, useCallback } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import RecipeCard from './RecipeCard';
import SectionHeader from './SectionHeader';
import images from '../data/images';
import EventBus from '../services/EventBus';


const RecipeRecommends = () => {
  const navigation = useNavigation();
  const [sortedRecipes, setSortedRecipes] = useState([]);

  useFocusEffect(
    useCallback(() => {
      EventBus.publish('GET_RECIPE_RECOMMENDATIONS', {});
      
      const handleRecommendations = (recipes) => {
        setSortedRecipes(recipes);
      };
      
      EventBus.subscribe('RECIPE_RECOMMENDATIONS_READY', handleRecommendations);
      
      return () => {
        // Unsubscribe when component is unfocused
        EventBus.unsubscribe('RECIPE_RECOMMENDATIONS_READY', handleRecommendations);
      };
    }, [])
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
        {sortedRecipes && sortedRecipes.map((recipe) => (
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