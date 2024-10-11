import AsyncStorage from '@react-native-async-storage/async-storage';
import EventBus from './EventBus';
import ingredientsData from '../data/ingredientsData.json';

interface Ingredient {
  id: string;
  name: string;
  defaultUnit: string;
  category: string;
  emoji: string;
  iconName: string;
  storageType: 'fridge' | 'pantry';
}

interface UserIngredient {
  id: string;
  quantity?: number;
  unit?: string;
  inStock?: boolean;
}

interface UserIngredients {
  fridge: UserIngredient[];
  pantry: UserIngredient[];
}

class IngredientManagementService {
  /**
   * IngredientManagementService manages the user's ingredients inventory.
   * This microservice provides CRUD functionality for ingredients,
   * as well as persist this data using AsyncStorage.
   *
   * Features:
   * - Manage user ingredients separately for fridge and pantry
   * - Persist ingredient data across app restarts using AsyncStorage
   * - Publish ingredient-related events via EventBus
   * - Initialize with default ingredients if no user data exists
   * - Singleton pattern ensures a single instance throughout the application
   *
   * Usage:
   * - Access the service using IngredientManagementService.getInstance()
   * - Following ways to use this through EventBus:
   *   - 'ADD_INGREDIENT': Add a new ingredient to the inventory
   *   - 'UPDATE_INGREDIENT': Update an existing ingredient's details
   *   - 'REMOVE_INGREDIENT': Remove an ingredient from the inventory
   *   - 'GET_USER_INGREDIENTS': Retrieve the current inventory of ingredients
   * 
   * The service also publishes the following events:
   * - 'USER_INGREDIENTS_UPDATED': When the inventory is updated
   * - 'INGREDIENT_ADDED': When a new ingredient is added
   * - 'INGREDIENT_REMOVED': When an ingredient is removed
   */

  private static instance: IngredientManagementService;
  private readonly STORAGE_KEY = 'userIngredients';

  // Private constructor to prevent direct instantiation
  private constructor() {
    console.log('IngredientManagementService initialized');
    this.initializeIngredients();
    this.setupEventListeners();
  }

  // Get the singleton instance of IngredientManagementService
  public static getInstance(): IngredientManagementService {
    if (!IngredientManagementService.instance) {
      IngredientManagementService.instance = new IngredientManagementService();
    }
    return IngredientManagementService.instance;
  }

  // Initialize ingredients from storage or set defaults
  private async initializeIngredients() {
    try {
      const storedIngredients = await AsyncStorage.getItem(this.STORAGE_KEY);
      if (!storedIngredients) {
        await this.setUserIngredients({ fridge: [], pantry: [] });
      }
    } catch (error) {
      console.error('Error initializing ingredients:', error);
    }
  }

  // Set up event listeners for ingredient operations
  private setupEventListeners() {
    EventBus.subscribe('ADD_INGREDIENT', this.addIngredient.bind(this));
    EventBus.subscribe('UPDATE_INGREDIENT', this.updateIngredient.bind(this));
    EventBus.subscribe('REMOVE_INGREDIENT', this.removeIngredient.bind(this));
    EventBus.subscribe('GET_USER_INGREDIENTS', this.getUserIngredients.bind(this));
  }

  // Get user ingredients from storage
  private async getUserIngredients(): Promise<UserIngredients> {
    try {
      const ingredients = await AsyncStorage.getItem(this.STORAGE_KEY);
      const parsedIngredients = ingredients ? JSON.parse(ingredients) : { fridge: [], pantry: [] };
      console.log('Retrieved user ingredients:', parsedIngredients);
      EventBus.publish('USER_INGREDIENTS_UPDATED', parsedIngredients);
      return parsedIngredients;
    } catch (error) {
      console.error('Error getting user ingredients:', error);
      return { fridge: [], pantry: [] };
    }
  }

  // Save user ingredients to storage
  private async setUserIngredients(ingredients: UserIngredients): Promise<void> {
    try {
      await AsyncStorage.setItem(this.STORAGE_KEY, JSON.stringify(ingredients));
      EventBus.publish('USER_INGREDIENTS_UPDATED', ingredients);
    } catch (error) {
      console.error('Error setting user ingredients:', error);
    }
  }

  // Update an existing ingredient
  public async updateIngredient(updatedIngredient: UserIngredient): Promise<void> {
    try {
      const userIngredients = await this.getUserIngredients();
      const ingredientData = ingredientsData.find(i => i.id === updatedIngredient.id) as Ingredient;
      
      if (ingredientData) {
        const storageType = ingredientData.storageType;
        const index = userIngredients[storageType].findIndex(i => i.id === updatedIngredient.id);
        
        if (index !== -1) {
          userIngredients[storageType][index] = { ...userIngredients[storageType][index], ...updatedIngredient };
          await this.setUserIngredients(userIngredients);
        } else {
          console.error('Ingredient not found in user ingredients:', updatedIngredient.id);
        }
      } else {
        console.error('Ingredient not found in ingredientsData:', updatedIngredient.id);
      }
    } catch (error) {
      console.error('Error updating ingredient:', error);
    }
  }

  // Add a new ingredient to the inventory
  public async addIngredient(ingredient: UserIngredient): Promise<void> {
    try {
      const userIngredients = await this.getUserIngredients();
      const ingredientData = ingredientsData.find(i => i.id === ingredient.id) as Ingredient;
      
      if (ingredientData) {
        if (ingredientData.storageType === 'fridge') {
          userIngredients.fridge.push(ingredient);
        } else {
          userIngredients.pantry.push(ingredient);
        }
        await this.setUserIngredients(userIngredients);
        EventBus.publish('INGREDIENT_ADDED', ingredient);
      } else {
        console.error('Ingredient not found in ingredientsData:', ingredient.id);
      }
    } catch (error) {
      console.error('Error adding ingredient:', error);
    }
  }
  
  // Remove an ingredient from the inventory
  public async removeIngredient(ingredientId: string): Promise<void> {
    try {
      const userIngredients = await this.getUserIngredients();
      const ingredientData = ingredientsData.find(i => i.id === ingredientId) as Ingredient;
      
      if (ingredientData) {
        const storageType = ingredientData.storageType;
        userIngredients[storageType] = userIngredients[storageType].filter(i => i.id !== ingredientId);
        await this.setUserIngredients(userIngredients);
        EventBus.publish('INGREDIENT_REMOVED', ingredientId);
      } else {
        console.error('Ingredient not found in ingredientsData:', ingredientId);
      }
    } catch (error) {
      console.error('Error removing ingredient:', error);
    }
  }

  // Initialize ingredients from storage or JSON file on first start
  // ** Edit this after a proper backend gets going **
  private async initializeIngredients() {
    try {
      const storedIngredients = await AsyncStorage.getItem(this.STORAGE_KEY);
      console.log('Stored ingredients:', storedIngredients);
      if (!storedIngredients) {
        const defaultIngredients = this.getDefaultIngredients();
        console.log('Setting default ingredients:', defaultIngredients);
        await this.setUserIngredients(defaultIngredients);
      } else {
        const parsedIngredients = JSON.parse(storedIngredients);
        console.log('Publishing stored ingredients:', parsedIngredients);
        EventBus.publish('USER_INGREDIENTS_UPDATED', parsedIngredients);
      }
    } catch (error) {
      console.error('Error initializing ingredients:', error);
    }
  }

  // Create default ingredients list
  private getDefaultIngredients(): UserIngredients {
    const defaultIngredients: UserIngredients = { fridge: [], pantry: [] };
    
    ingredientsData.forEach(ingredient => {
      const userIngredient: UserIngredient = {
        id: ingredient.id,
        quantity: 1,
        unit: ingredient.defaultUnit,
        inStock: true
      };
      
      if (ingredient.storageType === 'fridge') {
        defaultIngredients.fridge.push(userIngredient);
      } else {
        defaultIngredients.pantry.push(userIngredient);
      }
    });

    return defaultIngredients;
  }
}

export default IngredientManagementService.getInstance();