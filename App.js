import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import CategoryScreen from "./screens/CategoryScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealScreen from "./screens/MealScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import ProfileScreen from "./screens/ProfileScreen";
import MessageScreen from "./screens/MessageScreen";
// import FavoritesContextProvider from "./store/context/favorites-context";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        ...styles.tab,
      }}
    >
      <Tab.Screen
        name="Home"
        component={CategoryScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="home" color={color} size={size} />;
          },
          title: "Home",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="person" color={color} size={size} />;
          },
          title: "Profile",
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessageScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="mail" color={color} size={size} />;
          },
          title: "Messages",
        }}
      />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={styles.drawer}
      initialRouteName="MealsCategories"
    >
      <Drawer.Screen
        name="MealsCategories"
        component={CategoryScreen}
        options={{
          title: "Home",
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="home" color={color} size={size} />;
          },
          headerShown: true,
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          title: "Favorites",
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="star" color={color} size={size} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={styles.stack}>
            <Stack.Screen
              name="Main"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen name="MealDetails" component={MealScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24180f",
  },
  stack: {
    headerStyle: { backgroundColor: "#351401" },
    headerTintColor: "white",
    headerTitleStyle: { fontWeight: "bold" },
    headerTitleAlign: "center",
    contentStyle: { backgroundColor: "#24180f" },
  },
  drawer: {
    headerStyle: { backgroundColor: "#351401" },
    headerTintColor: "white",
    headerTitleStyle: { fontWeight: "bold" },
    headerTitleAlign: "center",
    sceneContainerStyle: { backgroundColor: "#24180f" },
    drawerActiveBackgroundColor: "#24180f",
    drawerActiveTintColor: "white",
  },
  tab: {
    tabBarActiveTintColor: "#24180f",
    sceneStyle: { backgroundColor: "#24180f" },
  },
});
