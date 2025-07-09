// import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import MealsList from "../components/MealList/MealsList";
// import { FavoritesContext } from "../store/context/favorites-context";
import { useSelector } from "react-redux";

import { MEALS } from "../data/dummy-data";

function FavoriteScreen() {
  //   const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealids = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>No Favorites</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
