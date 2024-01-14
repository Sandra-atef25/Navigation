import { Button, View, Text } from "react-native";
function SettingDetails({ navigation }) {
  function presslogout() {
    navigation.navigate("Login Screen");
  }
  function pressgoback() {
    navigation.goBack();
  }
  return (
    <View>
      <Button title="Back" onPress={pressgoback} />
      <Button title="Log Out" onPress={presslogout} />
    </View>
  );
}
export default SettingDetails;
