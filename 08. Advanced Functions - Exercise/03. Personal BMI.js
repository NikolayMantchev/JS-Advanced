function solve(name, age, weight, height) {
    let personalInfo = { age, weight, height };
    let BMI = weight / ((height / 100) * 2);

    let stat = () => {
        if (BMI <= 18.5) {
            return (person = {
                name,
                personalInfo,
                BMI,
                status: "underweight",
            });
        } else if (BMI > 18.5 && BMI < 25) {
            return (person = { name, personalInfo, BMI, status: "normal" });
        } else if (BMI >= 25 && BMI < 30) {
            return (person = { name, personalInfo, BMI, status: "overweight" });
        } else if (BMI >= 30) {
            return (person = {
                name,
                personalInfo,
                BMI,
                status: "obese",
                recommendation: `admission required`,
            });
        }
    };
    let res = stat(BMI);
    return res;
}

solve("Peter", 29, 135, 182);
// 0/100

// function bmi(...input) {
//     let tokens = [...input];
//     let person = {
//       name: tokens[0],
//       personalInfo: {
//       age: tokens[1],
//       weight: tokens[2],
//       height: tokens[3]
//       },
//     };
//     let myBMI = person.personalInfo.weight / ((person.personalInfo.height*0.01)**2);
//     person['BMI'] = Math.round(myBMI);
//     if (person['BMI'] < 18.5) {
//       person['status'] = 'underweight';
//     } else if (person['BMI'] < 25) {
//       person['status'] = 'normal';
//     } else if (person['BMI'] < 30) {
//       person['status'] = 'overweight';
//     } else {
//       person['status'] = 'obese';
//       person['recommendation'] = 'admission required';
//     }
//     return person;
//   }
// 100/100
