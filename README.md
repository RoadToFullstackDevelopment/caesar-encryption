# Cifra de César


## Biblioteca de testes da Cifra de César v1.0.0

Esta biblioteca destina-se a testes com a Cifra de César.

### Instalação:

```
$ npm install caesar-cipher-lib
```

### Uso para codificação:

```
const encodeText = require("caesar-cipher-lib");
console.log(encodeText("Penso, logo existo.", 5))
// returns "Ujsxt1 qtlt jcnxyt3"
```

### Uso para decodificação:

```
const decodeText = require("caesar-cipher-lib");
console.log(decodeText("Ujsxt1 qtlt jcnxyt3", 5))
// returns "Penso, logo existo"
```