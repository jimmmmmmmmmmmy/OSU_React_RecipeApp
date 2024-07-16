import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RecipeCard from './RecipeCard';
import SectionHeader from './SectionHeader';

const recipeData = [
  { id: '1', title: "Spaghetti and Meatballs", time: "30 Mins", creator: "Italian Chef", ingredients: ['spaghetti', 'meatballs', 'tomato sauce'], instructions: ['Cook spaghetti', 'Prepare meatballs', 'Mix with sauce'] },
  { id: '2', title: "Shrimp Fried Rice", time: "1 Hour", creator: "Asian Cuisine Expert", ingredients: ['rice', 'shrimp', 'vegetables'], instructions: ['Cook rice', 'Stir-fry shrimp and veggies', 'Mix everything'] },
  { id: '3', title: "Vegan Pancakes", time: "20 Mins", creator: "Vegan Chef", ingredients: ['flour', 'plant milk', 'maple syrup'], instructions: ['Mix batter', 'Cook pancakes', 'Serve with syrup'] },
  { id: '4', title: "Chicken Stir Fry", time: "25 Mins", creator: "Quick Meal Pro", ingredients: ['chicken', 'mixed vegetables', 'soy sauce'], instructions: ['Cut chicken', 'Stir-fry everything', 'Add sauce'] },
  { id: '5', title: "Vegetable Curry", time: "45 Mins", creator: "Indian Cuisine Master", ingredients: ['mixed vegetables', 'curry paste', 'coconut milk'], instructions: ['Prepare vegetables', 'Cook curry sauce', 'Simmer together'] },
  { id: '6', title: "Beef Tacos", time: "35 Mins", creator: "Mexican Food Expert", ingredients: ['beef', 'taco shells', 'toppings'], instructions: ['Cook beef', 'Prepare toppings', 'Assemble tacos'] },
];

const QuickGroceryRun = () => {
  const navigation = useNavigation();

  const handleSeeAll = () => {
    navigation.navigate('RecipeCatalog', { source: 'QuickGroceryRun' });
  };

  const handleRecipePress = (recipe) => {
    navigation.navigate('RecipeDetails', { recipe });
  };

  return (
    <View style={styles.container}>
      <SectionHeader title="Quick grocery run:" onSeeAll={handleSeeAll} />
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardsContainer}
      >
        {recipeData.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            imageSource={require("../assets/image-61.png")}
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
    paddingHorizontal: 0,
  },
  card: {
    width: 150,
    height: 150,
    marginRight: 15,
  },
});

export default QuickGroceryRun;