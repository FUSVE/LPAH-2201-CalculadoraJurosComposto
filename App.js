import { StyleSheet, View } from 'react-native';
import Main from './src/Components/Main';
import Title from './src/Components/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
