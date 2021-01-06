// strore mass
const heightMark = 1.69
const weightMark = 78
const heightJohn = 1.95
const weightJohn = 92

const markBMI = weightMark / heightMark ** 2
const johnBMI = weightJohn / heightJohn ** 2

const markHigherBMI = markBMI > johnBMI

console.log(markBMI)
console.log(johnBMI)
if (markHigherBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than john's ${johnBMI}`)
} else {
  console.log(`Mark's BMI ${markBMI} is lower than john's ${johnBMI}`)
}

/// /////////////////////// test 2
// strore mass
const heightMark2 = 1.88
const weightMark2 = 95
const johnHeight2 = 1.76
const johnWeight2 = 85

const markBMI2 = weightMark2 / heightMark2 ** 2
const johnBMI2 = johnWeight2 / johnHeight2 ** 2

const markHigherBMI2 = markBMI2 > johnBMI2

console.log(markBMI2)
console.log(johnBMI2)

if (markHigherBMI2) {
  console.log(`Mark's BMI (${markBMI2}) is higher than john's (${johnBMI2})`)
} else {
  console.log(`Mark's BMI (${markBMI2}) is lower than john's (${johnBMI2})`)
}
