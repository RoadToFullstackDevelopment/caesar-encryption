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
            expect(caesarCipher.encode('0123456789', 4)).to.equal('456789:;<=');
        });

        it('decoding of a number sequence without any space', () => {
            expect(caesarCipher.decode('456789:;<=', 4)).to.equal('0123456789');
        });

        it('encoding of a number sequence with space', () => {
            expect(caesarCipher.encode('0 1 2 3 4 5 6 7 8 9', 5)).to.equal('5 6 7 8 9 : ; < = >');
        });

        it('decoding of a number sequence with space', () => {
            expect(caesarCipher.decode('5 6 7 8 9 : ; < = >', 5)).to.equal('0 1 2 3 4 5 6 7 8 9');
        });

        it('encoding of another characters', () => {
            expect(caesarCipher.encode('Olá! Como vai você?', 20)).to.equal('Ifõ5 Wigi puc piwþ2');
        });

        it('decoding of another characters', () => {
            expect(caesarCipher.decode('Ifõ5 Wigi puc piwþ2', 20)).to.equal('Olá! Como vai você?');
        });

        it('encoding with offset greater than 25', () => {
            expect(caesarCipher.encode('I have my favourite fashion decade, yes, yes, yes: the 60s. It was a sort of little revolution; the clothes were amazing but not too exaggerated.', 35)).to.equal('R qjen vh ojexdarcn ojbqrxw mnljmn. hnb. hnb. hnb< cqn 82b0 Rc fjb j bxac xo urccun anexudcrxw= cqn luxcqnb fnan jvjirwp kdc wxc cxx ngjppnajcnm0');
        });

        it('decoding with offset greater than 25', () => {
            expect(caesarCipher.decode('R qjen vh ojexdarcn ojbqrxw mnljmn. hnb. hnb. hnb< cqn 82b0 Rc fjb j bxac xo urccun anexudcrxw= cqn luxcqnb fnan jvjirwp kdc wxc cxx ngjppnajcnm0', 35)).to.equal('I have my favourite fashion decade, yes, yes, yes: the 60s. It was a sort of little revolution; the clothes were amazing but not too exaggerated.');
        });

        it('encoding of a big sentence with lowercase letters', () => {
            expect(caesarCipher.encode('money is the most corrosive aspect of life today because it means that all attention to detail is forgotten.', 15)).to.equal('bdctn xh iwt bdhi rdggdhxkt phetri du axut idspn qtrpjht xi btpch iwpi paa piitcixdc id stipxa xh udgvdiitc=');
        });

        it('decoding of a big sentence with lowercase letters', () => {
            expect(caesarCipher.decode('bdctn xh iwt bdhi rdggdhxkt phetri du axut idspn qtrpjht xi btpch iwpi paa piitcixdc id stipxa xh udgvdiitc=', 15)).to.equal('money is the most corrosive aspect of life today because it means that all attention to detail is forgotten.');
        });

        it('encoding of a big sentence with uppercase letters', () => {
            expect(caesarCipher.encode('MONEY IS THE MOST CORROSIVE ASPECT OF LIFE TODAY BECAUSE IT MEANS THAT ALL ATTENTION TO DETAIL IS FORGOTTEN.', 20)).to.equal('GIHYS CM NBY GIMN WILLIMCPY UMJYWN IZ FCZY NIXUS VYWUOMY CN GYUHM NBUN UFF UNNYHNCIH NI XYNUCF CM ZILAINNYH!');
        });

        it('decoding of a big sentence with uppercase letters', () => {
            expect(caesarCipher.decode('GIHYS CM NBY GIMN WILLIMCPY UMJYWN IZ FCZY NIXUS VYWUOMY CN GYUHM NBUN UFF UNNYHNCIH NI XYNUCF CM ZILAINNYH!', 20)).to.equal('MONEY IS THE MOST CORROSIVE ASPECT OF LIFE TODAY BECAUSE IT MEANS THAT ALL ATTENTION TO DETAIL IS FORGOTTEN.');
        });

        it('encoding of a big sentence with lowercase letters and uppercase letters', () => {
            expect(caesarCipher.encode('Money is the most corrosive aspect of life today because it means that all attention to detail is forgotten.', 4)).to.equal('Qsric mw xli qswx gsvvswmzi ewtigx sj pmji xshec figeywi mx qierw xlex epp exxirxmsr xs hixemp mw jsvksxxir2');
        });

        it('decoding of a big sentence with lowercase letters and uppercase letters', () => {
            expect(caesarCipher.decode('Qsric mw xli qswx gsvvswmzi ewtigx sj pmji xshec figeywi mx qierw xlex epp exxirxmsr xs hixemp mw jsvksxxir2', 4)).to.equal('Money is the most corrosive aspect of life today because it means that all attention to detail is forgotten.');
        });

        it('encoding of dates with lowercase letters', () => {
            expect(caesarCipher.encode('03 de outubro de 2019', 10)).to.equal(':= no yedelby no <:;"');
        });

        it('decoding of dates with lowercase letters', () => {
            expect(caesarCipher.decode(':= no yedelby no <:;"', 10)).to.equal('03 de outubro de 2019');
        });

        it('encoding of dates with uppercase letters', () => {
            expect(caesarCipher.encode('03 DE OUTUBRO DE 2019', 3)).to.equal('36 GH RXWXEUR GH 534<');
        });

        it('decoding of dates with uppercase letters', () => {
            expect(caesarCipher.decode('36 GH RXWXEUR GH 534<', 3)).to.equal('03 DE OUTUBRO DE 2019');
        });

        it('encoding of a big sentence with much space', () => {
            expect(caesarCipher.encode('Everything      I      do      is      a      matter      of      HEART,      BODY      and      SOUL.', 5)).to.equal('Jajwdymnsl      N      it      nx      f      rfyyjw      tk      MJFWY1      GTID      fsi      XTZQ3');
        });

        it('decoding of a big sentence with much space', () => {
            expect(caesarCipher.decode('Jajwdymnsl      N      it      nx      f      rfyyjw      tk      MJFWY1      GTID      fsi      XTZQ3', 5)).to.equal('Everything      I      do      is      a      matter      of      HEART,      BODY      and      SOUL.');
        });
    });
});