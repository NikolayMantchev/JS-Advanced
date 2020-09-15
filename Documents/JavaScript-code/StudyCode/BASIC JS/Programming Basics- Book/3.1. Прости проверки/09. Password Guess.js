function passwordGuess ([pass]){
let rightPass = (pass);
if (rightPass === "s3cr3t!P@ssw0rd") {
    console.log ("Welcome");
} else {
    console.log ("Wrong password!");
}
}
passwordGuess (["s3cr3t!P@ssw0"]);