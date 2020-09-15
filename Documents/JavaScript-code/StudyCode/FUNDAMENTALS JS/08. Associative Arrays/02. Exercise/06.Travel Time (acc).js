function solve (input) {
	const destinations = input.map(line => line.split(' > '));
   
	const calculateCities = (cities, city, score) => {
	  const curScore = cities[city];
	  return curScore
		? {
		  ...cities,
		  [city]: Math.min(curScore, score)
		}
		: {
		  ...cities,
		  [city]: score
		};
	};
   
	const countries = destinations.reduce((acc, curr) => {
	  const [country, city, score] = curr;
	  const curCities = acc[country];
   
	  return curCities
		? {
		  ...acc,
		  [country]: calculateCities(curCities, city, score)
		}
		: {
		  ...acc,
		  [country]: { [city]: score }
		};
	}, {});
   
	const countryKeys = Object.keys(countries).sort();
   
	countryKeys.forEach(key => {
	  const cities = Object.entries(countries[key])
		.map(
		  ([city, score]) => ({ city, score })
		)
		.sort((a, b) => a.score - b.score);
	  const cityStrings = cities.map(c => `${c.city} -> ${c.score}`).join(' ');
	  console.log(`${key} -> ${cityStrings}`);
	});
   }
   solve([
    "Bulgaria > Sofia > 500",

    "Bulgaria > Sopot > 800",

    "France > Paris > 2000",

    "Albania > Tirana > 1000",

    "Bulgaria > Sofia > 200",
]);
// 100/100