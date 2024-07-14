import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const IngredientItem = ({ label, name, icon }) => (
  <View style={styles.ingredientItem}>
    <View style={styles.bg} />
    <Text style={styles.label}>{label}</Text>
    <View style={styles.iconNoodles}>
      <View style={styles.bg1} />
      {icon && <Text style={styles.text}>{icon}</Text>}
    </View>
    <Text style={styles.ingredientName}>{name}</Text>
  </View>
);

const MyIngredients = () => {
  const ingredients = [
    { label: "2 lbs", name: "Smoked Salmon" },
    { label: "200g", name: "Carrots" },
    { label: "200g", name: "Udon Noodles" },
    { label: "200g", name: "Red sushi" },
    { label: "200g", name: "Food Ingredient"},
    { label: "200g", name: "Food Ingredient"},
    { label: "200g", name: "Food Ingredient"},
    { label: "200g", name: "Food Ingredient"},
    { label: "200g", name: "Food Ingredient"},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Ingredients:</Text>
        <View style={styles.servings}>
          <Text style={styles.itemCount}>{ingredients.length} items</Text>
        </View>
      </View>
      <View style={styles.listContainer}>
        <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}
        >
          {ingredients.map((ingredient, index) => (
            <IngredientItem key={index} {...ingredient} />
          ))}
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
  bg: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Color.colourStylesNeutralColourGray3,
    borderRadius: Border.br_3xs,
  },
  label: {
    position: 'absolute',
    top: 28,
    right: 16,
    fontSize: FontSize.poppinsLabelBold_size,
    lineHeight: 20,
    color: Color.neutral10,
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
    color: Color.white,
    textAlign: 'center',
    fontFamily: FontFamily.textStyleSmallerTextRegular,
  },
  ingredientName: {
    position: 'absolute',
    top: 29,
    left: 84,
    fontSize: FontSize.textStyleNormalTextBold_size,
    lineHeight: 22,
    color: Color.white,
    fontWeight: "600",
    fontFamily: FontFamily.textStyleSmallerTextRegular,
  },
});

export default MyIngredients;