import React, { useState } from "react";
import { StyleSheet, View, TextInput, Dimensions } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const SearchField = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.searchField}>
      <View style={styles.iconsearch}>
        <Image
          style={styles.unionIcon}
          contentFit="cover"
          source={require("../assets/union.png")}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Search recipes"
        placeholderTextColor={Color.colorSilver}
        value={searchText}
        onChangeText={setSearchText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchField: {
    width: SCREEN_WIDTH * 0.9,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.neutral10,
    borderRadius: Border.br_3xs,
    paddingHorizontal: Padding.p_base,
    marginTop: 10,
    marginBottom: 10,
  },
  iconsearch: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unionIcon: {
    width: 16,
    height: 16,
  },
  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: FontSize.poppinsLabelBold_size,
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    color: Color.neutral100,
  },
});

export default SearchField;