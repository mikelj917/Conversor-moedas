import API_KEY from "./config.js";

let exchangeRate = null;

const apiRequest = async () => {
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`);
        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        const obj = await response.json();
        exchangeRate = obj.conversion_rates.BRL;

        document.getElementById("usd").disabled = false;
        document.getElementById("brl").disabled = false;
    } catch (error) {
        showError(error.message);
    }
};

function showError(message) {
    const bodyContent = document.querySelector('main');
    bodyContent.style.display = 'none';

    const headerContent = document.querySelector('header');
    headerContent.style.display = 'none';

    const errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'block';

    const errorText = document.getElementById('error-text');
    errorText.innerText = message;
}

apiRequest();

const usdInput = document.getElementById("usd");
const brlInput = document.getElementById("brl");

usdInput.disabled = true;
brlInput.disabled = true;

usdInput.addEventListener("input", handleUsdToBrl);
brlInput.addEventListener("input", handleBrlToUsd);

let isConverting = false

function sanitizeInput(input) {
    let value = input.value;

    value = value.replace(/[^0-9.]/g, '');

    if (value.startsWith(".")) {
        value = "0" + ".";
    }

    if (value.includes(".")) {
        const firstDotIndex = value.indexOf(".");
        value = value.slice(0, firstDotIndex + 1) + value.slice(firstDotIndex + 1).replace(/\./g, '') + value.slice(firstDotIndex + 3).replace(/./g, "");
    }

    input.value = value;
}

function handleUsdToBrl() {
    if (isConverting) return;
    isConverting = true;

    sanitizeInput(usdInput);

    if(usdInput.value == "") {
        brlInput.value = "0.00"
    };

    const usdValue = parseFloat(usdInput.value);
    if (!isNaN(usdValue)) {
        const brlValue = (usdValue * exchangeRate).toFixed(2);
        brlInput.value = brlValue;
    }

    isConverting = false;
}

function handleBrlToUsd() {
    if (isConverting) return;
    isConverting = true;

    sanitizeInput(brlInput);

    if(brlInput.value == "") {
        usdInput.value = "0.00"
    };

    const brlValue = parseFloat(brlInput.value);
    if (!isNaN(brlValue)) {
        const usdValue = (brlValue / exchangeRate).toFixed(2);
        usdInput.value = usdValue;
    }

    isConverting = false;
}