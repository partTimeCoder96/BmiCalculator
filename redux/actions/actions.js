import {
CALCULATE_BMI
} from './type.js'


export const calculateBmi=(gender,height,weight,age)=>async dispatch=>{
    dispatch({type:CALCULATE_BMI})
const heightInMeter=height/100;
console.log('heightinmeter',heightInMeter,'heightincentimeter',height);

const bmi=weight/(heightInMeter*heightInMeter);
console.log('bmi',bmi);

}