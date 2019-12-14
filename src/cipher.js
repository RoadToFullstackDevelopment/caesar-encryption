const encode = (text, shift) => {
    if (shift < 0) {
      shift = 26 + (shift % 26);
    }
    return (
      text
        .split("")
        .map.call(text, function(char) {
          let cipherChar = char.charCodeAt(0);
          if (cipherChar >= 65 && cipherChar <= 90) {
            return String.fromCharCode((cipherChar - 65 + shift) % 26 + 65);
          }
          else if (cipherChar >= 97 && cipherChar <= 122){
            return String.fromCharCode((cipherChar - 97 + shift) % 26 + 97);
          }
          else {
            return char
          }
        })
        .join("")
    );
  }

export { encode };