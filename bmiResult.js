import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, Button} from 'native-base';

export default function BmiResult(props) {
  const [result, setResult] = useState();

  useEffect(() => {});

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Your result</Text>
      </View>

      <View style={styles.card}>
        <View style={{padding: 50}}>
          <Text style={{textAlign: 'center'}}>Normal</Text>
        </View>

        <View style={{marginTop: 50}}>
          <Text style={{textAlign: 'center', fontSize: 50}}>150</Text>
        </View>

        <View style={{marginTop: 130}}>
          <Text style={{textAlign: 'center', fontSize: 30}}>asdsadsadsa</Text>
        </View>
      </View>

      <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
        <Button
        onPress={()=>props.navigation.navigate('Home')}
          primary
          style={{backgroundColor: '#e91e63', justifyContent: 'center'}}>
          <Text style={{fontSize: 20}}>Re-Calculate</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    textAlign: 'center',
    fontSize: 30,
    color: '#fff',
  },
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  card: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    //width:'90%',
    margin: '5%',
    marginTop:35,
    backgroundColor: '#fff',
  },
});
