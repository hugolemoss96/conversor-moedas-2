const converter = document.querySelector("#botao")
const selectMoeda = document.querySelector("#alterar-moeda")

function converterMoeda() {
    const valorDigitado = document.querySelector("#valor-digitado").value
    const valorConverter = document.querySelector("#valor-a-converter")
    const moedaConvertida = document.querySelector("#moeda-convertida")

    const dolarHoje = 5.07
    const euroHoje = 5.72
    const libraHoje = 6.62
    const bitcoinHoje = 412484.64


    if (selectMoeda.value == "dolar") {
        moedaConvertida.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorDigitado / dolarHoje)
    }

    if (selectMoeda.value == "euro") {
        moedaConvertida.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorDigitado / euroHoje)
    }

    if (selectMoeda.value == "libra"){
        moedaConvertida.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency:"GBP"
        }).format(valorDigitado/libraHoje)
    }

    if (selectMoeda.value == "bitcoin"){
        moedaConvertida.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency:"BTC", 
            currencyDisplay: "code",
            minimumFractionDigits:8
        }).format(valorDigitado/bitcoinHoje)
    }

    valorConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorDigitado)


}
function trocaMoeda (){
    const nomeMoeda = document.querySelector("#nome-moeda")
    const trocaLogo = document.querySelector("#moeda-troca")
    
    if(selectMoeda.value == "dolar") {
        nomeMoeda.innerHTML = "Dólar Americano"
        trocaLogo.src = "./img/dolar.png"
    }

     if(selectMoeda.value == "euro") {
        nomeMoeda.innerHTML = "Euro"
        trocaLogo.src = "./img/euro.png"
    }

     if(selectMoeda.value == "libra") {
        nomeMoeda.innerHTML = "Libra Estrelina"
        trocaLogo.src = "./img/libra.png"
     
    }

     if(selectMoeda.value == "bitcoin") {
        nomeMoeda.innerHTML = "BTC Bitcoin"
        trocaLogo.src = "./img/bitcoin.png"
        
    }
converterMoeda()
}



selectMoeda.addEventListener("change", trocaMoeda)
converter.addEventListener("click", converterMoeda)



