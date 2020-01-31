import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet,TouchableOpacity,Image,Linking} from 'react-native';
import {Header, Button} from 'native-base';
import {connect} from 'react-redux';
import {deleteData} from './redux/actions/actions'
import { set } from 'react-native-reanimated';


 function BmiResult(props) {
  const [result, setResult] = useState();
  const[bmi,setBmi]=useState('');
  const[category,setCategory]=useState('');
  const [message,setMessage]=useState('');
  useEffect(() => {
    if(props.bmiResult){

      console.log('props.bmiresult in bmiresult',props.bmiResult);
const bmidata=props.bmiResult
    console.log('bmidata',bmidata)
      showBmiData(bmidata)
    }else{
      props.navigation.navigate('Home')
    }
  },[props.bmiResult]);
   
const showBmiData=(bmidata)=>{
  if(bmidata.bmi <  16){
    setBmi(bmidata.bmi.toFixed(2))
    setCategory(bmidata.category)
    setMessage('your body index mass is very low')
    return
  }

  if(bmidata.bmi >=16 && bmidata.bmi <= 17){
    setBmi(bmidata.bmi.toFixed(2))
    setCategory(bmidata.category)
    setMessage('your body index mass is low')
    return
  }

  if(bmidata.bmi >= 17 && bmidata.bmi <= 18.5){
    setBmi(bmidata.bmi.toFixed(2))
    setCategory(bmidata.category)
    setMessage()
    return
  }

  if(bmidata.bmi >= 18.5 && bmidata.bmi <= 25 ){
    console.log('normal');
    setBmi(bmidata.bmi.toFixed(2))
    setCategory(bmidata.category)
    return
  }

  if(bmidata.bmi >= 25 && bmidata.bmi <= 30){
    setBmi(bmidata.bmi.toFixed(2))
    setCategory(bmidata.category)
    return
  }

  if(bmidata.bmi >= 30 && bmidata.bmi <= 35){
    setBmi(bmidata.bmi.toFixed(2))
    setCategory(bmidata.category)
    return
  }

  if(bmidata.bmi >= 35 && bmidata.bmi <=40){
    setBmi(bmidata.bmi.toFixed(2))
    setCategory(bmidata.category)
    return
  }

  if(bmidata.bmi > 40){
    setBmi(bmidata.bmi.toFixed(2))
    setCategory(bmidata.category)
    return
  }
}

const homeScreen=()=>{
  console.log('homescrren');
  props.onDelete()
}

const openLinkedin=()=>{
  Linking.canOpenURL('https://www.linkedin.com/in/govind-bagla-75ab32b3/')
  .then((supported) => {
    if (!supported) {
      console.log("Can't handle url: " + 'https://www.linkedin.com/in/govind-bagla-75ab32b3/');
    } else {
      return Linking.openURL('https://www.linkedin.com/in/govind-bagla-75ab32b3/');
    }
  })
  .catch((err) => console.error('An error occurred', err));
}

const openGithub=()=>{
  Linking.canOpenURL('https://github.com/govind1530')
  .then((supported) => {
    if (!supported) {
      console.log("Can't handle url: " + 'https://github.com/govind1530');
    } else {
      return Linking.openURL('https://github.com/govind1530');
    }
  })
  .catch((err) => console.error('An error occurred', err));
}

console.log('resulr.catgory',result);
console.log('props.bmiresult',props.bmiResult);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Your result</Text>
      </View>

      <View style={styles.card}>
        <View style={{padding: 50}}>
          <Text style={{textAlign: 'center',fontSize:30}}>{category}</Text>
        </View>

        <View style={{marginTop: 50}}>
          <Text style={{textAlign: 'center', fontSize: 30}}>Your bmi is {bmi}</Text>
        </View>

        <View style={{marginTop: 130,flexDirection:'row',justifyContent:'center',alignContent:'center'}}>
        <TouchableOpacity onPress={openLinkedin}>
            <Image source={require('./linkedin.png')} style={styles.linkedinImage}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={openGithub}>
            <Image source={require('./github-image.png')} style={styles.githubImage}/>
        </TouchableOpacity>
        </View>
      </View>
    <View style={{backgroundColor:'#FCF6F5FF',height:100}}>

    </View>
      <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
        <Button
        onPress={homeScreen}
          primary
          style={{backgroundColor: '#2BAE66FF', justifyContent: 'center'}}>
          <Text style={{fontSize: 20,color:'#FCF6F5FF'}}>Re-Calculate</Text>
        </Button>
      </View>
    </View>
  );
}

const mapStateToProps=(state)=>{
console.log('state in bmi result',state.BmiCalculaterReducer.bmi);
return{
  bmiResult:state.BmiCalculaterReducer.bmi
}
}

const mapDispatchToProps=(dispatch)=>{
  return{
  onDelete:()=>
    dispatch(deleteData())
  }
  }

export default connect(mapStateToProps,mapDispatchToProps)(BmiResult);
const styles = StyleSheet.create({
  headerText: {
    textAlign: 'center',
    fontSize: 30,
    color: '#FCF6F5FF',
    paddingTop:10
  },
  container: {
    backgroundColor: '#2BAE66FF',
    flex: 1,
  },
  card: {
    borderWidth: 1,
    borderColor: '#FCF6F5FF',
    borderRadius: 0,
    //width:'90%',
    margin: '0%',
    marginTop:25,
    backgroundColor: '#FCF6F5FF',
  },
  linkedinImage:{
    width:30,
    height:30,
    //alignSelf:'center',
    //alignItems:'center',
   // marginTop:10,
   // marginRight:20
  },
  githubImage:{
    width:30,
    height:30,
    //alignSelf:'center',
    //alignItems:'center',
    marginLeft:20
   // marginTop:10,
   // marginRight:20
  },
});
