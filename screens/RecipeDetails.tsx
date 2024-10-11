import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import images from '../data/images';
import ingredientsData from '../data/ingredientsData.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EventBus from '../services/EventBus';
import '../services/CookingTimerService'; // This will instantiate the service

// Type definitions
type Ingredient = {
  id: string;
  amount: number;
  unit: string;
};

type Recipe = {
  id: string;
  title: string;
  creator: string;
  time: string;
  category?: string[];
  likes?: number;
  description?: string;
  ingredients: Ingredient[];
  instructions: string[];
  imageSource?: string;
};

type RootStackParamList = {
  RecipeDetails: { recipe: Recipe };
};

type RecipeDetailsRouteProp = RouteProp<RootStackParamList, 'RecipeDetails'>;

type Props = {
  route: RecipeDetailsRouteProp;
};


const RecipeDetails: React.FC<Props> = ({ route }) => {
  const { recipe } = route.params;
  const navigation = useNavigation();
  const [userIngredients, setUserIngredients] = useState({ fridge: [], pantry: [] });
  const [timer, setTimer] = useState<{ id: string; remainingTime: number; isRunning: boolean } | null>(null);

  useEffect(() => {
    loadUserIngredients();
    EventBus.subscribe('TIMER_DATA', handleTimerData);
    EventBus.subscribe('TIMER_UPDATED', handleTimerUpdated);
    EventBus.subscribe('TIMER_FINISHED', handleTimerFinished);
    EventBus.subscribe('TIMER_STARTED', handleTimerStarted);
    EventBus.publish('GET_TIMER', { recipeId: recipe.id });

    return () => {
      EventBus.unsubscribe('TIMER_DATA', handleTimerData);
      EventBus.unsubscribe('TIMER_UPDATED', handleTimerUpdated);
      EventBus.unsubscribe('TIMER_FINISHED', handleTimerFinished);
      EventBus.unsubscribe('TIMER_STARTED', handleTimerStarted);
    };
  }, [recipe.id]);

  const loadUserIngredients = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('userIngredients');
      if (jsonValue != null) {
        setUserIngredients(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.error('Failed to load user ingredients:', e);
    }
  };

  const handleTimerData = (timerData: { id: string; remainingTime: number; isRunning: boolean } | null) => {
    console.log('Timer data received:', timerData);
    if (timerData && typeof timerData.remainingTime === 'undefined') {
      console.warn('Timer data is missing remainingTime property');
      return;
    }
    setTimer(timerData);
  };

  const handleTimerUpdated = (updatedTimer: { id: string; recipeId: string; remainingTime: number; isRunning: boolean }) => {
    console.log('Timer updated:', updatedTimer);
    if (updatedTimer.recipeId === recipe.id) {
      if (typeof updatedTimer.remainingTime === 'undefined') {
        console.warn('Updated timer is missing remainingTime property');
        return;
      }
      setTimer(prevTimer => ({
        ...prevTimer,
        ...updatedTimer,
      }));
    }
  };

  const handleTimerStarted = (startedTimer: { id: string; recipeId: string; remainingTime: number; isRunning: boolean }) => {
    console.log('Timer started:', startedTimer);
    if (startedTimer.recipeId === recipe.id) {
      setTimer(startedTimer);
    }
  };

  const handleTimerFinished = (timerId: string) => {
    if (timer && timer.id === timerId) {
      setTimer(null);
      // You can add an alert or notification here to inform the user that the timer is finished
    }
  };

  const startTimer = () => {
    console.log('Starting timer for recipe:', recipe.id);
    const duration = parseInt(recipe.time.split(' ')[0], 10) * 60; // Convert minutes to seconds
    EventBus.publish('START_TIMER', { recipeId: recipe.id, duration: duration });
  };

  const pauseTimer = () => {
    if (timer) {
      EventBus.publish('PAUSE_TIMER', { timerId: timer.id });
    }
  };

  const resumeTimer = () => {
    if (timer) {
      EventBus.publish('RESUME_TIMER', { timerId: timer.id });
    }
  };

  const stopTimer = () => {
    if (timer) {
      EventBus.publish('STOP_TIMER', { timerId: timer.id });
    }
  };

  const getImageSource = (imagePath: string) => {
    const imageName = imagePath.split('/').pop()?.split('.')[0];
    return imageName ? (images as Record<string, any>)[imageName] : null;
  };

  const getIngredientName = (id: string) => {
    const ingredient = ingredientsData.find(i => i.id === id);
    return ingredient ? ingredient.name : id;
  };

  const isIngredientAvailable = (ingredientId: string): boolean => {
    return userIngredients.fridge.some((item: { id: string }) => item.id === ingredientId) ||
           userIngredients.pantry.some((item: { id: string; inStock: boolean }) => item.id === ingredientId && item.inStock);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
      >
        <View style={styles.imageContainer}>
          <Image
            source={getImageSource(recipe.imageSource || '')}
            style={styles.image}
          />
          <LinearGradient
            style={styles.gradient}
            colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]}
          />
          <View style={styles.headerButtons}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerButton}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("SupportPage", { source: 'RecipeDetails'})} style={styles.headerButton}>
              <Ionicons name="help-circle-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>{recipe.title}</Text>

          <View style={styles.timerContainer}>
            {timer ? (
              <>
                <Text style={styles.timerText}>
                  {formatTime(timer.remainingTime)}
                </Text>
                <Text style={styles.timerStatus}>
                  {timer.isRunning ? 'Running' : 'Paused'}
                </Text>
                {timer.isRunning ? (
                  <TouchableOpacity style={styles.timerButton} onPress={pauseTimer}>
                    <Text style={styles.timerButtonText}>Pause</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.timerButton} onPress={resumeTimer}>
                    <Text style={styles.timerButtonText}>Resume</Text>
                  </TouchableOpacity>
                )}
                <TouchableOpacity style={styles.timerButton} onPress={stopTimer}>
                  <Text style={styles.timerButtonText}>Stop</Text>
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity style={styles.timerButton} onPress={startTimer}>
                <Text style={styles.timerButtonText}>Start Timer</Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
              <Ionicons name="time-outline" size={20} color={Color.e5481} />
              <Text style={styles.infoText}>{recipe.time}</Text>
            </View>
            <View style={styles.infoItem}>
              <Ionicons name="restaurant-outline" size={20} color={Color.e5481} />
              <Text style={styles.infoText}>{recipe.category ? recipe.category.join(', ') : ''}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{recipe.description}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ingredients</Text>
            {recipe.ingredients.map((ingredient, index) => (
              <View key={index} style={styles.listItem}>
                <Ionicons 
                  name="checkmark-circle-outline" 
                  size={20} 
                  color={isIngredientAvailable(ingredient.id) ? Color.lightGreen : Color.e5481} 
                />
                <Text style={styles.listItemText}>
                  {`${" "}${ingredient.amount} ${ingredient.unit} ${getIngredientName(ingredient.id)}`}
                </Text>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Instructions</Text>
            {recipe.instructions.map((instruction, index) => (
              <View key={index} style={styles.listItem}>
                <Text style={styles.listItemNumber}>{index + 1}.</Text>
                <Text style={styles.listItemText}>{instruction}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  imageContainer: {
    height: 300,
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  headerButtons: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerButton: {
    padding: 10,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Color.neutral100,
    fontFamily: FontFamily.h2,
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 5,
    fontSize: FontSize.p2_size,
    fontFamily: FontFamily.h2,
    color: Color.mainText,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: FontSize.h2_size,
    fontWeight: '700',
    marginBottom: 10,
    color: Color.e5481,
    fontFamily: FontFamily.h2,
  },
  availableIngredient: {
    color: Color.lightGreen,
  },
  description: {
    fontSize: FontSize.p2_size,
    lineHeight: 25,
    color: Color.mainText,
    fontFamily: FontFamily.h2,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  listItemNumber: {
    fontSize: FontSize.p2_size,
    fontWeight: 'bold',
    color: Color.e5481,
    marginRight: 10,
    width: 25,
  },
  listItemText: {
    fontSize: FontSize.p2_size,
    lineHeight: 20,
    color: Color.mainText,
    fontFamily: FontFamily.h2,
    flex: 1,
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  timerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  timerStatus: {
    fontSize: 18,
    marginRight: 10,
  },
  timerButton: {
    backgroundColor: Color.e5481,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  timerButtonText: {
    color: Color.white,
    fontWeight: 'bold',
  },
});

export default RecipeDetails;