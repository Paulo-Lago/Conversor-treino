const convert = document.getElementById("convert");
const moedaaconverter = document.querySelector("#moeda-a-converter");
const moedaaserconvertida = document.getElementById("moeda-a-ser-convertida");
const valormoedaconvertida = document.querySelector(".valor-moeda-convertida");
const descricaomoedaconvertida = document.querySelector(".descricao-moeda-convertida");
const imgcurrencyaconverter = document.querySelector(".img-currency-a-converter");
const descricaomoedaaserconvertida = document.querySelector(".descricao-moeda-a-converter");
const valormoedaaconverter = document.querySelector(".valor-moeda-a-converter");

const dolaremreal = 4.8709
const dolaremeuro = 0.9369
const dolarembitcoin = 0.000038
const dolaremlibra = 0.8066
const dolaremdolar = 1

const euroemreal = 5.1955
const euroemdolar = 1.0674
const euroemlibra = 0.8613
const euroembitcoin = 0.000041
const euroemeuro = 1

const libraemreal = 6.0350
const libraemdolar = 1.2397
const libraemeuro = 1.1613
const libraembitcoin = 0.000047
const libraemlibra = 1

const bitcoinemreal = 128312.28
const bitcoinemdolar = 26341.00
const bitcoinemeuro = 24683.36
const bitcoinemlibra = 21255.61
const bitcoinembitcoin = 1

const realemdolar = 0.2054
const realemeuro = 0.1924
const realemlibra = 0.1657
const realembitcoin = 0.0000078
const realemreal = 1


function calcular(){
    const input = document.querySelector("#input").value

    if(moedaaserconvertida.value == "dolar" && moedaaconverter.value == "dolar"){
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", 
            currency: "USD"
        }).format(input / dolaremdolar)
    }

    if(moedaaserconvertida.value == "dolar" && moedaaconverter.value == "real"){
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", 
            currency: "USD"
        }).format(input / dolaremreal)
    }

    if(moedaaserconvertida.value == "dolar" && moedaaconverter.value == "euro"){
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", 
            currency: "USD"
        }).format(input / dolaremeuro)
    }

    if(moedaaserconvertida.value == "dolar" && moedaaconverter.value == "bitcoin"){
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", 
            currency: "USD"
        }).format(input / dolarembitcoin)
    }

    if(moedaaserconvertida.value == "dolar" && moedaaconverter.value == "real"){
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", 
            currency: "USD"
        }).format(input / dolaremreal)
    }

    if(moedaaserconvertida.value == "euro" && moedaaconverter.value == "real"){
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", 
            currency: "EUR"
        }).format(input / euroemreal)
    }

    if(moedaaserconvertida.value == "euro" && moedaaconverter.value == "euro"){
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", 
            currency: "EUR"
        }).format(input / euroemeuro)
    }

    if(moedaaserconvertida.value == "euro" && moedaaconverter.value == "dolar"){
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", 
            currency: "EUR"
        }).format(input / euroemdolar)
    }

    if(moedaaserconvertida.value == "euro" && moedaaconverter.value == "libra"){
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", 
            currency: "EUR"
        }).format(input / euroemlibra)
    }

    if(moedaaserconvertida.value == "euro" && moedaaconverter.value == "bitcoin"){
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", 
            currency: "EUR"
        }).format(input / euroembitcoin)
    }

    if(moedaaserconvertida.value == "libra" && moedaaconverter.value == "libra"){
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency", 
            currency: "GBP"
        }).format(input / libraemlibra)
    }

    if(moedaaserconvertida.value == "libra" && moedaaconverter.value == "real"){
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency", 
            currency: "GBP"
        }).format(input / libraemreal)
    }

    if(moedaaserconvertida.value == "libra" && moedaaconverter.value == "dolar"){
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency", 
            currency: "GBP"
        }).format(input / libraemdolar)
    }

    if(moedaaserconvertida.value == "libra" && moedaaconverter.value == "euro"){
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency", 
            currency: "GBP"
        }).format(input / libraemeuro)
    }

    if(moedaaserconvertida.value == "libra" && moedaaconverter.value == "bitcoin"){
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency", 
            currency: "GBP"
        }).format(input / libraembitcoin)
    }

    if(moedaaserconvertida.value == "bitcoin" && moedaaconverter.value == "bitcoin"){
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", 
            currency: "BTC"
        }).format(input / bitcoinembitcoin)
    }

    if(moedaaserconvertida.value == "bitcoin" && moedaaconverter.value == "real"){
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", 
            currency: "BTC"
        }).format(input / bitcoinemreal)
    }

    if(moedaaserconvertida.value == "bitcoin" && moedaaconverter.value == "dolar"){
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", 
            currency: "BTC"
        }).format(input / bitcoinemdolar)
    }

    if(moedaaserconvertida.value == "bitcoin" && moedaaconverter.value == "euro"){
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", 
            currency: "BTC"
        }).format(input / bitcoinemeuro)
    }

    if(moedaaserconvertida.value == "bitcoin" && moedaaconverter.value == "libra"){
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", 
            currency: "BTC"
        }).format(input / bitcoinemlibra)
    }

    if(moedaaserconvertida.value == "real" && moedaaconverter.value == "real"){
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", 
            currency: "BRL"
        }).format(input / realemreal)
    }

    if(moedaaserconvertida.value == "real" && moedaaconverter.value == "dolar"){
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", 
            currency: "BRL"
        }).format(input / realemdolar)
    }

    if(moedaaserconvertida.value == "real" && moedaaconverter.value == "euro"){
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", 
            currency: "BRL"
        }).format(input / realemeuro)
    }

    if(moedaaserconvertida.value == "real" && moedaaconverter.value == "libra"){
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", 
            currency: "BRL"
        }).format(input / realemlibra)
    }

    if(moedaaserconvertida.value == "real" && moedaaconverter.value == "bitcoin"){
        valormoedaconvertida.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", 
            currency: "BRL"
        }).format(input / realembitcoin)
    }




    changecurancyconvert()
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
    if (moedaaserconvertida.value == "real") {
        descricaomoedaconvertida.innerHTML = "Real Brasileiro."
        currancyimg.src = "./Assets/real.png"
    }

    calcular()
}

function changecurancyconvert() {
    const currancyimg = document.getElementById("currancy-img");
    const input = document.querySelector("#input").value

    if (moedaaconverter.value == "real") {
        descricaomoedaaserconvertida.innerHTML = "Real Brasileiro."
        imgcurrencyaconverter.src = "./Assets/real.png"
        valormoedaaconverter.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", 
            currency: "BRL"
        }).format(input)
    }

    if (moedaaconverter.value == "dolar") {
        descricaomoedaaserconvertida.innerHTML = "Dólar Americano."
        imgcurrencyaconverter.src = "./Assets/dolar.png"
        valormoedaaconverter.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", 
            currency: "USD"
        }).format(input)
    }

    if (moedaaconverter.value == "euro") {
        descricaomoedaaserconvertida.innerHTML = "Euro."
        imgcurrencyaconverter.src = "./Assets/euro.png"
        valormoedaaconverter.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", 
            currency: "EUR"
        }).format(input)
    }

    if (moedaaconverter.value == "libra") {
        descricaomoedaaserconvertida.innerHTML = "Libra Esterlina."
        imgcurrencyaconverter.src = "./Assets/libra.png"
        valormoedaaconverter.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency", 
            currency: "GBP"
        }).format(input)
    }

    if (moedaaconverter.value == "bitcoin") {
        descricaomoedaaserconvertida.innerHTML = "Bitcoin."
        imgcurrencyaconverter.src = "./Assets/bitcoin.png"
        valormoedaaconverter.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", 
            currency: "BTC"
        }).format(input)
    }
}

convert.addEventListener("click", calcular);
moedaaserconvertida.addEventListener("change", currancychange);
moedaaconverter.addEventListener("click", changecurancyconvert);


