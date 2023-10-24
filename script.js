var apiKey = 'do4OD2iw7fIUUoFZseYJegKBd9UQIbIN&s'
var query = 'cats'

const input = document.querySelector("input");

input.addEventListener('keypress', function(e){
  if(e.key == 'Enter'){
    query = document.querySelector("input").value;
    safeRequestGif(query);
    document.querySelector("input").value = '';
  }
})

async function requestGif(query){
  const img = document.querySelector('img');
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}=${query}`, {mode: 'cors'});
  
  const gifJson = await response.json();
  
  img.src = gifJson.data.images.original.url;
  errorMsg = document.querySelector(".error");
  errorMsg.textContent = "";
}

function handleErrorRequestGif(fn){
  return function(query){
    return fn(query).catch(function(error){
      console.log(error)
    })
  }
}

const safeRequestGif = handleErrorRequestGif(requestGif);

safeRequestGif(query);

