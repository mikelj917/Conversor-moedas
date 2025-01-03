const usdInput = document.getElementById("usd");
const brlInput = document.getElementById("brl");

usdInput.addEventListener("input", handleUsdToBrl);
brlInput.addEventListener("input", handleBrlToUsd);

const exchangeRate = 6.30;

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

    const brlValue = parseFloat(brlInput.value);
    if (!isNaN(brlValue)) {
        const usdValue = (brlValue / exchangeRate).toFixed(2);
        usdInput.value = usdValue;
    }

    isConverting = false;
}