import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import ingredientsData from '../data/ingredientsData.json';
import AddIngredient from '../components/AddIngredient';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import EventBus from '../services/EventBus';
import IngredientManagementService from '../services/IngredientManagementService';

const handleDeleteIngredient = (id, storageType) => {
  Alert.alert(
    "Remove Ingredient",
    "Are you sure you want to remove this ingredient?",
    [
      { text: "Cancel", style: "cancel" },
      { 
        text: "Remove", 
        style: "destructive",
        onPress: () => {
          EventBus.publish('REMOVE_INGREDIENT', id);
        }
      }
    ]
  );
};

const IngredientItem = ({ id, name, quantity, unit, emoji, inStock, storageType }) => {
  const translateX = useSharedValue(0);

  const rStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const renderRightActions = (progress, dragX) => {
    return (
      <TouchableOpacity 
        style={styles.deleteButton} 
        onPress={() => handleDeleteIngredient(id, storageType)}
      >
        <Ionicons name="trash-outline" size={24} color="white" />
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable 
      renderRightActions={renderRightActions}
      overshootRight={false}
    >
      <Animated.View style={[styles.ingredientItem, rStyle]}>
        <Text style={styles.label}>
          {quantity ? `${quantity} ${unit}` : (inStock ? 'In Stock' : 'Out of Stock')}
        </Text>
        <View style={styles.iconContainer}>
          <Text style={styles.emoji}>{emoji}</Text>
        </View>
        <Text style={styles.ingredientName}>{name}</Text>
      </Animated.View>
    </Swipeable>
  );
};

const IngredientsList = () => {
  const navigation = useNavigation();
  const [isAddIngredientVisible, setIsAddIngredientVisible] = useState(false);
  const [userIngredients, setUserIngredients] = useState({ fridge: [], pantry: [] });

  useEffect(() => {
    const handleIngredientsUpdate = (ingredients) => {
      console.log('Ingredients updated:', ingredients);
      setUserIngredients(ingredients);
    };
  
    const handleIngredientAdded = () => {
      console.log('Ingredient added, refreshing list');
      EventBus.publish('GET_USER_INGREDIENTS', {});
    };
  
    const handleIngredientRemoved = () => {
      console.log('Ingredient removed, refreshing list');
      EventBus.publish('GET_USER_INGREDIENTS', {});
    };
  
    EventBus.subscribe('USER_INGREDIENTS_UPDATED', handleIngredientsUpdate);
    EventBus.subscribe('INGREDIENT_ADDED', handleIngredientAdded);
    EventBus.subscribe('INGREDIENT_REMOVED', handleIngredientRemoved);
    EventBus.publish('GET_USER_INGREDIENTS', {});
  
    return () => {
      EventBus.unsubscribe('USER_INGREDIENTS_UPDATED', handleIngredientsUpdate);
      EventBus.unsubscribe('INGREDIENT_ADDED', handleIngredientAdded);
      EventBus.unsubscribe('INGREDIENT_REMOVED', handleIngredientRemoved);
    };
  }, []);



  const renderIngredients = (storageType) => {
    return userIngredients[storageType].map(userIngredient => {
      const ingredientData = ingredientsData.find(i => i.id === userIngredient.id);
      if (!ingredientData) return null;
      return (
        <IngredientItem
          key={userIngredient.id}
          id={userIngredient.id}
          name={ingredientData.name}
          quantity={userIngredient.quantity}
          unit={userIngredient.unit || ingredientData.defaultUnit}
          emoji={ingredientData.emoji}
          inStock={userIngredient.inStock !== undefined ? userIngredient.inStock : true}
          storageType={ingredientData.storageType}
        />
      );
    });
  };

  const fridgeCount = userIngredients.fridge.length;
  const pantryCount = userIngredients.pantry.length;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
          <Ionicons name="add-circle" size={100} color={Color.primary} />
        </TouchableOpacity>

        <AddIngredient
          isVisible={isAddIngredientVisible}
          onClose={() => setIsAddIngredientVisible(false)}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
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
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
  },
});

export default IngredientsList;