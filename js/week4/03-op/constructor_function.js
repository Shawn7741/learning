function Movie(title, releaseDate) {
    this.title = title;
    this.releaseDate = releaseDate;

    this.getFullMovie = () =>{
        return this.title + " "+  this.releaseDate;
    }
};

let movie = new Movie('Avengers', '14th April,2018');


console.log(movie.getFullMovie());