import { encode } from '../src/cipher.js';

const cipherItems = ['encode-text', 'decode-text'].map(document.getElementById, document)
  
const idElements = ['encode-message', 'route', 'decode-message'].map(document.getElementById, document)
  
  for(let element of cipherItems) {
    if (element.value === 'Cifrar mensagem'){
        element.addEventListener('click', function(e){
          e.preventDefault()
          return idElements[2].value = encode(idElements[0].value, parseInt(idElements[1].value));
        })
      }
      else {
        element.addEventListener('click', function(e) {
          e.preventDefault()
          return idElements[2].value = encode(idElements[0].value, parseInt(idElements[1].value) < 0);
        })
      }
  }

const cleanButton = document.querySelector('#clean-form');
cleanButton.addEventListener('click', (event) => {
    event.preventDefault()
    document.querySelector('#message-form').reset();
});