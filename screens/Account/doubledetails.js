import { Button, View } from "react-native";
export default function AccountDetailsDetails({ navigation }) {
  function pressgoback() {
    navigation.navigate("Account Details screen");
  }

  return (
    <View>
      <View>
        <Button title="Back" onPress={pressgoback} />
      </View>
    </View>
  );
}
