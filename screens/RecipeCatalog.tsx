import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, useRoute, ParamListBase } from "@react-navigation/native";
import SearchField from "../components/SearchField";
import ScrollableRecipeList from "../components/ScrollableRecipeList";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { LinearGradient } from 'expo-linear-gradient';
import recipeData from '../data/recipeData.json';

const RecipeCatalog = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const route = useRoute();
  const { source, searchQuery } = route.params as { source?: string; searchQuery?: string };
  const [filteredRecipes, setFilteredRecipes] = useState(recipeData);

  useEffect(() => {
    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase();
      const filtered = recipeData.filter(recipe => 
        recipe.title.toLowerCase().includes(lowercasedQuery) ||
        recipe.ingredients.some(ingredient => 
          ingredient.id.toLowerCase().includes(lowercasedQuery)
        )
      );
      setFilteredRecipes(filtered);
    } else {
      setFilteredRecipes(recipeData);
    }
  }, [searchQuery]);

  const getSourceText = () => {
    if (searchQuery) {
      return `Search results for "${searchQuery}"`;
    }
    switch (source) {
      case 'IngredientsOnHand':
        return "Ready to Cook";
      case 'QuickGroceryRun':
        return "With just a few more things";
      default:
        return "All Recipes";
    }
  };
  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/vuesaxlineararrowleft2.png")}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Recipe Catalog</Text>
        <TouchableOpacity onPress={() => {navigation.navigate("SupportPage", { source: 'RecipeCatalog'})}}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/help-circle.png")}
          />
        </TouchableOpacity>
      </View>
  
      <View style={styles.searchContainer}>
        <View style={styles.searchFieldWrapper}>
          <SearchField 
            placeholder="Search recipe" 
            style={styles.searchField} />
        </View>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => {/* Add filter functionality in the future */}}
        >
          <Image
            style={styles.filterIcon}
            contentFit="cover"
            source={require("../assets/union1.png")}
          />
        </TouchableOpacity>
      </View>
  
      <View style={styles.contentContainer}>
        <Text style={styles.sourceText}>{getSourceText()}</Text>
        <View style={styles.recipeListWrapper}>
          <LinearGradient
            colors={['rgba(255,255,255,1)', 'rgba(255,255,255,0)']}
            style={styles.fadedEdge}
          />
          <ScrollableRecipeList recipes={filteredRecipes} />
        </View>
      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  icon: {
    width: 24,
    height: 24,
    opacity: 0.5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  searchFieldWrapper: {
    width: '85%', // Adjust this value as needed
  },
  searchField: {
    //
  },
  filterButton: {
    marginTop: 0, // filterButton needs to match searchField
    padding: 10,
    marginLeft: 10,
  },
  filterIcon: {
    width: 25,
    height: 27,
  },
  recipeListContainer: {
    flex: 1, // This allows ScrollableRecipeList to take up the remaining space
  },
  sourceText: {
    fontSize: 24,
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    fontWeight: '600',
    color: Color.neutral100,
    textAlign: 'left',
    paddingHorizontal: 20,
    marginBottom: 0,
  } as TextStyle,
  fadedEdge: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 20,
    zIndex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 0,
  },
  recipeListWrapper: {
    flex: 1,
    position: 'relative',
  },
});

export default RecipeCatalog;