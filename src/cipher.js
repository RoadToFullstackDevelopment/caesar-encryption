const encode = (string, offset) => {
    let result = ''
    offset = offset % 94
    for (let i = 0; i < string.length; i++) {
        let encodeCharacter = string.charCodeAt(i)
        if (encodeCharacter >= 32 & encodeCharacter <= 126) {
        result += String.fromCharCode(((encodeCharacter - 32 + offset) % 94) + 32)
        }
        else {
            result += string.charAt(i)
        }
    }
    return result
};

const decode = (string, offset) => {
    let result = '';
    offset = (94 - offset) % 94;
    result = encode(string, offset);
    return result;
}

export { encode, decode }