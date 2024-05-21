const urls = {
    nowplaying:'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
    popular:'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    toprated:'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
    upcoming:'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
    image:'https://image.tmdb.org/t/p/original/',
    detailMovie:'https://api.themoviedb.org/3/movie/',
    options :{
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODI3OTRlZTYwZjk3NDRiODdmZDcxNGU5YjdiODA0OSIsInN1YiI6IjY2MjhjYzE2MjIxYmE2MDE3YzE4NzEzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YrQWUvOlauxMvcSgSw5Fb93GOrtQPpoikgEE7McQORc'
    }
  }
}
export default urls