import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const HomeScreen = () => {

    const [drink, setDrink] = useState(0);
    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <Text style={styles.headerText} >WaterApp</Text>
            </View>
            <View style={styles.drinkLogger} >
                <Text style={styles.drinkLoggerText} >{drink}</Text>
            </View>
            <View style={styles.adder} >
                <Text>press!</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
    },
    header: {
        flex: 1,
        backgroundColor: '#ECEBE9',
        alignItems: 'center',
        justifyContent: "center"
    },
    headerText: {
        color: "#006EE6",
        fontSize:25,
    },
    drinkLogger: {
        flex: 4,
        backgroundColor: '#F6F5F4',
        justifyContent: 'center',
        alignItems: 'center'
    },
    drinkLoggerText: {
        fontSize: 150,
        color: '#006EE6',
    },
    adder: {
        flex: 4,
        backgroundColor: '#F6F5F4',

    },
})
export default HomeScreen;