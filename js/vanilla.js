const api_url = "http://localhost:8000/api/v1/titles/"

/*
    Get the best rated movie on imdb
*/
function getBestRatedMovie() {
    fetch(api_url + '?sort_by=-imdb_score')
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            else {
                throw new Error("Something went wrong");
            }
        })
        .then((data => {
            displayMovie(data.results[0], "top-rated-movie")
        }))
        .catch((error) => {
            console.log("Fetch Error :-S", error);
        });
}

function displayMovie(retrievedMovie, divContainer) {
    document.getElementById(divContainer + "-image").src = retrievedMovie.image_url
    document.getElementById(divContainer + "-title").innerText = retrievedMovie.title
}

function initCarouselBestRated() {
    fetch(api_url + '?sort_by=-imdb_score')
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            else {
                throw new Error("Something went wrong");
            }
        })
        .then((data => {
            addCarouselItem(data.results[0], "best-rated-movies-carousel")
        }))
        .catch((error) => {
            console.log("Fetch Error :-S", error);
        });
}

function addCarouselItem(movie, carouselDivId) {
    const div_item = document.createElement("div");
    //div_item.classList.add('best-rated-movies-h1');
    const title = document.createElement('h1')
    title.classList.add('best-rated-movies-h1');
    const image = document.createElement('img')
    //const description = document.createElement('p')

    title.textContent = `${movie.title}`
    image.src = `${movie.image_url}`
    //description.textContent = `${movie.description}`

    div_item.appendChild(title)
    div_item.appendChild(image)
    //div_item.appendChild(description)
    document.getElementById(carouselDivId).appendChild(div_item)

}
getBestRatedMovie()
initCarouselBestRated()
