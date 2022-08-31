let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
const collection = document.querySelector("#toy-collection")
const form = document.querySelector('.add-toy-form')
//fetching toys
function toyCollection (arrToys){
  fetch("  http://localhost:3000/toys")
  .then(resp=>resp.json())
}
//rendering functions
function render(arrToys){
  arrToys.forEach(renderOneToy)
}
  
 function renderOneToy(){
  const cards= document.createElement("div");
  cards.className= "card"

  const h2 = document.createElement("h2");
  h2.innerHTML = arrToys.h2;

  const image = document.createElement("img");
  image.className="toy-avatar";
  image.src= arrToys.src

  const p = document.createElement("p")
    p.innerHTML=`${arrToys.likes} likes`

    const buttons = document.createElement("button")
    buttons.innerHTML = "Like ❤️"
    buttons.className= "like-btn"
    buttons.id = arrToys.id

    cards.appendChild(div)
    div.appendChild(h2);
    div.appendChild(image);
    div.appendChild(p)
    div.appendChild(buttons)

    buttons.addEventListener("click",(
      function handleLikes(){
        let moreLikes = parseInt(likes.textContent)
        likes.textContent=`${moreLikes+1} likes`
      }
    ))

    }
    //event handlers
    form.addEventListener("submit",(
      function newToy(e){
        e.preventDefault();
        console.log(e.target.elements.name.value);
        console.log(e.target.elements.image.value);
        $TARGET = e.target;
      }
    ))
    //invoking our function
    toyCollection().then(render)
  
