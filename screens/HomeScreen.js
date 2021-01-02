import React,{useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';


const HomeScreen = () => {

    const [drink,setDrink] = useState(0);
    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <Text>header</Text>
            </View>
            <View style={styles.drinkLogger} >
                <Text>drink = {drink}</Text>
            </View>
            <View style={styles.adder} >
                <Text>press!</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'flex-start',
        alignItems:'flex-start',
        backgroundColor:'#FFFFFF',
        flexDirection:'column',
    },
    header : {
        flex:1,
        backgroundColor:'#FFFFFF',

    },
    drinkLogger : {
        flex:4
    },
    adder:{
        flex:4
    },
})
export default HomeScreen;