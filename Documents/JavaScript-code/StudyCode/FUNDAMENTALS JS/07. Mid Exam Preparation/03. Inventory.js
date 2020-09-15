function solve(input) {
    let inventoryInput = input.shift();
    let inventory = inventoryInput.split(", ");
    let commandLine = input.shift();
    while (commandLine != "Craft!") {
        let [command, argument] = commandLine.split(" - ");
        switch (command) {
            case "Collect":
                if (!inventory.includes(argument)) {
                    inventory.push(argument);
                }
                break;
            case "Drop":
                dropItem(inventory, argument);
                break;
            case "Combine Items":
                let [oldItem, newItem] = argument.split(":"); //make funktion
                combineItems(inventory, oldItem, newItem);
                break;
            case "Renew":
                renew(inventory, argument);
                break;
        }
        commandLine = input.shift();
    }
    function dropItem(inventory, item) {
        let itemIndex = inventory.indexOf(item);
        if (itemIndex > -1) {
            inventory.splice(itemIndex, 1);
        }
    }
    function combineItems(inventory, oldItem, newItem) {
        if (inventory.includes(oldItem)) {
            let indexItem = inventory.indexOf(oldItem);
            inventory.splice(indexItem + 1, 0, newItem);
        }
    }
    function renew(inventory, item) {
        if (inventory.includes(item)) {
            let indexItem = inventory.indexOf(item);
            let toMove = inventory.splice(indexItem, 1);
            inventory.push(toMove)
        }
    }
    console.log(inventory.join(", "));
}
solve([ 

    'Iron, Sword', 
  
    'Drop - Bronze', 
  
    'Combine Items - Sword:Bow', 
  
    'Renew - Iron', 
  
    'Craft!' 
  
  ] );
// 100/100