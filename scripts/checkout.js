// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let walletbalance = JSON.parse(localStorage.getItem("amount"));
console.log(walletbalance)
document.getElementById("wallet").innerText = walletbalance


let movie = JSON.parse(localStorage.getItem("movie"))
console.log(movie)
const displayMovie = (movie)=>{
    let img = document.createElement("img");
    img.src = movie.Poster;
    let title = document.createElement("h1");
    title.innerText = movie.Title;
    document.getElementById("movie").append(img,title);
}

window.onload = ()=>{
    displayMovie(movie);
}
document.getElementById("confirm").addEventListener("click",()=>{
    let seats = document.getElementById("number_of_seats").value;
    let total = 100*Number(seats);
    
    if(walletbalance<100){
        alert("Insufficient Balance!")
    }
    else if(total>walletbalance){
        alert("Insufficient Balance!")
    }
    else{
        let remaining = walletbalance-total;
        localStorage.setItem("amount",JSON.stringify(remaining))
        alert("Booking successfull!")
        
    }
})