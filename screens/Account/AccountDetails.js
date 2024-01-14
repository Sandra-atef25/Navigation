import { Button, View } from "react-native";
function AccountDetails({ navigation }) {
  function pressgoback() {
    navigation.goBack();
  }
  function pressnext() {
    navigation.navigate("Account Details Details screen");
  }
  return (
    <View>
      <View>
        <Button title="Back" onPress={pressgoback} />
      </View>
      <View>
        <Button title="Account Details Details" onPress={pressnext} />
      </View>
    </View>
  );
}
export default AccountDetails;
