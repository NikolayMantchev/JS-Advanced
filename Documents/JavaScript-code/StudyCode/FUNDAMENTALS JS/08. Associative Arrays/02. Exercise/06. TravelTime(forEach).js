function solve (input) {
	const destinations = input.map(line => line.split(' > '));
   
	const getCities = cities => {
	  return cities.reduce((accCities, [c, city, score]) => {
		const curScore = accCities[city];
		return curScore
		  ? {
			...accCities,
			[city]: Math.min(curScore, score)
		  }
		  : {
			...accCities,
			[city]: score
		  };
	  }, {});
	};
   
	const countrySet = new Set(destinations.map(([country]) => country));
	const countryNames = [...countrySet].sort();
   
	const countries = countryNames.forEach(country => {
	  const cities = destinations.filter(([c]) => c === country);
   
	  const filteredCities = getCities(cities);
	  const citiesObjects = Object.entries(filteredCities)
		.map(
		  ([city, score]) => ({ city, score })
		)
		.sort((a, b) => a.score - b.score);
	  const cityStrings = citiesObjects.map(c => `${c.city} -> ${c.score}`).join(' ');
	  console.log(`${country} -> ${cityStrings}`);
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