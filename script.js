const convert = document.getElementById("convert");
const moedaaserconvertida = document.getElementById("moeda-a-ser-convertida");
const valormoedaconvertida = document.querySelector(".valor-moeda-convertida");

const descricaomoedaconvertida = document.querySelector(".descricao-moeda-convertida");
const dolartoday = 4.87
const eurotoday = 5.18
const libratoday = 6.04
const bitcointoday = 129090.17
const realtoday = 1.0

function calcular(){
    const input = document.querySelector("#input").value

    if(moedaaserconvertida.value == "dolar"){
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", 
            currency: "USD"
        }).format(input / dolartoday)
    }
    
    if(moedaaserconvertida.value == "euro"){
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", 
            currency: "EUR"
        }).format(input / eurotoday)
    }
    
    if(moedaaserconvertida.value == "libra"){
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency", 
            currency: "GBP"
        }).format(input / libratoday)
    }
    
    if(moedaaserconvertida.value == "bitcoin"){
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", 
            currency: "BTC"
        }).format(input / bitcointoday)
    }
    
}

function currancychange() {
    const currancyimg = document.getElementById("currancy-img");
    if (moedaaserconvertida.value == "dolar") {
        descricaomoedaconvertida.innerHTML = "Dólar Americano."
        currancyimg.src = "./Assets/dolar.png"
    }
    if (moedaaserconvertida.value == "euro") {
        descricaomoedaconvertida.innerHTML = "Euro.."
        currancyimg.src = "./Assets/euro.png"
    }
    if (moedaaserconvertida.value == "libra") {
        descricaomoedaconvertida.innerHTML = "Libra Esterlina."
        currancyimg.src = "./Assets/libra.png"
    }
    if (moedaaserconvertida.value == "bitcoin") {
        descricaomoedaconvertida.innerHTML = "Bitcoin."
        currancyimg.src = "./Assets/bitcoin.png"
    }

    calcular()
}

convert.addEventListener("click", calcular);
moedaaserconvertida.addEventListener("change", currancychange);


