// Store the wallet amount to your local storage with key "amount"
console.log(1)

document.getElementById("add_to_wallet").addEventListener("click",()=>{
    let amountAdded = document.getElementById("amount").value;
    console.log(amountAdded)
    let previousamount = JSON.parse(localStorage.getItem("amount"));
    if(previousamount!=undefined){
        let totalamount = Number(previousamount)+Number(amountAdded);
        localStorage.setItem("amount",JSON.stringify(totalamount));
        window.location.reload();
    }
    else{
        localStorage.setItem("amount",JSON.stringify(amountAdded));
        window.location.reload();
    }

})

let walletbalance = JSON.parse(localStorage.getItem("amount"));
console.log(walletbalance)
document.getElementById("wallet").innerText = walletbalance

document.getElementById("book_movies").addEventListener("click",()=>{
    window.location.href = "movies.html";
})