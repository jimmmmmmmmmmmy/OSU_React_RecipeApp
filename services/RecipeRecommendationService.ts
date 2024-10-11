// RecipeRecommendationService.ts
import EventBus from './EventBus';
import AsyncStorage from '@react-native-async-storage/async-storage';
import recipeData from '../data/recipeData.json';

class RecipeRecommendationService {
  /**
   * RecipeRecommendationService provides recipe recommendations using user's available ingredients
   * Uses EventBus to receive requests and publish results
   * Uses AsyncStorage to retrieve user ingredient data
   *
   * Features:
   * - Generate recipe recommendations sorted by available ingredients
   * - Find recipes that can be made with all available ingredients
   * - Load user ingredients from AsyncStorage
   * - Load recipe data from a JSON file
   * - Sort and filter recipes based on available ingredients
   *
   * Usage:
   * - The service is instantiated as a singleton
   * - Interact with microservice through EventBus subscriptions:
   *   - 'GET_RECIPE_RECOMMENDATIONS': Request sorted recipe recommendations
   *   - 'GET_RECIPES_WITH_AVAILABLE_INGREDIENTS': Request recipes that can be made with available ingredients
   * 
   * The service publishes the following events:
   * - 'RECIPE_RECOMMENDATIONS_READY': When recipe recommendations are ready
   * - 'RECIPES_WITH_AVAILABLE_INGREDIENTS_READY': When the list of recipes with available ingredients is ready
   */

  
  constructor() {
    // Set up event listeners for recipe recommendation requests
    EventBus.subscribe('GET_RECIPE_RECOMMENDATIONS', this.getRecommendations.bind(this));
    EventBus.subscribe('GET_RECIPES_WITH_AVAILABLE_INGREDIENTS', this.getRecipesWithAvailableIngredients.bind(this));
  }

  // Generate and publish recipe recommendations
  async getRecommendations() {
    try {
      const userIngredients = await this.loadUserIngredients();
      const recipes = await this.loadRecipes();
      const sortedRecipes = this.sortRecipesByAvailableIngredients(recipes, userIngredients);
      EventBus.publish('RECIPE_RECOMMENDATIONS_READY', sortedRecipes);
    } catch (error) {
      console.error('Error getting recipe recommendations:', error);
    }
  }

  // Generate and publish recipes that can be made with available ingredients
  async getRecipesWithAvailableIngredients() {
    try {
      const userIngredients = await this.loadUserIngredients();
      const recipes = await this.loadRecipes();
      const availableRecipes = this.filterRecipesByAvailableIngredients(recipes, userIngredients);
      EventBus.publish('RECIPES_WITH_AVAILABLE_INGREDIENTS_READY', availableRecipes);
    } catch (error) {
      console.error('Error getting recipes with available ingredients:', error);
    }
  }

  // Load user ingredients from AsyncStorage
  async loadUserIngredients() {
    try {
      const jsonValue = await AsyncStorage.getItem('userIngredients');
      return jsonValue != null ? JSON.parse(jsonValue) : { fridge: [], pantry: [] };
    } catch (e) {
      console.error('Failed to load user ingredients:', e);
      return { fridge: [], pantry: [] };
    }
  }
  
   // Load recipes from the imported JSON data
  async loadRecipes() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(recipeData);
      }, 0);
    });
  }
  
  // Filter recipes that can be made with all available ingredients
  filterRecipesByAvailableIngredients(recipes, userIngredients) {
    return recipes.filter(recipe => this.hasAllIngredients(recipe, userIngredients));
  }

  // Sort recipes by the number of available ingredients (descending order)
  sortRecipesByAvailableIngredients(recipes, userIngredients) {
    return recipes.sort((a, b) => {
      const aCount = this.countAvailableIngredients(a, userIngredients);
      const bCount = this.countAvailableIngredients(b, userIngredients);
      return bCount - aCount;
    });
  }

  // Check if all ingredients for a recipe are available
  hasAllIngredients(recipe, userIngredients) {
    return recipe.ingredients.every(ingredient =>
      userIngredients.fridge.some(item => item.id === ingredient.id) ||
      userIngredients.pantry.some(item => item.id === ingredient.id && item.inStock)
    );
  }
  
  // Count the number of available ingredients for a recipe
  countAvailableIngredients(recipe, userIngredients) {
    return recipe.ingredients.filter(ingredient =>
      userIngredients.fridge.some(item => item.id === ingredient.id) ||
      userIngredients.pantry.some(item => item.id === ingredient.id && item.inStock)
    ).length;
  }
}

export default new RecipeRecommendationService();