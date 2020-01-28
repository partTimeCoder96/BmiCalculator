import {
CALCULATE_BMI
} from './type.js'


export const calculateBmi=(gender,height,weight,age)=>async dispatch=>{
   
    console.log('data in actions',gender,height,weight,age);
const heightInMeter=height/100;
console.log('heightinmeter',heightInMeter,'heightincentimeter',height);

const bmi=weight/(heightInMeter*heightInMeter);
console.log('bmi',bmi);

if(bmi < 16){
    dispatch({
        type:CALCULATE_BMI,
        payload:{
            bmi:bmi,
            category:'Severe Thinness',
        }
    })
}

if(bmi >16 && bmi <= 17){
    dispatch({
        type:CALCULATE_BMI,
        payload:{
            bmi:bmi,
            category:'Moderate Thinness',
        }
    })
}

if(bmi > 17 && bmi < 18.5 ){
    dispatch({
        type:CALCULATE_BMI,
        payload:{
            bmi:bmi,
            category:'Mild Thinness',
        }
    })
}

if(bmi > 18.5 && bmi <=25 ){
    dispatch({
        type:CALCULATE_BMI,
        payload:{
            bmi:bmi,
            category:'Normal',
        }
    })
}

if(bmi >25 && bmi <=30){
    dispatch({
        type:CALCULATE_BMI,
        payload:{
            bmi:bmi,
            category:'Overweight',
        }
    })
}

if(bmi > 30 && bmi <=35){
    dispatch({
        type:CALCULATE_BMI,
        payload:{
            bmi:bmi,
            category:'Obese class 1',
        }
    })
}

if(bmi > 35 && bmi <=40){
    dispatch({
        type:CALCULATE_BMI,
        payload:{
            bmi:bmi,
            category:'Obese class 2',
        }
    })
}

if(bmi > 40){
    dispatch({
        type:CALCULATE_BMI,
        payload:{
            bmi:bmi,
            category:'Obese class 3',
        }
    })
}
}