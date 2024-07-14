import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, useRoute, ParamListBase } from "@react-navigation/native";
import SearchField from "../components/SearchField";
import ScrollableRecipeList from "../components/ScrollableRecipeList";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { LinearGradient } from 'expo-linear-gradient';



const RecipeCatalog = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const route = useRoute();
  const { source } = route.params as { source?: string };


  // Sample recipe data
  const recipes = [
    { title: "Delicious Pasta", creator: "Chef John" },
    { title: "Grilled Chicken Salad", creator: "Emma's Kitchen" },
    { title: "Chocolate Cake", creator: "Sweet Treats" },
    { title: "Vegetarian Stir Fry", creator: "Green Eats" },
    { title: "Homemade Pizza", creator: "Italian Delights" },
    // Add more recipes as needed
  ];

  const getSourceText = () => {
    switch (source) {
      case 'IngredientsOnHand':
        return "Ready to Cook";
      case 'QuickGroceryRun':
        return "With just a few more things";
      default:
        return "Test";
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
        <Text style={styles.title}>Search recipes</Text>
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
          <SearchField placeholder="Search recipe" style={styles.searchField} />
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
        {getSourceText() && (
          <Text style={styles.sourceText}>{getSourceText()}</Text>
        )}
  
        <View style={styles.recipeListWrapper}>
          <LinearGradient
            colors={['rgba(255,255,255,1)', 'rgba(255,255,255,0)']}
            style={styles.fadedEdge}
          />
          <ScrollableRecipeList recipes={recipes} />
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
    fontSize: FontSize.textStyleMediumTextBold_size,
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    fontWeight: "600",
    color: Color.neutral100,
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
    // Any specific styles for the SearchField component
  },
  filterButton: {
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
    fontSize: FontSize.textStyleLargeTextBold_size,
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    fontWeight: "600",
    color: Color.neutral100,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
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