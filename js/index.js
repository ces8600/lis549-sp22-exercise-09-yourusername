//Log out a message to show you've got JavaScript running

console.log('Script running!');


//Define a variable `myName` and log it out
let myName = 'Eunsun Choi';
    console.log(myName);


//Define a function `getVowelCount()`
function getVowelCount(aString){

var lowerCaseName = aString.toLowerCase();

var modifiedString = lowerCaseName.replaceAll('a', '');
var modifiedString = modifiedString.replaceAll('e', '');
var modifiedString = modifiedString.replaceAll('i', '');
var modifiedString = modifiedString.replaceAll('o', '');
var modifiedString = modifiedString.replaceAll('u', '');
var modifiedString = modifiedString.replaceAll('y', '');

return(lowerCaseName.length - modifiedString.length);
}



//Define a variable `numVowelsInName` and log it out

let numVowelsInName = getVowelCount(myName);
console.log(numVowelsInName);


//Create a variable `h1Elememt` that refers to the `<h1>` element in the DOM.
//Then change the text of that element

let h1Element = $('h1');
h1Element.text("Interactive Pet Viewer");


//Create a variable `footerElement` that refers to the `<footer>`, then
//change the HTML content of that element

let footerElement = $('footer');
footerElement.html('<small>All images from <a href="https://unsplash.com/">unsplash.com</a></small>');

//Change the CSS `display` property of the `#cats` element
//Add the `active` class to the `#btnShowDogs` element

$('#cats').css('display', 'none');
$('#btnShowDogs').css('display', 'active');


//Add an event listener to the buttons to respond to click events.
//The listener's function will toggle the `#dogs` and `#cats` divs,
//and toggle which button has the `active` class

let buttons = $('.btn-group');
buttons.on('click', function(event) {
    $('#cats, #dogs').toggle('fast').toggleClass('active');

});

//Change the `cursor` CSS property of the images
$("img").css({"cursor":"pointer"});


//Add the `data-bs-toggle` and `data-bs-target` attributes to the images
$("img").attr("data-bs-toggle", 'modal');
$("img").attr("data-bs-target", '#m');

//Ad an event listener to the modal for `show.bs.modal` events.
//The listener's function will replace the modal's image `src` and
//`alt` attributes with the values from the clicked image.
$('.modal').on('shown.bs.modal', function (event) { 
  
    let imageClicked = $(event.relatedTarget);

    console.log(imageClicked);
   
    let imageSC = imageClicked.attr('src');

    console.log(imageSC);
   
    let imageAlt = imageClicked.attr('alt');
    
   $('#modalImage').attr('src', imageSC);
   $('#modalImage').attr('alt', imageAlt);
   

});

