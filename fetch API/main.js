const input = document.getElementById('input');
const button = document.getElementById('btn');
const movieResults = document.getElementById('movie-results');

button.addEventListener('click', () => {
  const searchIn = input.value;
  if (searchIn !== '') {
    fetchMovieData(searchIn);
  } else {
    alert('Please enter a movie title');
  }
});

async function fetchMovieData(searchIn) {
  const apiUrl = `http://www.omdbapi.com/?apikey=c8bd318d&s=${searchIn}`;
  const data = await fetch(apiUrl).then(response => response.json());
  if (data.Response === 'True') {
    displayMovieResults(data.Search);
  } else {
    displayError(data.Error);
  }
}


function displayMovieResults(results) {
  movieResults.innerHTML = results.map(result => 
    ` <div class="movie">
      <img src="${result.Poster}" alt="Movie Poster">
      <h2>${result.Title}</h2>
      <p>Year: ${result.Year}</p>
      <p>${result.Type}</p>
    </div> `);
}

function displayError(errorMessage) {
  movieResults.innerHTML = `<p class="error">${errorMessage}</p>`;
}

// let a = fetch("dds")
// a.then((res)=>{
//   return res.json()
// }).then(re)/




let a = fetch("Enter your Url")
a.then((res)=>{
  return res.json()
}).then((result)=>{
  console.log(result)
})  
