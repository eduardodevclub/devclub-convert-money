const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  ); //Valor Real
  const currencyValueConverted = document.querySelector(".currency-value"); //Outras moedas

  const dolarToday = 5.49;
  const euroToday = 6.29;
  const libraToday = 7.35; // exemplo fictício, troque pela cotação real
  const bitcoinToday = 575.307,72 // exemplo bitcoin

  if (currencySelect.value == "dolar") {
    // Se o selct estiver selecinado o valor de dolar, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value == "euro") {
    // Se o selct estiver selecinado o valor de euro, entre aqui
    currencyValueConverted.innerHTML = Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  if (currencySelect.value == "libra") {
    // Se o select estiver selecionado o valor de libra, entre aqui
    currencyValueConverted.innerHTML = Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday);
  }

  if (currencySelect.value == "bitcoin") {
    // Se o select estiver selecionado o valor de bitcoin, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 6,
      maximumFractionDigits: 8,
    }).format(inputCurrencyValue / bitcoinToday);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-img");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano";
    currencyImage.src = "./assets/dolar.png";
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

  convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
