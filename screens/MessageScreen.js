import { View, Text, StyleSheet } from "react-native";

function MessageScreen() {
  return (
    <View>
      <Text style={styles.text}>Messages</Text>
    </View>
  );
}

export default MessageScreen;

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
