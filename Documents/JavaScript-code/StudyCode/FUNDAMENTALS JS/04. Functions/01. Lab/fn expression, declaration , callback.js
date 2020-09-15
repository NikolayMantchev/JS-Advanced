// function expression catSays
let catSays = function(numOfMeow) {
    let catMessage = "";
    for (let i = 0; i < numOfMeow; i++) {
      catMessage += "meow ";
    }
    return catMessage;
  };
 
  // function declaration helloCat accepting a callback
  function helloCat(callbackFunc) {
    return "Hello " + callbackFunc(7);
  }
  
  // pass in catSays as a callback function
  helloCat(catSays);
  console.log(helloCat(catSays))

 
  
