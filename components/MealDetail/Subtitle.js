import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    paddingVertical: 20,
    paddingBottom: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
    marginHorizontal: 12,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
