import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Principal from "./Principal";
import Consultas from "./Consultas";
import Explorar from "./Explorar";
import Perfil from "./Perfil";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: "#002851",
      },
      tabBarActiveTintColor: "#339cff",
      tabBarInactiveTintColor: "#ffffff"
    }}>
      <Tab.Screen
        name="Principal"
        component={Principal}
        options={{ tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size}/>
        ) }}
      />
      <Tab.Screen
        name="Consultas"
        component={Consultas}
        options={{ tabBarIcon: ({ color, size }) => (
          <Ionicons name="calendar" color={color} size={size}/>
        ) }}
      />
      <Tab.Screen
        name="Explorar"
        component={Explorar}
        options={{ tabBarIcon: ({ color, size }) => (
          <Ionicons name="search" color={color} size={size}/>
        ) }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{ tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" color={color} size={size}/>
        ) }}
      />
    </Tab.Navigator>
  );
}