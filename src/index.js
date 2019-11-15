import { encode } from '../src/cipher.js';

const encodeDecodeButton = document.querySelectorAll('.encode-decode');
for (let i = 0; i < encodeDecodeButton.length; i++) {
    if (encodeDecodeButton[i].value === "Cifrar mensagem") {
        encodeDecodeButton[i].addEventListener('click', (event) => {
            event.preventDefault()
            let routeValue = parseInt(document.querySelector('#route').value);
            let encodeText = document.querySelector('#encode-message').value;
            return document.querySelector('#decode-message').value = encode(encodeText, routeValue);
        })
    }
    else {
        encodeDecodeButton[i].addEventListener('click', (event) => {
            event.preventDefault();
            let routeValue = parseInt(document.querySelector('#route').value) < 0;
            let encodeText = document.querySelector('#encode-message').value;
            return document.querySelector('#decode-message').value = encode(encodeText, routeValue);
        })
    }
}

const cleanButton = document.querySelector('#clean-form');
cleanButton.addEventListener('click', (event) => {
    event.preventDefault()
    document.querySelector('#message-form').reset();
});