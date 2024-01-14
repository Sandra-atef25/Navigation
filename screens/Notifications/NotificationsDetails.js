import { Button, View } from "react-native";
export default function NotificationsDetails({ navigation }) {
  function pressgoback() {
    navigation.goBack();
  }
  function pressnext() {
    navigation.navigate("Account Screen", { screen: "Account Details screen" });
  }
  return (
    <View>
      <View>
        <Button title="Back" onPress={pressgoback} />
      </View>
      <View>
        <Button title="Account Details" onPress={pressnext} />
      </View>
    </View>
  );
}
