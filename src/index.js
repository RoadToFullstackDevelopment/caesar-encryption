const encodeButton = document.querySelector('#encodeText');
encodeButton.addEventListener('click', (event) => {
    event.preventDefault();
    let routeValue = parseInt(document.querySelector('#route').value);
    let encodeText = document.querySelector('#encodeMessage').value;
    return document.querySelector('#decodeMessage').value = encode(encodeText, routeValue);
});

const decodeButton = document.querySelector('#decodeText');
decodeButton.addEventListener('click', (event) => {
    event.preventDefault();
    let routeValue = parseInt(document.querySelector('#route').value);
    let decodeText = document.querySelector('#decodeMessage').value;
    return document.querySelector('#decodeMessage').value = decode(decodeText, routeValue);
});

const cleanButton = document.querySelector('#cleanForm');
cleanButton.addEventListener('click', (event) => {
    document.querySelector('#messageForm').reset();
});

const encode = (string, offset) => {
    let result = ''
    for (let i = 0; i < string.length; i++) {
        let encodedCharacter = string.charCodeAt(i)
        if (encodedCharacter >= 33 & encodedCharacter <= 64) {
        result += String.fromCharCode(((encodedCharacter - 32 + offset) % 33) + 32)
        }
        else if (encodedCharacter >= 65 & encodedCharacter <= 90) {
        result += String.fromCharCode(((encodedCharacter - 65 + offset) % 26) + 65)
        }
        else if (encodedCharacter >= 97 & encodedCharacter <= 122) {
        result += String.fromCharCode(((encodedCharacter - 97 + offset) % 26) + 97)
        }
        else if (encodedCharacter >= 192 & encodedCharacter <= 255) {
        result += String.fromCharCode(((encodedCharacter - 192 + offset) % 64) + 192)
        }
        else {
        result += string.charAt(i)
        }
    }
return result
}

const decode = (string, offset) => {
    let result = ''
    for (let i = 0; i < string.length; i++) {
        let encodedCharacter = string.charCodeAt(i)
        if (encodedCharacter >= 33 & encodedCharacter <= 64) {
            result += String.fromCharCode(((encodedCharacter - 64 - offset) % 33) + 64)
        }
        else if (encodedCharacter >= 65 & encodedCharacter <= 90) {
            result += String.fromCharCode(((encodedCharacter - 90 - offset) % 26) + 90)
        }
        else if (encodedCharacter >= 97 & encodedCharacter <= 122) {
            result += String.fromCharCode(((encodedCharacter - 122 - offset) % 26) + 122)
        }
        else if (encodedCharacter >= 192 & encodedCharacter <= 255) {
            result += String.fromCharCode(((encodedCharacter - 255 - offset) % 64) + 255)
        }
        else {
            result += string.charAt(i)
        }
    }
    return result
}

const enterButton = document.querySelector('.myButton');
enterButton.addEventListener('click', () => {
    TweenMax.to('.myButton', 1, {
        y: -100,
        opacity: 0
    });

    TweenMax.to('.screen', 2, {
        y: -400,
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 2
    });

    TweenMax.from('.overlayOne', 2, {
        ease: Power2.easeInOut
    });

    TweenMax.to('.overlayOne', 2, {
        delay: 2.6,
        top: '-110%',
        ease: Expo.easeInOut 
    });

    TweenMax.to('.overlayTwo', 2, {
        delay: 3,
        top: '-110%',
        ease: Expo.easeInOut 
    });

    TweenMax.from('.content', 2, {
        delay: 3.8,
        opacity: 0,
        ease: Power2.easeInOut
    });

    TweenMax.to('.content', 2, {
        opacity: 1,
        y: -300,
        delay: 3.8,
        ease: Power2.easeInOut
    });

})

