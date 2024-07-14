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

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.recipeCard}>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/food-photo.png')} 
          style={styles.foodImage}
        />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.recipeTitle}>{title}</Text>
        <View style={styles.timeContainer}>
          <Text style={styles.recipeTime}>{time}</Text>
          <TouchableOpacity 
            style={[styles.heartIconContainer, isLiked && styles.heartIconContainerLiked]} 
            onPress={toggleLike}
          >
            <Ionicons 
          name="heart-outline" 
          size={16} 
          color={isLiked ? '#FFFFFF' : '#000000'} 
        />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const IngredientsOnHand = () => {

  const navigation = useNavigation();

  const [selectedTab, setSelectedTab] = useState('Appetizer');

  const handleTabPress = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Ingredients on hand:</Text>
        <TouchableOpacity 
          style={styles.seeAllButton} 
          onPress={() => navigation.navigate('RecipeCatalog', { source: 'IngredientsOnHand'})}>
          <Text style={styles.seeAllText}>See all</Text>
          <Image
            style={styles.arrowIcon}
            source={require("../assets/iconarrowright.png")}
          />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabContainer}>
        <MealTypeTab title="Appetizer" isSelected={selectedTab === 'Appetizer'} onPress={handleTabPress} />
        <MealTypeTab title="Breakfast" isSelected={selectedTab === 'Breakfast'} onPress={handleTabPress} />
        <MealTypeTab title="Lunch" isSelected={selectedTab === 'Lunch'} onPress={handleTabPress} />
        <MealTypeTab title="Dinner" isSelected={selectedTab === 'Dinner'} onPress={handleTabPress} />
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recipeContainer}>
        <RecipeCard title="Chopped Spring" time="20 Mins" />
        <RecipeCard title="Chopped Spring" time="20 Mins" />
        <RecipeCard title="Chopped Spring" time="20 Mins" />
        <RecipeCard title="Chopped Spring" time="20 Mins" />
        <RecipeCard title="Chopped Spring" time="20 Mins" />
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
    width: 150,
    marginRight: 15,
    alignItems: 'center',
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 55,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -20,
    zIndex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  foodImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cardContent: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    width: '100%',
    paddingTop: 30,
    paddingBottom: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  recipeTime: {
    fontSize: 14,
    fontWeight: '600',
    color: '#757575',
  },

  
  heartIconContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
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
    backgroundColor: '#FF0000',
  },
  heartIcon: {
    width: 16,
    height: 16,
    tintColor: '#000000',
  },
  heartIconLiked: {
    tintColor: '#FFFFFF',
  },
});

export default IngredientsOnHand;