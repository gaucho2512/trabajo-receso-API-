const items = document.getElementById("items");
const templateCard = document.getElementById("template-card").content
const fragment = document.createDocumentFragment();

document.addEventListener("DOMContentLoaded" , () => {
    fectchData()
})




const fectchData = async () => {
    try{
        const res = await fetch("api.json");
        const data = await res.json();
        pintarCards(data)
       
    } catch (error) {
        console.log(error);
    }
}


const pintarCards = data => {
    data.forEach(producto => {
        templateCard.querySelector("h5").innerHTML = producto.nombre
    })}