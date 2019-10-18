import { encode, decode } from './cipher.js'


const encodeButton = document.querySelector('#encode-text');
encodeButton.addEventListener('click', (event) => {
    event.preventDefault();
    let routeValue = parseInt(document.querySelector('#route').value);
    let encodeText = document.querySelector('#encode-message').value;
    return document.querySelector('#decode-message').value = encode(encodeText, routeValue);
});

const decodeButton = document.querySelector('#decode-text');
decodeButton.addEventListener('click', (event) => {
    event.preventDefault();
    let routeValue = parseInt(document.querySelector('#route').value);
    let decodeText = document.querySelector('#decode-message').value;
    return document.querySelector('#decode-message').value = decode(decodeText, routeValue);
});

const cleanButton = document.querySelector('#clean-form');
cleanButton.addEventListener('click', (event) => {
    event.preventDefault()
    document.querySelector('#message-form').reset();
});





