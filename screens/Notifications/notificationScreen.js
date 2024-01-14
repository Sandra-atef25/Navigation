import { Text, View, Button, StyleSheet } from "react-native";
function NotificationsScreen({ navigation }) {
  function onpresshandle() {
    navigation.navigate("Notifications Details screen");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>hello to Notifications screen</Text>
      <View>
        <Button
          title="Notifications Details"
          onPress={onpresshandle}
          color="red"
        />
      </View>
    </View>
  );
}
export default NotificationsScreen;
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
