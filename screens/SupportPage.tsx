import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { useNavigation, useRoute, ParamListBase } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import SearchField from "../components/SearchField";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const SupportItem = ({ title, description }) => (
  <View style={styles.supportItem}>
    <View style={styles.iconContainer}>
      <Ionicons name="document-text-outline" size={24} color="#888" />
    </View>
    <View style={styles.itemContent}>
      <Text style={styles.itemTitle}>{title}</Text>
      <Text style={styles.itemDescription}>{description}</Text>
    </View>
    <Ionicons name="chevron-forward-outline" size={24} color="#888" />
  </View>
);

const SupportPage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const route = useRoute();
  const { source } = route.params as { source?: string };

  const getSourceText = () => {
    switch (source) {
      case 'RecipeRecommendations':
        return "Help on Recipe Recommendation";
      case 'Home':
        return "Home Help";
        case 'RecipeCatalog':
        return "Recipe Catalog Help";
      default:
        return "Test";
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Support Page</Text>
        <View style={styles.placeholder} />
      </View>
      <View style={styles.searchContainer}>
          <SearchField />
        </View>

      {getSourceText() && (
        <Text style={styles.sourceText}>{getSourceText()}</Text>
      )}

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>How To</Text>
        <SupportItem
          title="How to Add Ingredients"
          description="blah blah blah"
        />
        <SupportItem
          title="How to Remove Ingredients"
          description="blah blah blah"
        />
        <SupportItem
          title="How to Find Recipes"
          description="blah blah blah"
        />

        <Text style={styles.sectionTitle}>Contact</Text>
        <SupportItem
          title="App Developer Name"
          description="Email Details"
        />

        <Text style={styles.sectionTitle}>Terms & Condition</Text>
        <SupportItem
          title="Terms and Condition"
          description="blah blah blah"
        />
      </ScrollView>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  backButton: {
    width: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  placeholder: {
    width: 24,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  supportItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  iconContainer: {
    marginRight: 15,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  itemDescription: {
    fontSize: 14,
    color: '#888',
  },
  logoutButton: {
    backgroundColor: '#d3d3d3',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  searchContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  sourceText: {
    fontSize: FontSize.textStyleLargeTextBold_size,
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    fontWeight: "600",
    color: Color.neutral100,
    textAlign: 'left',
    paddingHorizontal: 20,
    marginBottom: 0,
  },
});

export default SupportPage;