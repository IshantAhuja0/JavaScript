const APIURL = //to get polular movies
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = //to get searched movies
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const movieBox = document.querySelector("#movie-box");
const search = document.querySelector("#search");
const getMovies = async (api) => {
  const response = await fetch(api);
  const data = await response.json();
  showResult(data.results);
};
const showResult = (data) => {
  movieBox.innerHTML="";
  // console.log(data)
  data.forEach((item) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
        <img src="${IMGPATH + item.poster_path}" alt="" />
        <div class="overlay">
            <div class="title"> 
             <h3> ${item.original_title}  </h3>
             <span> ${item.vote_average} <span>
            </div>
            <h5>Overview:</h5>
            <p> 
             ${item.overview}
            </p>
         </div>
    `;
    movieBox.appendChild(box);
  });
};
getMovies(APIURL);
search.addEventListener("keyup", (event) => {

if(event.target.value !=""){
  getMovies(SEARCHAPI+event.target.value)
}
else{
  getMovies(APIURL);
}
});
