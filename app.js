document.getElementById('encryptButton').addEventListener('click', encrypt);
document.getElementById('decryptButton').addEventListener('click', decrypt);

function encrypt() {
    let input = document.getElementById('inputText').value;
    if (input === "") {
        showMessage('Ningún mensaje fue encontrado');
        return;
    }

    let encryptedText = btoa(input); // Simple base64 encoding
    showMessage(encryptedText);
}

function decrypt() {
    let input = document.getElementById('inputText').value;
    if (input === "") {
        showMessage('Ningún mensaje fue encontrado');
        return;
    }

    try {
        let decryptedText = atob(input); // Simple base64 decoding
        showMessage(decryptedText);
    } catch (e) {
        showMessage('Texto inválido para desencriptar');
    }
}

function showMessage(message) {
    const outputText = document.querySelector('.output-text');
    outputText.textContent = message;
}
