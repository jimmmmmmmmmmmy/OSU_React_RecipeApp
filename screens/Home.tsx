import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from "expo-image";
import SearchField from "../components/SearchField";
import RecipeRecommends from "../components/RecipeRecommends";
import MyIngredients from "../components/MyIngredients";
import { FontFamily, FontSize, Color } from "../GlobalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  const SupportNav = () => {
    navigation.navigate("SupportPage", { source: 'Home'})
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <Text style={styles.title}>Hello, User</Text>
        <TouchableOpacity onPress={SupportNav}>
          <Image
            style={styles.helpCircleIcon}
            contentFit="cover"
            source={require("../assets/help-circle.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <SearchField />
      </View>
      <View style={styles.recipeRecommendsContainer}>
        <RecipeRecommends />
      </View>
      <View style={styles.ingredientsContainer}>
        <MyIngredients />
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
    paddingTop: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 30,
    lineHeight: 29,
    color: Color.neutral100,
    fontWeight: "600",
    fontFamily: FontFamily.textStyleSmallerTextRegular,
  },
  helpCircleIcon: {
    width: 24,
    height: 24,
    opacity: 0.5,
  },
  searchContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  recipeRecommendsContainer: {
    marginBottom: 5,
  },
  ingredientsContainer: {
    flex: 1, // This allows MyIngredients to take up the remaining space
  },
});

export default Home;