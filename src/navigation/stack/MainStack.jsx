import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../../screens/home/Home";
import QuizScreen from "../../screens/quiz/QuizContainer";
import ResultsScreen from "../../screens/results/ResultsContainer";

const MainStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        <MainStack.Screen name="Home" component={HomeScreen} />
        <MainStack.Screen name="Quiz" component={QuizScreen} />
        <MainStack.Screen name="Results" component={ResultsScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
