import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import ingredientsData from '../data/ingredientsData.json';
import userIngredients from '../data/userIngredients.json';
import AddIngredient from '../components/AddIngredient';

const IngredientItem = ({ name, quantity, unit, emoji, inStock, storageType }) => (
  <View style={styles.ingredientItem}>
    <View style={[styles.bg, storageType === 'fridge' ? styles.fridgeItem : styles.pantryItem]} />
    <Text style={styles.label}>
      {quantity ? `${quantity} ${unit}` : (inStock ? 'In Stock' : 'Out of Stock')}
    </Text>
    <View style={styles.iconContainer}>
      <Text style={styles.emoji}>{emoji}</Text>
    </View>
    <Text style={styles.ingredientName}>{name}</Text>
  </View>
);

const IngredientsList = () => {
  const navigation = useNavigation();
  const [isAddIngredientVisible, setIsAddIngredientVisible] = useState(false);

  const handleAddIngredient = (ingredient: {name: string, quantity: string, storageType: string}) => {
    // Here you would typically update your app's state or make an API call
    console.log('Adding ingredient:', ingredient);
    // For now, let's just log the new ingredient
    // You might want to update the userIngredients state here
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
          inStock={userIngredient.inStock}
          storageType={ingredientData.storageType}
        />
      );
    });
  };

  const fridgeCount = userIngredients.fridge.length;
  const pantryCount = userIngredients.pantry.length;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color={Color.neutral100} onPress={() => navigation.goBack()} />
        <Text style={styles.title}>My Ingredients</Text>
        <Ionicons name="help-circle-outline" size={24} color={Color.neutral100} onPress={() => navigation.navigate('SupportPage', { source: 'IngredientsList' })} />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Fridge</Text>
          <Text style={styles.itemCount}>{fridgeCount} Items</Text>
        </View>
        {renderIngredients('fridge')}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Pantry</Text>
          <Text style={styles.itemCount}>{pantryCount} Items</Text>
        </View>
        {renderIngredients('pantry')}
      </ScrollView>
      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => setIsAddIngredientVisible(true)}
      >
        <Ionicons name="add-circle" size={60} color={Color.primary} />
      </TouchableOpacity>

      <AddIngredient
        isVisible={isAddIngredientVisible}
        onClose={() => setIsAddIngredientVisible(false)}
        onAdd={handleAddIngredient}
      />
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
    padding: 16,
  },
  title: {
    fontSize: FontSize.textStyleMediumTextBold_size,
    fontWeight: '600',
    color: Color.neutral100,
    fontFamily: FontFamily.textStyleSmallerTextRegular,
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: FontSize.textStyleLargeTextBold_size,
    fontWeight: '600',
    color: Color.neutral100,
    fontFamily: FontFamily.textStyleSmallerTextRegular,
  },
  itemCount: {
    fontSize: FontSize.poppinsLabelBold_size,
    color: Color.colourStylesNeutralColourGray3,
    fontFamily: FontFamily.textStyleSmallerTextRegular,
  },
  ingredientItem: {
    height: 76,
    marginBottom: 12,
    borderRadius: Border.br_xs,
    overflow: 'hidden',
  },
  bg: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.5,
  },
  fridgeItem: {
    backgroundColor: Color.primary,
  },
  pantryItem: {
    backgroundColor: Color.colorOrange,
  },
  label: {
    position: 'absolute',
    top: 28,
    right: 16,
    fontSize: FontSize.poppinsLabelBold_size,
    color: Color.neutral100,
    textAlign: 'right',
    fontFamily: FontFamily.textStyleSmallerTextRegular,
  },
  iconContainer: {
    position: 'absolute',
    top: 12,
    left: 16,
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.white,
    borderRadius: Border.br_xs,
  },
  emoji: {
    fontSize: 30,
  },
  ingredientName: {
    position: 'absolute',
    top: 29,
    left: 84,
    fontSize: FontSize.textStyleNormalTextBold_size,
    fontWeight: "600",
    color: Color.neutral100,
    fontFamily: FontFamily.textStyleSmallerTextRegular,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export default IngredientsList;