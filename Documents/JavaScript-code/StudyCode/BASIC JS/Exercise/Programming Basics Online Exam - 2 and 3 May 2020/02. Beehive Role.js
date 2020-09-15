function solve(arg1, arg2, arg3) {
    let intelect = Number(arg1);
    let power = Number(arg2);
    let sex = (arg3);
    let role = '';


    if (intelect >= 80 && power >= 80 && sex === 'female') {
        role = 'Queen Bee'
        return console.log(role)
    }
     if (intelect >= 80){
        role = 'Repairing Bee';
        return console.log(role) 
     }
    if (intelect >= 60) {
        role = 'Cleaning Bee'
        return console.log(role) 
    }
      if (power >= 80 && sex === "male") {
        role = 'Drone Bee'
        return console.log(role) 
    }
     if (power >= 60) {
        role = 'Guard Bee'
        return console.log(role)
    }
    if (power < 60 && intelect < 60) {
        role = 'Worker Bee'
        return console.log(role) 
    }
    
}
solve(20, 65, "male");