function solve(param) {
	
	const systems = param.reduce((acc, curr) => {
        [system, first, second] = curr.split(" | ");

        const systemName = acc[system];

        if (!systemName.hasOwnProperty(first) {
            return {
                ...acc,
                [system]: {
                    ...systemName,
                    [first]: [second],
                },
            };
        }
        if (systemName.hasOwnProperty(first)) {
            comp = systemName[first];
            comp.push(first);

            return {
                ...acc,
                [system]: {
                    ...systemName,
                    [first]: systemName[first].push(first),
                },
            };
        }
        if (!systemName[first].includes(second)) {
            subComp = systemName[first];
            subComp.push(second);
            return {
                ...acc,
                [system]: {
                    ...systemName,
                    [first]: subComp,
                },
            };
        }
        return acc;
    }, {});
    let sortedRes = Object.entries(systems);

    const res = systems.Entries;

    sortedRes.forEach((system) => {
        const [sys] = system;
        console.log(`${sys}`);
        console.log(`|||${system[1].first} `);
        console.log(`||||||${system[1].second.join("\n||||||")} `);
    });
}
// acc =
// 			{ system:
// 				 { component: [subcomp1, subcomp2, subcomp3], }
//
// 			}
solve([
    "SULS | Main Site | Home Page",
    "SULS | Main Site | Login Page",
    "SULS | Main Site | Register Page",
    "SULS | Judge Site | Login Page",
    "SULS | Judge Site | Submittion Page",
    "Lambda | CoreA | A23",
    "SULS | Digital Site | Login Page",
    "Lambda | CoreB | B24",
    "Lambda | CoreA | A24",
    "Lambda | CoreA | A25",
    "Lambda | CoreC | C4",
    "Indice | Session | Default Storage",
    "Indice | Session | Default Security",
]);
// 0/100
