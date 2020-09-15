function solve(input) {
    [list, ...args] = input;
    const friendList = list.split(", ");
    let lostCount = 0;
    let blacklistedCount = 0;
    function blacklisted(input) {
        if (!friendList.includes(input)) {
            console.log(`${input} was not found.`);
        } else {
            const nameIndex = friendList.indexOf(input);
            friendList.splice(nameIndex, 1, "Blacklisted");
            console.log(`${input} was blacklisted.`);
            blacklistedCount++;
        }
    }
    function error(index) {
        const name = Number(index);
        const searchedName = friendList[name];
        if (searchedName !== "Blacklisted" && searchedName !== "Lost") {
            let changedName = searchedName;
            friendList.splice(name, 1, "Lost");
            console.log(`${changedName} was lost due to an error.`);
            lostCount++;
        }
    }
    function change(index, newName){
        index = Number(index);
         const inRange = index <= friendList.length -1 && index > -1;
         if(inRange){
             const changedName = friendList[index];
             friendList[index] = newName;
             console.log(`${changedName} changed his username to ${newName}.`);
}
    }

    for (let i = 0; i < args.length; i++) {
        const token = args[i].split(" ");
        const comand = token[0];
        const arg1 = token[1];
        const arg2 = token[2];
        if (comand === "Report") {
            console.log(`Blacklisted names: ${blacklistedCount}`);
            console.log(`Lost names: ${lostCount}`);
            console.log(`${friendList.join(' ')}`);
            return;
        }
        switch (comand) {
            case "Blacklist":
                blacklisted(arg1);
                break;
            case "Error":
                error(arg1);
                break;
             case "Change":
				change(arg1,arg2)
                break; 
        }
    }
}
solve([
    'Mike, John, Eddie',
    'Blacklist Mike',
    'Error 0',
    'Error 1',
    'Change 2 Mike123',
    'Report'
]);
// 100/100