import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import ingredientsData from '../data/ingredientsData.json';
import EventBus from '../services/EventBus';
import IngredientManagementService from '../services/IngredientManagementService';

const IngredientItem = ({ name, quantity, unit, emoji, inStock, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[styles.ingredientItem, inStock && styles.inStockItem]}>
    <View style={styles.bg} />
    <Text style={styles.label}>
      {quantity ? `${quantity} ${unit}` : (inStock ? 'In Stock' : 'Out of Stock')}
    </Text>
    <View style={styles.iconNoodles}>
      <View style={styles.bg1} />
      <Text style={styles.text}>{emoji}</Text>
    </View>
    <Text style={styles.ingredientName}>{name}</Text>
  </TouchableOpacity>
);

const MyIngredients = () => {
  const navigation = useNavigation();
  const [userIngredients, setUserIngredients] = useState({ fridge: [], pantry: [] });

  useEffect(() => {
    const handleIngredientsUpdate = (ingredients) => {
      console.log('Received ingredients update:', ingredients);
      setUserIngredients(ingredients);
    };
  
    EventBus.subscribe('USER_INGREDIENTS_UPDATED', handleIngredientsUpdate);
    EventBus.publish('GET_USER_INGREDIENTS', {});
  
    return () => {
      EventBus.unsubscribe('USER_INGREDIENTS_UPDATED', handleIngredientsUpdate);
    };
  }, []);
  
  console.log('Rendering MyIngredients with:', userIngredients);

  const handleIngredientPress = () => {
    navigation.navigate('IngredientsList');
  };

  const renderIngredients = (storageType) => {
    return userIngredients[storageType].map(userIngredient => {
      const ingredientData = ingredientsData.find(i => i.id === userIngredient.id);
      if (!ingredientData) return null;
      return (
        <IngredientItem
          key={userIngredient.id}
          name={ingredientData.name}
          quantity={userIngredient.quantity}
          unit={userIngredient.unit || ingredientData.defaultUnit}
          emoji={ingredientData.emoji}
          inStock={userIngredient.inStock !== undefined ? userIngredient.inStock : true}
          onPress={handleIngredientPress}
        />
      );
    });
  };

  const totalItems = userIngredients.fridge.length + userIngredients.pantry.length;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Ingredients:</Text>
        <TouchableOpacity
          onPress={handleIngredientPress}
          style={styles.itemCount}
        >
          <Text style={styles.itemCount}>{totalItems} items</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
        >
          {renderIngredients('fridge')}
          {renderIngredients('pantry')}
        </ScrollView>
        <LinearGradient
          colors={['rgba(255,255,255,1)', 'rgba(255,255,255,0)']}
          style={styles.fadedEdge}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: FontSize.textStyleMediumTextBold_size,
    fontWeight: "600",
    color: Color.neutral100,
    marginTop: 20,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: FontSize.textStyleLargeTextBold_size,
    lineHeight: 28,
    color: Color.neutral100,
    fontWeight: "600",
    fontFamily: FontFamily.textStyleSmallerTextRegular,
  },
  itemCount: {
    fontSize: FontSize.poppinsLabelBold_size,
    lineHeight: 20,
    color: Color.neutral100,
    fontFamily: FontFamily.textStyleSmallerTextRegular,
  },
  listContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingTop: 10,
  },
  fadedEdge: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 10,
    zIndex: 1,
  },
  ingredientItem: {
    height: 76,
    marginBottom: 12,
  },
  inStockItem: {
    opacity: 90,
    backgroundColor: Color.white,
    
  },
  bg: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: Border.br_3xs,
  },
  label: {
    position: 'absolute',
    top: 28,
    right: 16,
    fontSize: FontSize.poppinsLabelBold_size,
    lineHeight: 20,
    color: Color.black,
    textAlign: 'right',
    fontFamily: FontFamily.textStyleSmallerTextRegular,
  },
  iconNoodles: {
    position: 'absolute',
    top: 12,
    left: 16,
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bg1: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
  },
  text: {
    fontSize: FontSize.size_9xl,
    lineHeight: 32,
    color: Color.black,
    textAlign: 'center',
    fontFamily: FontFamily.textStyleSmallerTextRegular,
  },
  ingredientName: {
    position: 'absolute',
    top: 29,
    left: 84,
    fontSize: FontSize.textStyleNormalTextBold_size,
    lineHeight: 22,
    color: Color.black,
    fontWeight: "600",
    fontFamily: FontFamily.textStyleSmallerTextRegular,
  },
});

export default MyIngredients;