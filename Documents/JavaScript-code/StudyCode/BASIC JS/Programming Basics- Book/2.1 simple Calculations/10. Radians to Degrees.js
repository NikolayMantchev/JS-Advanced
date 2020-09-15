function convertRadToCelsius ([arg1]){
    let rad = Number(arg1)
    let c = Math.round(rad * (180/Math.PI))
    console.log (c)
}
convertRadToCelsius (['0.7854']);