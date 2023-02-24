window.addEventListener("load", init);
function init() {
    const tartalomElemEz = document.querySelectorAll(".tartalom");
    console.log(tartalomElemEz)
    const etelLista = ["Spagetti", "Brokkoli", "Spenót"];
    etelekKiiras(etelLista, tartalomElemEz)
}
function etelekKiiras(etelLista, tartalomElemEz) {
    tartalomElemEz[0].innerHTML = "<ul> </ul>"
    const ulElem = document.querySelectorAll(".tartalom ul")[0]
    for (let index = 0; index < etelLista.length; index++) {
        let etel = etelLista[index]
        ulElem.innerHTML += "<li>" + etelLista[index] + "</li>"
    }

}


function etelekFotokkal(etelLista, tartalomElemEz) {
    tartalomElemEz[1].innerHTML = ""
    for (let index = 0; index < etelLista.length; index++) {
        let etel = etelLista[index]
        let imgElem = document.createElement("img")
        imgElem.src = `kepek/${etel}.jpg`
        let divElem = document.createElement("div")
        divElem.classList.add("etel-foto")
        divElem.appendChild(imgElem)
        tartalomElemEz[1].appendChild(divElem)
    }
}

