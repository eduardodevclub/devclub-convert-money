const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelectFrom = document.getElementById("currency-select-from");

const taxas = {
  real: 1,
  dolar: 5.49,
  euro: 6.29,
  libra: 7.35,
  bitcoin: 575307.72,
  rublo: 0.07
};

function formatarMoeda(valor, moeda) {
  const formatos = {
    real: { style: "currency", currency: "BRL", locale: "pt-BR" },
    dolar: { style: "currency", currency: "USD", locale: "en-US" },
    euro: { style: "currency", currency: "EUR", locale: "de-DE" },
    libra: { style: "currency", currency: "GBP", locale: "en-GB" },
    bitcoin: { style: "decimal", locale: "en-US", min: 8, max: 8 },
    rublo: { style: "currency", currency: "RUB", locale: "ru-RU" },
  };

  const f = formatos[moeda];

  if (moeda === "bitcoin") {
    return new Intl.NumberFormat(f.locale, {
      style: f.style,
      minimumFractionDigits: f.min,
      maximumFractionDigits: f.max,
    }).format(valor) + " BTC";
  }

  return new Intl.NumberFormat(f.locale, {
    style: f.style,
    currency: f.currency,
  }).format(valor);
}

function convertValues() {
  const inputField = document.querySelector(".input-currency");
  const inputCurrencyValue = parseFloat(inputField.value.replace(",", "."));
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
  const currencyValueConverted = document.querySelector(".currency-value");

  const moedaOrigem = currencySelectFrom.value;
  const moedaDestino = currencySelect.value;

  if (isNaN(inputCurrencyValue)) {
    currencyValueConverted.innerHTML = "Valor inválido";
    return;
  }

  const valorConvertido = (inputCurrencyValue * taxas[moedaOrigem]) / taxas[moedaDestino];

  currencyValueToConvert.innerHTML = formatarMoeda(inputCurrencyValue, moedaOrigem);
  currencyValueConverted.innerHTML = formatarMoeda(valorConvertido, moedaDestino);
}

function changeCurrencyFrom() {
  const currencyFromImg = document.getElementById("currency-from-img");
  const currencyFromName = document.getElementById("currency-from-name");

  if (currencySelectFrom.value === "real") {
    currencyFromImg.src = "./assets/real.png";
    currencyFromName.innerHTML = "Real Brasileiro";
  }

  if (currencySelectFrom.value === "dolar") {
    currencyFromImg.src = "./assets/dolar.png";
    currencyFromName.innerHTML = "Dólar americano";
  }

  // Aqui você vai repetir o mesmo modelo para "euro", "real", etc.

  if (currencySelectFrom.value === "euro") {
    currencyFromImg.src = "./assets/euro.png";
    currencyFromName.innerHTML = "Euro";
  }

  if (currencySelectFrom.value === "libra") {
    currencyFromImg.src = "./assets/libra.png";
    currencyFromName.innerHTML = "Libra";
  }

  if (currencySelectFrom.value === "bitcoin") {
    currencyFromImg.src = "./assets/bitcoin.png";
    currencyFromName.innerHTML = "Biticoin";
  }

  if (currencySelectFrom.value === "rublo") {
    currencyFromImg.src = "./assets/rublo.png";
    currencyFromName.innerHTML = "Rublo";
  }

  const inputField = document.querySelector(".input-currency");

  if (currencySelectFrom.value === "real") {
    inputField.placeholder = "R$ 10.000,00";
  }

  if (currencySelectFrom.value === "dolar") {
    inputField.placeholder = "US$ 10,000.00";
  }

  if (currencySelectFrom.value === "euro") {
    inputField.placeholder = "€ 10.000,00";
  }

  if (currencySelectFrom.value === "libra") {
    inputField.placeholder = "£ 10.000,00";
  }

  if (currencySelectFrom.value === "bitcoin") {
    inputField.placeholder = "₿ 586.875,74";
  }

  if (currencySelectFrom.value === "rublo") {
    inputField.placeholder = "₽ 10.000,00";
  }

  convertValues(); // para atualizar o valor também
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-img");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano";
    currencyImage.src = "./assets/dolar.png";
  }

  if (currencySelect.value == "real") {
    currencyName.innerHTML = "Real Brasilero";
    currencyImage.src = "./assets/real.png";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./assets/euro.png";
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra";
    currencyImage.src = "./assets/libra.png";
  }

  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImage.src = "./assets/bitcoin.png";
  }

  if (currencySelect.value == "rublo") {
    currencyName.innerHTML = "Rublo";
    currencyImage.src = "./assets/Rublo.png";
  }

  convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
currencySelectFrom.addEventListener("change", changeCurrencyFrom);
convertButton.addEventListener("click", convertValues);
