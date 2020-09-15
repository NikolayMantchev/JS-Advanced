function helloName (name){
return name;
}
function solve (n){
    const name = helloName (n);
    console.log (`Hello, ${name}!`);
}
solve("Peter");