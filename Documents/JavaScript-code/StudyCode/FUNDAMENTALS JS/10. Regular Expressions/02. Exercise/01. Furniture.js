function solve(input) {
    let boughtFurniture = [];
    let totalMoneySpent = 0;
    for (const data of input) {
        let match = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+\.?[\d]*)!(?<quantity>[\d]+)/g.exec(data);
        if (match) {
            boughtFurniture.push(match.groups.name);
            totalMoneySpent +=
                Number(match.groups.price) * Number(match.groups.quantity);
        }
    }
    console.log(`Bought furniture:`);
    if (boughtFurniture.length > 0) {
        console.log(boughtFurniture.join("\n"));
    }
    console.log(`Total money spend: ${totalMoneySpent}`);
}

solve([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);

// 0/100
