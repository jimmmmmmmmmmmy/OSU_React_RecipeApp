import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontFamily, FontSize, Color } from "../GlobalStyles";

interface SectionHeaderProps {
  title: string;
  onSeeAll: () => void;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, onSeeAll }) => (
  <View style={styles.navigation}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <TouchableOpacity style={styles.seeAllButton} onPress={onSeeAll}>
      <Text style={styles.seeAll}>See all</Text>
      <Image
        style={styles.iconarrowRight}
        resizeMode="contain"
        source={require("../assets/iconarrowright.png")}
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: FontSize.textStyleLargeTextBold_size,
    lineHeight: 28,
    color: Color.neutral100,
    fontWeight: "600",
    fontFamily: FontFamily.textStyleSmallerTextRegular,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAll: {
    fontSize: FontSize.poppinsLabelBold_size,
    lineHeight: 20,
    color: Color.colourStylesNeutralColourGray3,
    fontWeight: "600",
    fontFamily: FontFamily.textStyleSmallerTextRegular,
    marginRight: 4,
  },
  iconarrowRight: {
    width: 20,
    height: 20,
  },
});

export default SectionHeader;