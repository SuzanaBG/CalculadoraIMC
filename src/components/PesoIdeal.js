import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { View } from 'react-native-web';

const PesoIdeal = ({alturaMetros}) => { //Function que calcula o peso ideal
    const Min = (18.5 * (alturaMetros * alturaMetros)).toFixed(2);
    const Max = (24.9 * (alturaMetros * alturaMetros)).toFixed(2); //Variáveis para guardar os pesos ideais mínimo e máximo

    return (
        <View>
            <Text style={StyleSheet.result}>Peso mínimo ideal: {Min}</Text>
            <Text style={StyleSheet.result}>Peso máximo ideal: {Max}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    result: {
        marginTop: 20,
        fontSize: 24,
        textAlign: 'center',
        color: '#333',
    },
});

export default PesoIdeal;