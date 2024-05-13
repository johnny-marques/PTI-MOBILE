
import { Text, View, StyleSheet, Image } from 'react-native';
import localImages from './localImages.jsx'
import { Card } from 'react-native-paper';

export function ProductCard ({name, calories, price, image}) {
  return (  
      <Card style={styles.card}>
        <View style={styles.container0}>
          <View style={styles.container1}>
            <Text style={styles.name}> {name} </Text>
            <View style={styles.container2}>
              <Image style={styles.fire} source={localImages.index['fogo']} />
              <Text style={styles.calories}> {calories} Calories </Text>
            </View>
            <Text style={styles.price}> ${price} </Text>
          </View>
          <Image style={styles.image} source={localImages.index[image]} />
        </View>
      </Card>
  );    
}

const styles = StyleSheet.create({
    card: {
    width: '90%', 
  },
  container0: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',   
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  container1: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'left',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
    fontSize: 7,
  },
    fire: {
    height: 30,
    width: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
    calories: {
    fontSize: 14,
    color: '#808080',
  },
    price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFC222',
    marginTop: 5,
  },
  image: {
    height: 100,
  }

});
