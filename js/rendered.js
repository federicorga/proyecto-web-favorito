const contentCards = document.getElementById("contentCards");

function renderCardModel(page) {

    //Modelo de la tarjeta a renderizar.

    const card = document.createElement("div");

    card.classList.add(`card`)

    card.innerHTML = `

        <a href="${page.link}" class="linkCard" target= "_blank">
        <div class="card-img"> 
        <img src="${page.imgWeb + page.link}" class="imgFavic"  alt="...">
        </div>
        <div class="card-body">
          <h3>${page.nameWeb}</h3>
          <h4>${page.category} - ${page.subCategory}</h4>
          <p id="descriptionCard${page.id}" class="textOculto">${page.description}</p>
        </div>
        </a>
        
        `


    contentCards.appendChild(card);

    const descriptionCard = document.getElementById(`descriptionCard${page.id}`);

    
    card.addEventListener("mouseenter", () => {
        
        descriptionCard.classList.toggle("desocultarText");


    })

    card.addEventListener("mouseleave", () => {
        descriptionCard.classList.remove("desocultarText");

    })

}


function renderAllListArrayToCard(listArrayObject) {
    // transforma la lista de array de objetos a modelo tarjeta.
    listArrayObject.forEach(object => {
        renderCardModel(object);
    })
}


function catPet(){
const catPet=document.getElementById("catPet");
const globoCats=document.getElementById("globoCats");
catPet.addEventListener("click",()=>{
    globoCats.classList.toggle("globoCat2");
    setTimeout( function(){
        globoCats.classList.toggle("globoCat2")
    },2000)
})
}


catPet();



