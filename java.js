let button= document.getElementById('button')
let form= document.getElementById('form')
let message= document.getElementById('message')
let input= document.getElementById('input')
let link= document.getElementById('link')

const nombreMagique = Math.floor( Math.random )
const essaie = 4

button.onclick = () =>{
    if (input.value !=""){ 
        if (input.value > nombreMagique){
            message.innerText = "le nombre magique est plus petit"
            message.style.color = "blue"
        }
        
    }   
    else{
        message.innerText=" Desole le champ est vide"
        message.style.color = "red"
    }
}