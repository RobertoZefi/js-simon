console.log('daje')

const numeriDaIndovinare = []
const numeriIndovinati = []

while(numeriDaIndovinare.length < 5){
    let randomNum = getRandomIntInclusive(1,100)
    if (!numeriDaIndovinare.includes(randomNum)){
        numeriDaIndovinare.push(randomNum)
    }
}

console.log(numeriDaIndovinare)
alert(numeriDaIndovinare)

setTimeout(tempo, 3000)



function tempo(){
    for(let i = 0; i < 5; i++){
        let numUtente = parseInt(prompt('Inserire numero')) 
        console.log(numUtente)
        if (numeriDaIndovinare.includes(numUtente)){
            numeriIndovinati.push(numUtente)
        }
    }
    console.log('Hai indovintato questi numeri: ', numeriIndovinati)
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }