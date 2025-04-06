import React from 'react'; //Importação do react
import { Text, StyleSheet } from 'react-native';
import { View } from 'react-native-web';

const ClassificacaoIMC = (imc) => { //Function para classificação do IMC
    if (isNaN(imc)) {
        return "Erro: IMC inválido"; //Mensagem de erro
    }

    if (imc <= 18.5) {
        return "Você está abaixo do peso";
    } else if (imc > 18.5 && imc <= 24.9) {
        return "Você está no peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Você está no sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        return "Você está com obesidade grau 1";
    } else if (imc >= 35 && imc < 39.9) {
        return "Você está com obesidade grau 2";
    } else if (imc >= 40) {
        return "Você está com obesidade grau 4 (obesidade mórbida)";
    } //If else para classificação do IMC
    return ""; 
}
    
    const Result = ({ imc }) => { //Function para retornar os resultados
        if (!imc && imc !== 0) {
            console.log("Erro: o IMC não foi passado corretamente");
            return <Text style={styles.result}>Erro: IMC não encontrado</Text>;
        } //Mensagem de erro

        const Classificacao = ClassificacaoIMC(imc); //Variável para a classificação do IMC

        return (
            <View>
                <Text style={StyleSheet.result}>Seu IMC é: { imc } </Text>
                <Text style={StyleSheet.result}>{Classificacao}</Text>
            </View>
        ); //Retorna os resultados
    };
    
    const styles = StyleSheet.create({
        result: {
            marginTop: 20,
            fontSize: 24,
            textAlign: 'center',
            color: '#333',
        },
    });


export default Result;