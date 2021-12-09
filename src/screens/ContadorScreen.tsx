import React, { useState } from "react"
import { Text, TouchableOpacity, View, StyleSheet } from "react-native"
import Fab from "../components/Fab";

const ContadorScreens = () => {

    const [contador, setContador] = useState(10);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contador: {contador} </Text>


            <Fab title="+1"
                onPress={() => setContador(contador + 1)}
                position="btnR"
            />

            <Fab title="-1"
                onPress={() => setContador(contador - 1)}
                position="btnL"
            />




            { /*<TouchableOpacity
                style={styles.fabLocationL}
                onPress={() => setContador(contador - 1)}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>-1</Text>
                </View>
           </TouchableOpacity>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        top: -15
    },

})

export default ContadorScreens