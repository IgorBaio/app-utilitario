import React, { memo, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { navigationRef } from "./NavigationService";
import Menu from "../pages/Menu";
import CurrencyConversor from "../pages/CurrencyConversor";
import SecondDegreeEquation from "../pages/SecondDegreeEquation";
import Timer from "../pages/Timer";

const Stack = createStackNavigator();

const Main = memo(() => {
  const NavigatorDefaultConfig = {
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerShown: false,
  };

 
  const MainStack = () => (
    <Stack.Navigator
      initialRouteName={"Menu"}
      screenOptions={{ ...NavigatorDefaultConfig, headerShown: false,headerMode: "screen",  }}
    >
      <Stack.Screen
        name={"Menu"}
        component={Menu}
        options={{ headerShown: false, headerMode: "screen" }}
      />
      <Stack.Screen
        name={"CurrencyConversor"}
        component={CurrencyConversor}
        options={{ headerShown: false, headerMode: "screen" }}
      />
      <Stack.Screen
        name={"SecondDegreeEquation"}
        component={SecondDegreeEquation}
        options={{ headerShown: false, headerMode: "screen" }}
      />
      <Stack.Screen
        name={"Timer"}
        component={Timer}
        options={{ headerShown: false, headerMode: "screen" }}
      />
      
    </Stack.Navigator>
  );

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={NavigatorDefaultConfig}
        initialRouteName={"MainStack"}
      >
        <Stack.Screen
          name="MainStack"
          component={MainStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default Main;
