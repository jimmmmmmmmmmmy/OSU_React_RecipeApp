import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';

const MealTypeTab = ({ title, isSelected, onPress }) => (
  <TouchableOpacity 
    style={[styles.tab, isSelected && styles.selectedTab]}
    onPress={() => onPress(title)}
  >
    <Text style={[styles.tabText, isSelected && styles.selectedTabText]}>{title}</Text>
  </TouchableOpacity>
);

const RecipeCard = ({ title, time }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <View style={styles.recipeCard}>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/image-61.png')} 
          style={styles.foodImage}
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
            onPress={() => setIsLiked(!isLiked)}
          >
            <Ionicons 
              name={isLiked ? "heart" : "heart-outline"}
              size={20} 
              color={isLiked ? '#FFFFFF' : '#000000'} 
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const SectionHeader = ({ title, onSeeAll }) => (
  <View style={styles.header}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <TouchableOpacity style={styles.seeAllButton} onPress={onSeeAll}>
      <Text style={styles.seeAllText}>See all</Text>
      <Image
        style={styles.arrowIcon}
        source={require("../assets/iconarrowright.png")}
      />
    </TouchableOpacity>
  </View>
);

const IngredientsOnHand = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('Appetizer');

  const mealTypes = ['Appetizer', 'Breakfast', 'Lunch', 'Dinner'];
  const recipes = [
    { title: "Chopped Spring", time: "20 Mins" },
    { title: "Grilled Salmon", time: "25 Mins" },
    { title: "Vegetable Stir Fry", time: "15 Mins" },
    { title: "Chicken Curry", time: "30 Mins" },
    { title: "Pasta Primavera", time: "22 Mins" },
  ];

  return (
    <View style={styles.container}>
      <SectionHeader 
        title="Ingredients on hand:" 
        onSeeAll={() => navigation.navigate('RecipeCatalog', { source: 'IngredientsOnHand' })}
      />
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
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recipeContainer}>
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} title={recipe.title} time={recipe.time} />
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: FontSize.textStyleLargeTextBold_size,
    fontWeight: "600",
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    color: Color.neutral100,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    fontSize: FontSize.poppinsLabelBold_size,
    fontWeight: "500",
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    color: Color.colourStylesNeutralColourGray3,
    marginRight: 5,
  },
  arrowIcon: {
    width: 20,
    height: 20,
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
  },
  selectedTabText: {
    color: '#FFFFFF',
  },
  recipeContainer: {
    paddingTop: 10,
  },
  recipeCard: {
    width: 180, // Increased width
    marginRight: 15,
    alignItems: 'center',
  },
  imageContainer: {
    width: 140, // Larger circular image
    height: 140,
    borderRadius: 70,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -50, // Increased overlap
    zIndex: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  foodImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  titleContainer: {
    height: 50, // Fixed height for title area
    justifyContent: 'center',
  },
  cardContent: {
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    width: '100%',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
    height: 180, // Fixed height for the card content
    justifyContent: 'space-between', // Distribute space evenly
  },  
  recipeTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
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

export default IngredientsOnHand;