import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Modal, 
  TextInput, 
  TouchableOpacity,
  FlatList,
  Animated
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import ingredientsData from '../data/ingredientsData.json';

type AddIngredientProps = {
  isVisible: boolean;
  onClose: () => void;
  onAdd: (ingredient: {id: string, name: string, quantity: string, storageType: string}) => void;
};

const AddIngredient: React.FC<AddIngredientProps> = ({ isVisible, onClose, onAdd }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [quantity, setQuantity] = useState('');
  const [filteredIngredients, setFilteredIngredients] = useState(ingredientsData);
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [slideAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (isVisible) {
      setSearchTerm('');
      setQuantity('');
      setSelectedIngredient(null);
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = ingredientsData.filter(ingredient => 
        ingredient.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredIngredients(filtered);
    } else {
      setFilteredIngredients([]);
    }
  }, [searchTerm]);

  const handleAdd = () => {
    if (selectedIngredient) {
      onAdd({
        id: selectedIngredient.id,
        name: selectedIngredient.name,
        quantity,
        storageType: selectedIngredient.storageType
      });
      onClose();
    }
  };

  const renderIngredientItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.ingredientItem} 
      onPress={() => {
        setSelectedIngredient(item);
        setSearchTerm(item.name);
        setFilteredIngredients([]);
      }}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <Animated.View 
          style={[
            styles.modalView,
            {
              transform: [
                {
                  translateY: slideAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [300, 0]
                  })
                }
              ]
            }
          ]}
        >
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Ionicons name="close" size={24} color={Color.neutral100} />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Add Ingredient</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Search ingredient"
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
          
          {filteredIngredients.length > 0 && (
            <FlatList
              data={filteredIngredients}
              renderItem={renderIngredientItem}
              keyExtractor={item => item.id}
              style={styles.ingredientList}
            />
          )}
          
          {selectedIngredient && (
            <TextInput
              style={styles.input}
              placeholder={`Enter quantity (${selectedIngredient.defaultUnit})`}
              value={quantity}
              onChangeText={setQuantity}
              keyboardType="numeric"
            />
          )}

          <TouchableOpacity 
            style={[styles.addButton, !selectedIngredient && styles.disabledButton]} 
            onPress={handleAdd}
            disabled={!selectedIngredient}
          >
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: FontSize.textStyleMediumTextBold_size,
    fontWeight: 'bold',
    fontFamily: FontFamily.textStyleSmallerTextRegular,
  },
  input: {
    height: 40,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: Color.colourStylesNeutralColourGray3,
  },
  ingredientList: {
    maxHeight: 150,
  },
  ingredientItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Color.colourStylesNeutralColourGray3,
  },
  addButton: {
    backgroundColor: Color.primary,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default AddIngredient;