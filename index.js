const btnLike1 = document.getEmentById("id="btnLike1")
const btnLike2 = document.getEmentyById("id="btnLike2")
const btnLike3 = document.getEmentyById("id="btnLike3")
const btnLike4 = document.getEmentyById("id="btnLike4")
const countLike1 = document.getElementyById("id="countLike1")
const countLike2 = document.getElementyById("id="countLike2")
  const countLike3 = document.getElementyById("id="countLike3")
  const countLike4 = document.getElementyById("id="countLike4")

  

function hitLikes() {
  let totalLike1 = parseInt(countLikes1.value) + 1
  countLikes1. textContent = totalLikes1.toString() 
}
btnLike1.addEventListener("click",hitLikes1)
