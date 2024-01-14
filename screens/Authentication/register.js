import { TextInput, View, Button, Text, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
function RegisterScreen({ navigation }) {
  //const navigation = useNavigation();
  const [enteredname, setenteredname] = useState("");
  function resetinput() {
    setenteredname("");
  }
  function PressHandler() {
    if (enteredname.trim() === "") {
      Alert.alert("Invalid Name ", "Name must not be empty", [
        { text: "Okay", style: "destructive" },
      ]);
      return;
    }
    console.log("Pressed register");
    // navigation.navigate("Bottom Tab",{screen:"Welcome",params:{UserName:enteredname}});
    navigation.navigate("Bottom Tab", {
      screen: "Home Screen",
      initial: false,
      params: {
        screen: "Initial Home Screen",
        initial: false,
        params: { UserName: enteredname },
      },
    });
  }
  function pressgobacklogin() {
    console.log("pressed goback login");
    navigation.navigate("Login Screen");
  }
  function inputHandler(entername) {
    setenteredname(entername);
  }
  return (
    <View style={styles.Container}>
      <View style={styles.innercon}>
        <Text style={styles.textuser}>Name:</Text>
        <TextInput
          placeholder="UserName"
          style={styles.texti}
          value={enteredname}
          onChangeText={inputHandler}
        />
      </View>
      <View style={styles.innercon}>
        <View style={styles.buttonCon}>
          <Button title="Register" onPress={PressHandler} color={"blue"} />
        </View>
        <View style={styles.buttonCon}>
          <Button title="Back" onPress={pressgobacklogin} color={"blue"} />
        </View>
      </View>
    </View>
  );
}
export default RegisterScreen;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: "50%",
    alignItems: "center",
  },
  innercon: {
    flexDirection: "row",
    alignItems: "center",
  },
  texti: {
    padding: 5,
    marginLeft: 5,
    borderWidth: 5,
    borderColor: "lightblue",
    opacity: 0.5,
    fontSize: 20,
    width: "50%",
  },
  textuser: {
    marginRight: 5,
    fontSize: 20,
  },
  buttonCon: {
    flex: 1,
    padding: 16,
  },
});
