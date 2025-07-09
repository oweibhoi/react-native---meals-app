import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "../../components/MealList/MealItem";

function MealsList({ items }) {
  function renderMealItem(itemData) {
    const mealItemProps = {
      id: itemData.id,
      title: itemData.title,
      imageUrl: itemData.imageUrl,
      duration: itemData.duration,
      complexity: itemData.complexity,
      affordability: itemData.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderMealItem(item)}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24180f",
  },
});
