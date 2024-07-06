//declaring the form variable
const movieForm = document.getElementById("movieform")

//adding even listener and function to the form

movieForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let movieUrl = document.getElementById('movieurl').value;
    let movieName = document.getElementById('moviename').value;

    //creating the elements

    let movieCard = document.createElement('div');
    movieCard.className = 'movieCard';

    let movieImage = document.createElement('img');
    movieImage.src = movieUrl;

    let movieTitle = document.createElement('h4')
    movieTitle.textContent = "Title: " + movieName;

    //appending all elements together

    movieCard.appendChild(movieImage);
    movieCard.appendChild(movieTitle);

    document.getElementById('movielist').appendChild(movieCard);

});

