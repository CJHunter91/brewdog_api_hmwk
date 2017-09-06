var app = function(){
  var beers = localStorage.getItem('a')
  makeRequest(requestComplete);
  listBeers();

}

var getBeers = function(){

}

var listBeers = function(){
  var beers = getBeers();
}

var requestComplete = function(){
  console.log("requestComplete");
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  localStorage.setItem('all_beers', jsonString);
  var beers = JSON.parse(jsonString);
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