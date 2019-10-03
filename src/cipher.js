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