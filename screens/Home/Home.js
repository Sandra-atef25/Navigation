import { Text, View, StyleSheet, Button } from "react-native";
function Homescreen({ route, navigation }) {
  const username = route.params.UserName;
  function onpresshandle() {
    navigation.navigate("Home Details screen");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome {username}</Text>
      <View>
        <Button title="Home Details" onPress={onpresshandle} color="red" />
      </View>
    </View>
  );
}
export default Homescreen;
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
