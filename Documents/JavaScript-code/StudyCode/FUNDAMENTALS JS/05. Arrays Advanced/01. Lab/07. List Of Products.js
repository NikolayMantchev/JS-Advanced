function listOfProducts(arr) {
    const result = arr.sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < result.length; i++) {
        console.log(`${i+1}.${result[i]}`)
    }
}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"])

// 80/100