import { View, Text, StyleSheet, Button } from "react-native";
function SettingScreen({ navigation }) {
  function onpresshandle() {
    navigation.navigate("Settings Details screen");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>hello to Settings screen</Text>
      <View>
        <Button title="Settings Details" onPress={onpresshandle} color="red" />
      </View>
    </View>
  );
}
export default SettingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  text: {
    color: "red",
    fontSize: 50,
    fontWeight: "bold",
  },
});
