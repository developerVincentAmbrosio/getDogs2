function getDogPics (numberOfDogPics) {
  fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogPics}`)
    .then(response => response.json())
    .then(responseJson => {
      renderImageUrls(responseJson.message)
      console.log(responseJson)
    })
    .catch(error => alert('Something went wrong, please try again later'));
}

function getDogPicsListener() {
  $('form').submit(event => {
    event.preventDefault();
    const numberOfDogPics = $('.js-number-of-dogs').val();
    getDogPics(numberOfDogPics);
  });
}

function renderImageUrls(urls){
console.log(urls);
$('.js-dog-pic-container').empty();   
  for (let i = 0; i < urls.length; i++) {
    $('.js-dog-pic-container').append(dogPicTemplate(urls[i]));
  }
}

function dogPicTemplate(imageUrl) {
  return `<img src="${imageUrl}"/>`;
}

$(function() {
  getDogPicsListener();
});