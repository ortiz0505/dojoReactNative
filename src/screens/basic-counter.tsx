import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FabButton } from '../components/FabButton';
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    taxtItem: {
        fontSize: 50,
        textAlign: 'center'
    }
});
 
 
export const BasicCounterScreen = () => {
 
    const [counter, setCounter] = useState(0);
 
    return (
        <View style={styles.container} >
            <Text style={styles.taxtItem} >
                Contador: {counter}
            </Text>
 
            <FabButton
                title="-1"
                position="left"
                onClick={() => setCounter(counter - 1)}
            />
 
            <FabButton
                title="+1"
                position="right"
                onClick={() => setCounter(counter + 1)}
            />
 
        </View>
 
    );
}
