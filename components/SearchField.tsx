import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const SearchField = () => {
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation();

  const handleSearch = () => {
    if (searchText.trim()) {
      navigation.navigate('RecipeCatalog', { searchQuery: searchText.trim() });
    }
  };

  return (
    <View style={styles.searchField}>
      <TextInput
        style={styles.input}
        placeholder="Search recipes"
        placeholderTextColor={Color.colorSilver}
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch}
      />
      <TouchableOpacity onPress={handleSearch}>
        <Ionicons name="search" size={24} color={Color.colorSilver} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchField: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.neutral10,
    borderRadius: Border.br_3xs,
    paddingHorizontal: Padding.p_base,
    width: '90%',
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: FontSize.poppinsLabelBold_size,
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    color: Color.neutral100,
  },
});

export default SearchField;