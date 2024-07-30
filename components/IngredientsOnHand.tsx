import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RecipeCardCircular from './RecipeCardCircular';
import SectionHeader from './SectionHeader';
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import recipeData from '../data/recipeData.json';
import images from '../data/images';

const MealTypeTab = ({ title, isSelected, onPress, disabled }) => (
  <TouchableOpacity 
    style={[
      styles.tab, 
      isSelected && styles.selectedTab,
      disabled && styles.disabledTab
    ]}
    onPress={() => onPress(title)}
    disabled={disabled}
  >
    <Text style={[
      styles.tabText, 
      isSelected && styles.selectedTabText,
      disabled && styles.disabledTabText
    ]}>{title}</Text>
  </TouchableOpacity>
);

const IngredientsOnHand = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('Dinner');
  const [userIngredients, setUserIngredients] = useState({ fridge: [], pantry: [] });

  const mealTypes = ['Appetizer', 'Breakfast', 'Lunch', 'Dinner'];

  useEffect(() => {
    loadUserIngredients();
  }, []);

  const loadUserIngredients = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userIngredients');
      if (jsonValue != null) {
        setUserIngredients(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.error('Failed to load user ingredients:', e);
    }
  };

  const hasAllIngredients = (recipe) => {
    return recipe.ingredients.every(ingredient => 
      userIngredients.fridge.some(item => item.id === ingredient.id) ||
      userIngredients.pantry.some(item => item.id === ingredient.id && item.inStock)
    );
  };

  const availableRecipes = useMemo(() => {
    return recipeData.filter(recipe => hasAllIngredients(recipe));
  }, [userIngredients]);

  const filteredRecipes = useMemo(() => {
    return availableRecipes.filter(recipe => 
      recipe.category && recipe.category.includes(selectedTab)
    );
  }, [selectedTab, availableRecipes]);

  const availableMealTypes = useMemo(() => {
    return mealTypes.filter(type => 
      availableRecipes.some(recipe => recipe.category && recipe.category.includes(type))
    );
  }, [availableRecipes]);

  const handleSeeAll = () => {
    navigation.navigate('RecipeCatalog', { source: 'IngredientsOnHand' });
  };

  const handleRecipePress = (recipe) => {
    navigation.navigate('RecipeDetails', { recipe });
  };

  return (
    <View style={styles.container}>
      <SectionHeader title="Ingredients on hand:" onSeeAll={handleSeeAll} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabContainer}>
        {mealTypes.map((type) => (
          <MealTypeTab 
            key={type}
            title={type} 
            isSelected={selectedTab === type} 
            onPress={setSelectedTab} 
            disabled={!availableMealTypes.includes(type)}
          />
        ))}
      </ScrollView>
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.recipeContainer}
      >
        {filteredRecipes.map((recipe) => (
          <RecipeCardCircular
            key={recipe.id}
            imageSource={images[recipe.imageSource.split('/').pop().split('.')[0]]}
            title={recipe.title}
            time={recipe.time}
            onPress={() => handleRecipePress(recipe)}
          />
        ))}
      </ScrollView>
      {filteredRecipes.length === 0 && (
        <Text style={styles.noRecipesText}>
          {availableRecipes.length === 0 
            ? "No recipes available with your current ingredients."
            : `No ${selectedTab.toLowerCase()} recipes available with your current ingredients.`}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  tab: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
  },
  selectedTab: {
    backgroundColor: '#444444',
  },
  tabText: {
    color: '#757575',
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    fontSize: FontSize.poppinsLabelBold_size,
  },
  selectedTabText: {
    color: '#FFFFFF',
  },
  recipeContainer: {
    paddingVertical: 10,
  },
  noRecipesText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: FontSize.poppinsLabelBold_size,
    color: Color.neutral100,
    fontFamily: FontFamily.textStyleSmallerTextRegular,
  },
  disabledTab: {
    opacity: 0.5,
  },
  disabledTabText: {
    color: '#BDBDBD',
  },
  noRecipesText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: FontSize.poppinsLabelBold_size,
    color: Color.neutral100,
    fontFamily: FontFamily.textStyleSmallerTextRegular,
  },
});

export default IngredientsOnHand;