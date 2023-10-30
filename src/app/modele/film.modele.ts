export class Film {
  title: string;
  id : number;
  adult: boolean;
  backdrop_path: string;
  popularity: number;
  genres: [];
  imdb_id : string;
  overview : string;
  poster_path : string;
  release_date : string;
  runtime : number;
  tagline : string;
  vote_average : number;
  vote_count : number;
  
  constructor(title: string, id:number, adult: boolean, backdrop_path: string, popularity: number, 
    genres: [], imdb_id : string, overview : string, poster_path : string, release_date : string, 
    runtime : number, tagline : string, vote_average : number, vote_count : number) {

    this.title = title;
    this.adult = adult;
    this.backdrop_path = backdrop_path;
    this.popularity = popularity;
    this.genres = genres;
    this.imdb_id = imdb_id;
    this.id =id;
    this.overview = overview;
    this.poster_path = poster_path;
    this.release_date = release_date;
    this.runtime = runtime;
    this.tagline = tagline;
    this.vote_average = vote_average;
    this.vote_count = vote_count;
  }
}
