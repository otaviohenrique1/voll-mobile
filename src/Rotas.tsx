import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './Login';
import Cadastro from './Cadastro';
import Tabs from './Tabs';

const Tab = createNativeStackNavigator();

export default function Rotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Cadastro" component={Cadastro} />
        <Tab.Screen name="Tabs" component={Tabs} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}