import React, { useState, useMemo } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RecipeCard from './RecipeCard';
import SectionHeader from './SectionHeader';
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import recipeData from '../data/recipeData.json';
import images from '../data/images';

const MealTypeTab = ({ title, isSelected, onPress }) => (
  <TouchableOpacity 
    style={[styles.tab, isSelected && styles.selectedTab]}
    onPress={() => onPress(title)}
  >
    <Text style={[styles.tabText, isSelected && styles.selectedTabText]}>{title}</Text>
  </TouchableOpacity>
);

const QuickGroceryRun = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('All');

  const mealTypes = ['All', 'Appetizer', 'Breakfast', 'Lunch', 'Dinner'];

  const filteredRecipes = useMemo(() => {
    if (selectedTab === 'All') {
      return recipeData;
    }
    return recipeData.filter(recipe => 
      recipe.category && recipe.category.includes(selectedTab)
    );
  }, [selectedTab]);

  const handleSeeAll = () => {
    navigation.navigate('RecipeCatalog', { source: 'QuickGroceryRun' });
  };

  const handleRecipePress = (recipe) => {
    navigation.navigate('RecipeDetails', { recipe });
  };

  return (
    <View style={styles.container}>
      <SectionHeader title="Quick grocery run:" onSeeAll={handleSeeAll} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabContainer}>
        {mealTypes.map((type) => (
          <MealTypeTab 
            key={type}
            title={type} 
            isSelected={selectedTab === type} 
            onPress={setSelectedTab} 
          />
        ))}
      </ScrollView>
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardsContainer}
      >
        {filteredRecipes.map((recipe) => (
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