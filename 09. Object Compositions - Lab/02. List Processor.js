function solve(input) {
    const listBuilder = function () {
        let list = [];
        return {
            add: (text) => (list = [...list, text]),
            remove: (text) => (list = list.filter((x) => x != text)),
            print: () => console.log(list.join()),
        };
    };
    let listProcesor = listBuilder();
    input
        .map((x) => x.split(" "))
        .forEach(([command, argument]) => {
            listProcesor[command](argument);
        });
}

solve(["add hello", "add again", "remove hello", "add again", "print"]);
