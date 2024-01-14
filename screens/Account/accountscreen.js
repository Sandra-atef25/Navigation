import { View, Text, StyleSheet, Button } from "react-native";
function AccountScreen({ navigation }) {
  function onpresshandle() {
    navigation.navigate("Account Details screen");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>hello to Account screen</Text>
      <View>
        <Button title="Account Details" onPress={onpresshandle} color="red" />
      </View>
    </View>
  );
}
export default AccountScreen;
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
