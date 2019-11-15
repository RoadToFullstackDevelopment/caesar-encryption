const encode = (string, offset) => {
    return String.fromCharCode(
        ...string.split('').map(char => ((char.charCodeAt() - 32 + (95 + offset % 95)) % 95) + 32),
    );
};

export { encode };