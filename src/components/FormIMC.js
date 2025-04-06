import { View, TextInput, StyleSheet, Pressable, Text } from "react-native" //Importar objetos
import Result from './Result'; //Importar function Result de Result.js
import { useState } from "react"; //Importar o useState
import PesoIdeal from "./PesoIdeal"; //Importar function PesoIdeal de PesoIdeal.js

const FormIMC = () => { //Function FormIMC
    const [peso, setPeso] = useState(''); //Criando variáveis cum useState
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [error, setError] = useState('');
    const [mostrarPesoIdeal, setMostrarPesoIdeal] = useState(false);

    const calcularIMC = () => { //function calcularIMC
        setError('');

        if (!peso || !altura) {
            setError('Por favor, preencha o peso e a altura'); //Mensagem de erro
            return;
        }

        if (peso && altura) {
            const alturaMetros = parseFloat(altura) / 100;
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
            setImc(imcCalculado);
            setMostrarPesoIdeal(true);
        } //Calculo do IMC
    };

    return (
        <View style={styles.formContainer}>
            <TextInput
             style={styles.input}
             placeholder="Peso (Kg)"
             keyboardType="numeric"
             value={peso}
             onChangeText={setPeso}
            /> {/*Input peso*/}
            <TextInput
             style={styles.input}
             placeholder="Altura (cm)"
             keyboardType="numeric"
             value={altura}
             onChangeText={setAltura}
            /> {/*Input altura*/}
            <Pressable 
                onPress={calcularIMC} 
                style={({pressed}) => [
                    { backgroundColor: pressed ? '#fe88d5' : '#fe88d5', 
                        height: 30,
                        marginBottom: 12,
                        paddingHorizontal: 8,
                        borderRadius: 10,
                        width: 150,
                    },
                    styles.wrapperCustom,
                ]}
            >
                {({pressed}) => (
                    <Text style={styles.text}>{pressed ? 'Calcular IMC' : 'Calcular IMC'}</Text>
                )}
            </Pressable> {/*Botão*/}
            {imc && <Result imc={imc} />} {/*Exibição do IMC*/}
            {mostrarPesoIdeal && <PesoIdeal alturaMetros={parseFloat(altura) / 100} />} {/*Exibição do peso ideal*/}     
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#00000009',
        padding: 16,
        borderRadius: 10,
        width: 250,
        flexDirection: 'colun', 
        justifyContent: 'center',
        alignItems: 'center',
        height: 190,
    },
    input: {
        height: 30,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 10,
        backgroundColor: "#fe88d5",
        color: "#f0f8ff",
        width: 150,
    },
    button: {
        height: 30,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 10,
        backgroundColor: "#fe88d5",
        width: 150,
    },
    text: {
        color: "#f0f8ff",
    },
}); //Estilização dos componentes

export default FormIMC; //Exportação da function