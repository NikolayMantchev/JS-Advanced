function solve(input) {
    let fileName = input.split("\\").pop();
    let file = fileName.split(".");
    console.log(`File name: ${file[0]}\nFile extension: ${file[1]}`);
}
solve('C:\\Projects\\Data-Structures\\LinkedList.cs' );
// 80/100

function extractFile(input) {
	let result = input.substring(input.lastIndexOf("\\") + 1);
	let fileName = result.substring(0, result.lastIndexOf("."));
	let extension = result.substring(result.lastIndexOf(".") + 1);
	console.log(`File name: ${fileName}`);
	console.log(`File extension: ${extension}`);
  }
  extractFile("C:\\Internal\\training-internal\\Template.pptx");
//   100/100