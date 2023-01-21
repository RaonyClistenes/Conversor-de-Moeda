const button = document.querySelector('button')
const dolar = 5.2
const euro = 5.9
const moeda = document.querySelector('.moeda-selection')
const moedaConvertida = document.querySelector('.moeda-final')
const currencyBandeira = document.querySelector('.bandeira')

const convertValues = function () {
    const input = document.querySelector('.input-value').value
    const realValue = document.querySelector('.preço')
    const resultado = document.querySelector('.preço-final')

    realValue.innerHTML = new Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(input)

    if (moeda.value === '€ Euro') {
        resultado.innerHTML = (input / euro).toLocaleString('en-DE', { style: 'currency', currency: 'EUR' })

    } else {
        resultado.innerHTML = (input / dolar).toLocaleString('en-US', { style: 'currency', currency: 'USD' })

    }

}
const changeMoeda = function () {
    if (moeda.value === '€ Euro') {
        moedaConvertida.innerHTML = moeda.value
        currencyBandeira.src = "/assets/euro.svg"

    }
    else {
        moedaConvertida.innerHTML = 'Dólar americano'
        currencyBandeira.src = "/assets/estados-unidos (1) 1.svg"
    }
    convertValues()
}
button.addEventListener('click', convertValues)
moeda.addEventListener('change', changeMoeda)