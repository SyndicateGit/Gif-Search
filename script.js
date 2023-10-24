var apiKey = 'do4OD2iw7fIUUoFZseYJegKBd9UQIbIN&s'
var query = 'cats'

const input = document.querySelector("input");

input.addEventListener('keypress', function(e){
  if(e.key == 'Enter'){
    query = document.querySelector("input").value;
    requestGif(query)
    document.querySelector("input").value = '';
  }
})

async function requestGif(query){
  try{
    const img = document.querySelector('img');
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}=${query}`, {mode: 'cors'});
    
    const gifJson = await response.json();
    
    img.src = gifJson.data.images.original.url;
    errorMsg = document.querySelector(".error");
    errorMsg.textContent = "";
  } catch(error){
    console.log(error)
    errorMsg = document.querySelector(".error");
    errorMsg.textContent = error;
  }

}

requestGif(query);

