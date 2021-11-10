console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const button = document.getElementById("btn");
const image = document.getElementById("imageContainer");
const gifSearch = document.getElementById("gifSearch");

const getGif = () => {
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=a0H5W3rhVWGopepLbarAmisr0qvv9hAw&s='+gifSearch.value, {
        mode: 'cors',
      }).then(res => res.json())
      .then(res => {console.log(res); image.src = res.data.images.original.url})
      .catch(error => console.log(error))};

button.addEventListener('click', getGif);
