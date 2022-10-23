let movieNameRef = document.getElementById("movie-name");
let searchbtn = document.getElementById("search-btn");
let result = document.getElementById("result");

let getMovie = () => {
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

    if(movieName.length <= 0){
        result.innerHTML = `<h3 class = "msg">Please enter a movie name </h3>`;
    }
    else{
        fetch(url)
        .then((resp) => resp.json())
        .then((data)=> {
            // console.log(data);
            // console.log(data.Poster);
            // console.log(data.Title);
            // console.log(data.imdbRating);
            // console.log(data.Rated);
            // console.log(data.Year);
            // console.log(data.Runtime);
            // console.log(data.Genre);
            // console.log(data.Plot);
            // console.log(data.Actors);


            result.innerHTML = `
            <div class ="info">
            <img src = ${data.Poster} class = "posters">
                <div>
                    <h2>${data.Title}</h2>
                    <div class = "rating">
                        <img src= "redstar.png">
                        <h4>${data.imdbRating}</h4>
                    </div>
                    <div class = "details">
                        <span>${data.Rated}</span>
                        <span>${data.Year}</span>
                        <span>${data.Runtime}</span>
                        
                    </div>
                    <div class = "genre">
                    <div>${data.Genre.split(",").join("</div><div>")}
                    
                    </div>


                </div>
            </div>
            
            <h3>Plot: </h3>
            <p>${data.Plot}</p>
            <h3>Cast: </h3>
            <p>${data.Actors}</p>

            `;
            
        });
    }
};
searchbtn.addEventListener("click",getMovie)
// window.addEventListener("load", getMovie);
window.addEventListener("load", getMovie);