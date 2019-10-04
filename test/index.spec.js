const chai = require('chai');
const expect = chai.expect;
const caesarCipher = require('../src/cipher')

describe('Caesar library', () => {
    describe('encode', () => {
        it('encoding of lowercase alphabet letters without any space', () => {
            expect(caesarCipher.encode('abcdefghijklmnopqrstuvwxyz', 13)).to.equal('nopqrstuvwxyzabcdefghijklm');
        });

        it('decoding of lowercase alphabet letters without any space', () => {
            expect(caesarCipher.decode('nopqrstuvwxyzabcdefghijklm', 13)).to.equal('abcdefghijklmnopqrstuvwxyz');
        });

        it('encoding of lowercase alphabet letters with space', () => {
            expect(caesarCipher.encode('a b c d e f g h i j k l m n o p q r s t u v w x y z', 5)).to.equal('f g h i j k l m n o p q r s t u v w x y z a b c d e');
        });

        it('decoding of lowercase alphabet letters with space', () => {
            expect(caesarCipher.decode('f g h i j k l m n o p q r s t u v w x y z a b c d e', 5)).to.equal('a b c d e f g h i j k l m n o p q r s t u v w x y z');
        });

        it('encoding of uppercase alphabet letters without any space', () => {
            expect(caesarCipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 20)).to.equal('UVWXYZABCDEFGHIJKLMNOPQRST');
        });

        it('decoding of uppercase alphabet letters without any space', () => {
            expect(caesarCipher.decode('UVWXYZABCDEFGHIJKLMNOPQRST', 20)).to.equal('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        });

        it('encoding of uppercase alphabet letters with space', () => {
            expect(caesarCipher.encode('A B C D E F G H I J K L M N O P Q R S T U V W X Y Z', 3)).to.equal('D E F G H I J K L M N O P Q R S T U V W X Y Z A B C');
        });

        it('decoding of uppercase alphabet letters with space', () => {
            expect(caesarCipher.decode('D E F G H I J K L M N O P Q R S T U V W X Y Z A B C', 3)).to.equal('A B C D E F G H I J K L M N O P Q R S T U V W X Y Z');
        });

        it('encoding of a number sequence without any space', () => {
            expect(caesarCipher.encode('0123456789', 10)).to.equal('nopqrstuvwxyzabcdefghijklm');
        });
    });
});