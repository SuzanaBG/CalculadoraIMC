import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title'; //Importação do título
import FormIMC from './src/components/FormIMC'; //Importação do FormIMC

export default function App() {
  return (
    <View style={styles.container}>
      <Title/> {/*Título*/}
      <FormIMC/> {/*FormIMC*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ffbae7",
    justifyContent: 'center',
    padding: 16,
  },
});
