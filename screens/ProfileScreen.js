import { View, Text, StyleSheet } from "react-native";

function ProfileScreen() {
  return (
    <View>
      <Text style={styles.text}>My Profile</Text>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
