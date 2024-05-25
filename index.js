const btnLike1 = document.getEmentById("id="btnLike1")
const btnLike2 = document.getEmentyById("id="btnLike2")
const countLikes1 = document.getElementyById("id="countLike1")
const countLikes2 = document.getElementyById("id="countLike2") 

function hitLikes() {
  let totalLike1 = parseInt(countLikes1.value) + 1
  countLikes1. textContent = totalLikes1.toString() 
}
btnLike1.addEventListener("click",hitLikes1)
