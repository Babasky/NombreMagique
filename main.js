let button = document.getElementById('button')
let form = document.getElementById('form')
let input = document.getElementById('input')
let message = document.getElementById('message')
let link = document.getElementById('link')

const nombreMagique = Math.floor( Math.random() * 10)
let essai = 3

button.onclick = () =>{
    if(input.value != ""){
        if(input.value > nombreMagique){
            message.innerText = "Le nombre magique est plus pétit"
            message.style.color = "blue"
        }else if(input.value < nombreMagique){
            message.innerText = "Le nombre magique est plus grand"
            message.style.color = "orange"
        }else if(input.value == nombreMagique){
            message.innerText = "Bravo, vous avez trouvé le nombre magique"
            message.style.color = "green"
            form.style.display = "none"
            link.style.display = "block"
           
        }
        if (essai == 0) {
            message.innerText = "Vous avez perdu"
            message.style.color = "red"
            form.style.display = "none"
            link.style.display = "block"
        }
        essai--

    }else{
        message.innerText = "Le champ est vide"
        message.style.color = "red"
    }
}