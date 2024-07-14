import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';

const GroceryItem = ({ imageSource, title }) => (
  <View style={styles.groceryItem}>
    <Image
      style={styles.groceryImage}
      source={imageSource}
      resizeMode="cover"
    />
    <Text style={styles.groceryTitle}>{title}</Text>
  </View>
);

const QuickGroceryRun = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Quick grocery run:</Text>
        <TouchableOpacity 
          style={styles.seeAllButton} 
          onPress={() => navigation.navigate('RecipeCatalog', { source: 'QuickGroceryRun' })}
          >
          <Text style={styles.seeAllText}>See all</Text>
          <Image
            style={styles.arrowIcon}
            source={require("../assets/iconarrowright.png")}
          />
        </TouchableOpacity>
      </View>
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.groceryList}
      >
        <GroceryItem 
          imageSource={require("../assets/food-photo.png")} 
          title="Indonesian beef burger"
        />
        <GroceryItem 
          imageSource={require("../assets/food-photo.png")} 
          title="Home made cute pancake"
        />
        <GroceryItem 
          imageSource={require("../assets/food-photo.png")} 
          title="How to make fried crab"
        />
        {/* Add more GroceryItem components as needed */}
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
  title: {
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
    fontWeight: "600",
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    color: Color.colourStylesNeutralColourGray3,
    marginRight: 5,
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
  groceryList: {
    flexDirection: 'row',
  },
  groceryItem: {
    width: 150,
    marginRight: 15,
  },
  groceryImage: {
    width: 150,
    height: 150,
    borderRadius: Border.br_3xs,
    marginBottom: 5,
  },
  groceryTitle: {
    fontSize: FontSize.poppinsLabelBold_size,
    fontWeight: "600",
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    color: Color.neutral100,
  },
});

export default QuickGroceryRun;