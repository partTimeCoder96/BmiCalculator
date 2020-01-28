/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Slider,
  TouchableOpacity
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Header,Button} from 'native-base'
import male from './male.png';
import female from './woman.png'
import {connect} from 'react-redux';

import {calculateBmi} from './redux/actions/actions'

function Home(props){

  const [height,setHeight]=useState(1);
  const [weight,setWeight]=useState(1);
  const [age,setAge]=useState(1);
  const [gender,setGender]=useState('');

  useEffect(()=>{
    console.log('use effect called',props.bmiResult);
    if(props.bmiResult.bmi){
      props.navigation.navigate('BmiResult');
    }
  },[props.bmiResult])
 const decreaseWeight=()=>{
   console.log('decreaseweight funcation called');
   if(weight <=0){
     return 
   }
  setWeight(weight-1);
  }


 const increaseWeight=()=>{
  console.log('increaseweight funcation called');
  setWeight(weight+1);
  }

  const decreaseAge=()=>{
    console.log('decreaseage funcation called');
    if(age <=0){
      return 
    }
    setAge(age-1);
   }
 
 
  const increaseAge=()=>{
   console.log('increaseage funcation called');
   setAge(age+1);
   }

   const calculateBmi=()=>{
     console.log('calculate bmi called')
    props.onclick(gender,height,weight,age)
   }

  return(
    <ScrollView>
  <View style={styles.container}>
  
  <Header style={styles.header}>
  <Text style={styles.mainText}>BMI CALCULATOR</Text>
  </Header>

    <View style={styles.gender}>

      <TouchableOpacity style={styles.male} onPress={()=>setGender('male')}>
    <Image source={require('./male.png')} style={styles.genderImage}/>
      <Text  style={styles.genderText}>Male</Text>
      </TouchableOpacity>
      


      
      <TouchableOpacity style={styles.male}>
      <Image source={require('./woman.png')} style={styles.genderImage}/>
      <Text style={styles.genderText}>Female</Text>
      </TouchableOpacity>
      
    </View>

    <View style={styles.height}>
    <Text style={{fontSize:20,textAlign:'center',marginTop:10}}>Height</Text>
    <Text style={{fontSize:40,textAlign:'center'}}>{height}cm</Text>
    <Slider
    maximumValue={250}
    minimumValue={1}
    step={1}
    value={height}
    onValueChange={(val)=>{setHeight(val)}}
    style={{marginTop:20}}/>

    </View>

    <View style={styles.gender}>

      <View style={styles.male}>
      <View>
        <Text style={{textAlign:'center',marginTop:5}}>Weight</Text>
        <Text style={{textAlign:'center',marginTop:5,fontSize:40}}>{weight}</Text>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
        
        <TouchableOpacity onPress={increaseWeight}>
            <Image source={require('./plus.png')} style={styles.plusImage}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={decreaseWeight}>
            <Image source={require('./minus.png')} style={styles.plusImage}/>
        </TouchableOpacity>
        
        </View>
      </View>
      </View>


      <View style={styles.female}>
      <View>
        <Text style={{textAlign:'center',marginTop:5}}>Age</Text>
        <Text style={{textAlign:'center',marginTop:5,fontSize:40}}>{age}</Text>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
        <TouchableOpacity onPress={increaseAge}>
        <Image source={require('./plus.png')} style={styles.plusImage}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={decreaseAge}>
        <Image source={require('./minus.png')} style={styles.plusImage}/>
        </TouchableOpacity>
        </View>
      </View>

      </View>
    </View>

    <View>
    <Button onPress={calculateBmi} primary style={{backgroundColor:'#e91e63',justifyContent:'center'}}><Text style={{fontSize:20}}>Calculate</Text></Button>
    </View>
    
  </View>
  
  </ScrollView>
 
  )
} 

const mapStateToProps= state =>{
  console.log('state.BmiCalculaterReducer',state.BmiCalculaterReducer.bmi);
  return{
    bmiResult:state.BmiCalculaterReducer.bmi
  } 
}

const mapDispatchToProps=(dispatch)=>{
return{
onclick:(gender,height,weight,age)=>
  dispatch(calculateBmi(gender,height,weight,age))
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:"#220d65"
},
mainText:{
  fontSize:25,
  color:'#fff',
  textAlign:'center'
},
header:{
  backgroundColor:'#220d65',
  justifyContent:'center',
  alignItems:'center',
},
gender:{
  width:'100%',
  height:150,
  backgroundColor:'#cf84df',
  flexDirection:'row',
  //padding:10
},
male:{
  width:'45%',
  height:130,
  backgroundColor:'#7f73a5',
  margin:'2.5%'
},
female:{
  width:'45%',
  height:130,
  backgroundColor:'#7f73a5',
  margin:'2.5%'
},
height:{
  width:'90%',
  backgroundColor:'#7f73a5',
  height:150,
  margin:'5%'
},
genderImage:{
  width:70,
  height:70,
  alignSelf:'center',
  alignItems:'center',
  marginTop:10
},
plusImage:{
  width:30,
  height:30,
  alignSelf:'center',
  alignItems:'center',
  marginTop:10,
  marginRight:20
},
genderText:{
  textAlign:'center',
  color:'black',
  marginTop:5
}
});

