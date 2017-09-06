var app = function(){
  makeRequest(requestComplete);
  var beers = localStorage.getItem('all_beers') ? JSON.parse(localStorage.getItem('all_beers')) : [];

}

var listBeers = function(beers){
  var section = document.querySelector('#beer-list');
  beers.forEach(function(beer){
    createBeer(beer, section);
  })
}

var createBeer = function(beer, section){
  var beerSection = document.createElement('section');
  var div = document.createElement('div')
  imgDiv = document.createElement('div');
  var heading = document.createElement('h3');
  var img = document.createElement('img');
  heading.innerText = beer.name;
  img.src = beer.image_url;
  beerSection.className = 'beer-item';
  div.appendChild(heading);
  imgDiv.appendChild(img);
  beerSection.appendChild(imgDiv);
  beerSection.appendChild(div);
  section.appendChild(beerSection);
}

var requestComplete = function(){
  console.log("requestComplete");
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  localStorage.setItem('all_beers', jsonString);
  var beers = JSON.parse(jsonString);
  listBeers(beers);
}

var makeRequest = function(callback){
  var url = "https://api.punkapi.com/v2/beers"
  // create request object
  var request = new XMLHttpRequest();
  //add the get request
  request.open('GET', url);
  //add a listener to execute when the data has loaded
  request.addEventListener('load', callback);
  //send the request
  request.send()

}

window.addEventListener('load', app);