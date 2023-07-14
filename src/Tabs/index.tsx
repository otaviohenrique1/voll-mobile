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
    }}>
      <Tab.Screen
        name="Principal"
        component={Principal}
        options={{ tabBarIcon: () => (
          <Ionicons name="home" color="blue" size={24}/>
        ) }}
      />
      <Tab.Screen
        name="Consultas"
        component={Consultas}
        options={{ tabBarIcon: () => (
          <Ionicons name="calendar" color="blue" size={24}/>
        ) }}
      />
      <Tab.Screen
        name="Explorar"
        component={Explorar}
        options={{ tabBarIcon: () => (
          <Ionicons name="search" color="blue" size={24}/>
        ) }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{ tabBarIcon: () => (
          <Ionicons name="person" color="blue" size={24}/>
        ) }}
      />
    </Tab.Navigator>
  );
}