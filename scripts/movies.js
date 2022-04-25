// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let id;
let Wamount = JSON.parse(localStorage.getItem("amount"));
console.log(Wamount);
document.getElementById("wallet").innerText = Wamount;

const searchedMovies = async ()=>{
    try{
        console.log("inside search box")
        const input = document.getElementById("search").value;
        const res = await fetch(`https://www.omdbapi.com/?s=${input}&apikey=ff824a46`)
        // console.log(res)
        let data = await res.json();
        console.log(data.Search)
        displayMovies(data.Search);
    }   
    catch(err){
        console.log(err)
    }
}

const debounce = (func,delay) => {
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(() => {
        func()
    }, delay);
}

// displaying the movies data in grid format;
const displayMovies = (movies) => {
    document.getElementById("movies").innerHTML = null;
    movies.forEach(({Title,Poster}) => {
        let box = document.createElement("div");
        let poster = document.createElement("div");
        poster.setAttribute("class","poster")
        let img = document.createElement("img");
        img.src = Poster;
        poster.append(img);
        let title = document.createElement("h3");
        title.innerText = Title;
        let btn = document.createElement("button");
        btn.innerText = "Book Now"
        btn.addEventListener("click",()=>{
            addTowatch({Title,Poster})
        })
        btn.setAttribute("class","book_now")
        box.append(poster,title,btn);
        document.getElementById("movies").append(box);
    })
}
const addTowatch = (x) =>{
    console.log(x)
    console.log("add to watchlist")
    localStorage.setItem("movie",JSON.stringify(x));
    window.location.href = "checkout.html"
}