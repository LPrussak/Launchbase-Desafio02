const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = document.querySelectorAll(".card")
for (let card of cards) {
    card.addEventListener("click", function () {
        const cardId = card.getAttribute("id");
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${cardId}`
    })
}

document.querySelector(".close-modal").addEventListener("click", function () {
    modalOverlay.classList.remove('active')
    modal.classList.remove('maximize')
    modalOverlay.querySelector("iframe").src = ""
})

document.querySelector(".maximizar").addEventListener("click", function () {
    modal.classList.remove('minimize')
    modal.classList.add('maximize')
})
document.querySelector(".minimizar").addEventListener("click", function () {
    modal.classList.remove('maximize')
    modal.classList.add('minimize')
})