const USD = 4.87
const EUR = 5.32
const GBP = 6.08

const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result");

amount.addEventListener("input", () => {
    const regexCharacters = /\D+/g
    amount.value = amount.value.replace(regexCharacters, '')
})

form.onsubmit = (e) => {
    e.preventDefault();

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
    }
}

function convertCurrency(amount, price, symbol) {

    try {

        description.textContent = `${symbol} 1 = ${formatCurrency(price)}`

        let total = amount * price

        if (isNaN(total)) {
            alert("Digite o valor corretamente!")
        }

        result.textContent = `${formatCurrency(total)}`

        footer.classList.add("show-result")
    } catch (error) {
        footer.classList.remove("show-result")
    }
}

function formatCurrency(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}