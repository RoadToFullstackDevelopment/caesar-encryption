# Cifra de César

![alt text](/img/main-showcase.jpg "main showcase")

## Introdução

A empresa LOONA Tecnologies tem um grande projeto que vai ajudar milhares de pessoas: um robô chamado Rosy, especializado em limpeza. HaSeul, CEO da companhia, é uma fã incondicional do desenho animado "Os Jetsons" e a personagem favorita dela é justamente Rosie, um robô que ajuda a família Jetson na limpeza da casa. É claro que a Rosy seria um projeto muito mais avançado, porque seria um robô com Inteligência Artificial, ou seja, mais do que um simples robô faxineiro. Entretanto, a LOONA Tecnologies enfrenta a concorrência da companhia RBB Inc. e HaSeul acredita que essa empresa faria de tudo para roubar o projeto. - "Irene (CEO da RBB Inc.) é uma invejosa e sei que ela não mediria esforços para roubar e copiar um projeto nosso", dispara HaSeul. A solução encontrada foi o envio de mensagens criptografadas por meio da Cifra de César às demais funcionárias da empresa.

![alt text](/img/iPad-Air-showcase.jpg "main showcase")

## Afinal, o que é a Cifra de César?

A Cifra de César é uma das mais simples técnicas de criptografia de que se tem notícia. O processo consiste em trocar as posições das letras do alfabeto, por exemplo: o A se transformaria em D, B em E e assim por diante. Essa técnica recebeu esse nome em homenagem a Júlio César, que usava mensagens cifradas para comunicar-se com seus generais nos tempos de batalha. (Fonte: Wikipedia - https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)

![alt text](/img/iMac-showcase.jpg "iMac showcase")

## Objetivo do projeto

A Cifra de César é o primeiro projeto proposto às alunas da Laboratória, referente ao ***bootcamp*** de 2019.

![alt text](/img/iPhone8-showcase.jpg "iMac showcase")

## Algumas considerações

Ao utilizar alguns conhecimentos já adquiridos de experiência do usuário (UX), pensei nesse projeto como um aplicativo com uma interface simples e acessível, para que o usuário pudesse escolher o deslocamento desejado e não tivesse dificuldades em cifrar a mensagem desejada. Além dessas características, trata-se de uma página responsiva, pensada também para as pessoas que desejarem enviar mensagens criptografadas de um ***smartphone*** ou ***tablet***. Essa página foi elaborada em HTML, CSS e JavaScript puro (Vanilla JS), utilizando DOM para criar um sistema de codificação e decodificação de mensagens, considerando letras maiúsculas, minúsculas, números e caracteres especiais. Abaixo, apresento a estrutura do sistema de arquivos do projeto:

```text
./
├── .nyc_output
├── img
├── src
|   ├── TweenMax.min.js
|   ├── animation.js
│   ├── cipher.js
│   ├── index.js
│   └── style.css
├── test
│   ├── index.spec.js
├── .DS_Store
├── .gitignore
├── index.html
├── README.md
├── package-lock.json
├── package-json
```

Além de todas as etapas obrigatórias do projeto realizadas, incluí um botão para limpar o formulário.

![alt text](/img/Macbook-showcase.jpg "main showcase")

## O que foi feito

- [x] Elaboração de um arquivo `README.md` com imagens e explicações sobre o projeto
- [x] Uso de VanillaJS
- [x] Permitir a inclusão de um texto com letras maiúsculas e minúsculas para ser cifrado
- [x] Exibição do resultado correto da cifra
- [x] Permitir a inclusão de um texto com letras maiúsculas e minúsculas para ser decifrado
- [X] Mostrar o resultado decifrado corretamente
- [X] Permitir a escolha do `offset` (deslocamento) a ser usado na cifragem/decifragem de textos
- [x] Implementação da função única de codificação e decodificação `encode(string, offset)`
- [x] Implementação de deslocamento negativo ao decifrar mensagens