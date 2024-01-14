import { Button,View,Text } from "react-native";
function FeedDetails({navigation,route}){
    const data = route.params.Data;
    function pressgoback(){
        navigation.goBack();
    }
    return (
        <View>
            <Text>
                The entered Data is {data}
            </Text>
            <Button title="Back" onPress={pressgoback}/>
        </View>
    );
}
export default FeedDetails;