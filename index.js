function getDogPics (numberOfDogPics) {
  fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogPics}`)
    .then(response => response.json())
    .then(responseJson => {
      renderImageUrls(responseJson.message);
    })
  //  .then(responseJson => console.log(responseJson)) needed for #1
    .catch(error => alert('Something went wrong, please try again later'));
}

function getDogPicsListener() {
  $('form').submit(event => {
    event.preventDefault();
    const numberOfDogPics = $('.js-number-of-dogs').val();
//    console.log(numberOfDogPics);
    getDogPics(numberOfDogPics);
  });
}

function renderImageUrls(urls) {
 console.log(urls);
//loop through JSON data
//take response json, for loop call on line 4, call dog pic template function, use jquery to add to element in html file

}

function dogPicTemplate(imageUrl) {
  return `<img src=${imageUrl}/>`;
}

$(function() {
  getDogPicsListener();
});