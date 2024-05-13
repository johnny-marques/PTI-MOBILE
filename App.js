import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ProductCard } from './components/productcard.jsx';


export default function App() {
  return (
    <View style={styles.container}>     
      <ProductCard name="Beef Burguer" calories="70" price="12.00" image= "beef_burguer" />    
      <ProductCard name="Pancakes" calories="60" price="15.00" image= "pancake" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#ecf0f1',
    padding: 5    
  }
});
