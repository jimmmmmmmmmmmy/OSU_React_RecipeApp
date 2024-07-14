import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AddIngredient from "./screens/AddIngredient";
import RemovingIngredient from "./screens/RemovingIngredient";
import MyIngredients from "./screens/MyIngredients";
import RecipeRecommendations from "./screens/RecipeRecommendations";
import Welcome from "./screens/Welcome";
import SupportPage from "./screens/SupportPage";
import Home from "./screens/Home";
import RecipeDetails from "./screens/RecipeDetails";
import RecipeCatalog from "./screens/RecipeCatalog";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "SFProDisplay-Medium": require("./assets/fonts/SFProDisplay-Medium.otf"),
    "SFProText-Semibold": require("./assets/fonts/SFProText-Semibold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Welcome" component={Welcome} />
              <Stack.Screen name="RemovingIngredient" component={RemovingIngredient} />
              <Stack.Screen name="MyIngredients" component={MyIngredients} />
              <Stack.Screen name="RecipeRecommendations" component={RecipeRecommendations} />
              <Stack.Screen name="AddIngredient" component={AddIngredient} />
              <Stack.Screen name="SupportPage" component={SupportPage} />
              <Stack.Screen name="Home" 
                component={Home} 
                options={{
                gestureEnabled: false, }}/>
              <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
              <Stack.Screen name="RecipeCatalog" component={RecipeCatalog} />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;