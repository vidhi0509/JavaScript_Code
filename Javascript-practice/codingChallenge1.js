const markMass = 78;
const markHeight = 1.69;

const johnMass = 98;
const johnHeight = 1.95;

const bmiMark = markMass / markHeight ** 2;
const bmiJohn = johnMass / johnHeight ** 2;

if(bmiMark > bmiJohn) {
    console.log(`Mark's BMI ${bmiMark} is higher than John's ${bmiJohn}`)
}
else {
    console.log(`John's BMI ${bmiJohn} is higher than Mark's ${bmiMark}`)
}
