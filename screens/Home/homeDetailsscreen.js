import { Button,View } from "react-native";
function HomeDetails({navigation}){
    function pressgoback(){
        navigation.goBack();
    }
    return (
        <View>
            <Button title="Back" onPress={pressgoback}/>
        </View>
    );
}
export default HomeDetails;