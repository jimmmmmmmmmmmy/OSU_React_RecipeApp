import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from "expo-image";
import { useNavigation } from '@react-navigation/native';
import SearchField from "../components/SearchField";
import IngredientsOnHand from "../components/IngredientsOnHand";
import QuickGroceryRun from "../components/QuickGroceryRun";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const RecipeRecommendations = () => {
  const navigation = useNavigation();

  const goToSupportPage = () => {
    navigation.navigate("SupportPage", { source: "RecipeRecommendations"});
  };

  const goToRecipeCatalog = (source) => {
    navigation.navigate("RecipeCatalog", { source });
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.backIcon}
            contentFit="cover"
            source={require("../assets/iconarrowright1.png")}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Recipe Recommends</Text>
        <TouchableOpacity onPress={goToSupportPage}>
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
      <View style={styles.contentContainer}>
        <IngredientsOnHand onSeeAll={() => goToRecipeCatalog('ingredients')} />
        <QuickGroceryRun onSeeAll={() => goToRecipeCatalog('grocery')} />
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
  backIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: FontSize.poppinsH4Bold_size,
    fontWeight: "600",
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    color: Color.neutral100,
  },
  helpCircleIcon: {
    width: 24,
    height: 24,
    opacity: 0.5,
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  contentContainer: {
    flex: 1,
  },
});

export default RecipeRecommendations;