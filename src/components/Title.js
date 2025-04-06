import { Text, StyleSheet } from 'react-native';

const Title = () => { //Function do título
    return (
        <Text style={styles.title}>Calculadora de IMC</Text>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Title;