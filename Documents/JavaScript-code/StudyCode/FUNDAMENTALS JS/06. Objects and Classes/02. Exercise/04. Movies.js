function solve(input) {
    let movie = [];
    input.forEach(line => {
        const tokens = line.split(' ');
        const addIndex = tokens.indexOf("addMovie");   // if false result=> -1 
        const directorIndex = tokens.indexOf("directedBy");
        const dateIndex = tokens.indexOf("onDate");
        if (addIndex > -1) {
            movie.push({ name: tokens.slice(addIndex + 1).join(' ') });  // 
        }
        if (directorIndex > -1) {
            const name = tokens.slice(0, directorIndex).join(' ');
            const director = tokens.slice(directorIndex + 1).join(' ');
            movie.forEach(movie => {
                if (movie.name === name) {
                    movie.director = director;
                }
            });

        } if (dateIndex > -1) {
            const name = tokens.slice(0, dateIndex).join(' ');
            const date = tokens.slice(dateIndex + 1).join(' ');
            movie.forEach(movie => {
                if (movie.name === name) {
                    movie.date = date;
                }
            });
        }
    });
            movie.forEach(movie => {
                if (movie.name !== undefined
                    && movie.director !== undefined
                    && movie.date !== undefined)
                    console.log(JSON.stringify(movie))
            });
}
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)