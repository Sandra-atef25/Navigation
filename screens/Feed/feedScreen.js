import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { useState } from "react";
function FeedScreen({ navigation }) {
  const [entereddata, setentereddata] = useState("");
  function inputhandle(text) {
    setentereddata(text);
  }
  function onpresshandle() {
    navigation.navigate("Feed Details screen", { Data: entereddata });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>hello to feed screen</Text>
      <View>
        <Button title="Feed Details" onPress={onpresshandle} color="red" />
      </View>
      <View style={styles.incon}>
        <Text style={styles.datauser}>Data:</Text>
        <TextInput
          placeholder="Enter Data"
          style={styles.datain}
          value={entereddata}
          onChangeText={inputhandle}
        />
      </View>
    </View>
  );
}
export default FeedScreen;

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
  incon: {
    flexDirection: "row",
    alignItems: "center",
  },
  datain: {
    padding: 5,
    marginLeft: 5,
    borderWidth: 5,
    borderColor: "lightblue",
    opacity: 0.5,
    fontSize: 20,
    width: "50%",
  },
  datauser: {
    marginRight: 5,
    fontSize: 20,
  },
});
