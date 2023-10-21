var apiKey = 'do4OD2iw7fIUUoFZseYJegKBd9UQIbIN&s'
var query = 'cats'

const input = document.querySelector("input");

input.addEventListener('keypress', function(e){
  if(e.key == 'Enter'){
    query = document.querySelector("input");
    requestGif(query)
    document.querySelector("input").value = '';
  }
})

function requestGif(query){
  const img = document.querySelector('img');
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}=${query}`, {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    img.src = response.data.images.original.url;
  })
  .catch(function(error){
    console.log(error)
    errorMsg = document.querySelector(".error");
    errorMsg.textContent = error;
  })
  ;
}

requestGif(query);