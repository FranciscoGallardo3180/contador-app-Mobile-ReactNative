import React, { useState } from "react"
import { StyleSheet, Text, TouchableNativeFeedback, View,Platform, TouchableOpacity } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"


interface Pros {
    title: string;
    onPress: () => void;
    position: 'btnL' | 'btnR'

}

const Fab = ({ title, onPress, position = 'btnR' }: Pros) => {

    const ios =()=>{
        return (
            <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={[
                styles.fabLocation,
                (position === 'btnL')
                    ? styles.left
                    : styles.right
            ]}>
                
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            
            </TouchableOpacity>
            
        )
    }

    const android =()=>{
        return (
            <View
            style={[
                styles.fabLocation,
                (position === 'btnL')
                    ? styles.left
                    : styles.right
            ]}>
                <TouchableNativeFeedback
                onPress={onPress}
                background={
                    TouchableNativeFeedback.Ripple('#28425B',false, 30)
                }
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableNativeFeedback>
            </View>
            
        )
    }

    //  const [contador, setContador] = useState(10);
   return (Platform.OS === 'ios')? ios(): android()
        
}

const styles = StyleSheet.create({
    fabLocationR: {
        position: 'absolute',
        bottom: 25,


    },
    right: {
        right: 25
    },
    left: {
        left: 25
    },
    fabLocation: {
        position: 'absolute',
        bottom: 25,
         
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})

export default Fab