const chai = require('chai')
const expect = chai.expect
const cipher = require('../src/cipher')

describe('Caesar tests', () => {
    describe('encode', () => {
        it('Encoding of lowercase alphabet letters without any space', () => {
            expect(cipher.encode('abcdefghijklmnopqrstuvwxyz', 13)).to.equal('nopqrstuvwxyzabcdefghijklm')
        });

        it('Decoding of lowercase alphabet letters without any space', () => {
            expect(cipher.encode('nopqrstuvwxyzabcdefghijklm', -13)).to.equal('abcdefghijklmnopqrstuvwxyz')
        });

        it('Encoding of lowercase alphabet letters with space', () => {
            expect(cipher.encode('a b c d e f g h i j k l m n o p q r s t u v w x y z', 5)).to.equal('f g h i j k l m n o p q r s t u v w x y z a b c d e')
        });

        it('Decoding of lowercase alphabet letters with space', () => {
            expect(cipher.encode('f g h i j k l m n o p q r s t u v w x y z a b c d e', -5)).to.equal('a b c d e f g h i j k l m n o p q r s t u v w x y z')
        });

        it('Encoding of uppercase alphabet letters without any space', () => {
            expect(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 20)).to.equal('UVWXYZABCDEFGHIJKLMNOPQRST')
        });

        it('Decoding of uppercase alphabet letters without any space', () => {
            expect(cipher.encode('UVWXYZABCDEFGHIJKLMNOPQRST', -20)).to.equal('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
        });

        it('Encoding of uppercase alphabet letters with space', () => {
            expect(cipher.encode('A B C D E F G H I J K L M N O P Q R S T U V W X Y Z', 10)).to.equal('K L M N O P Q R S T U V W X Y Z A B C D E F G H I J')
        });

        it('Decoding of uppercase alphabet letters with space', () => {
            expect(cipher.encode('K L M N O P Q R S T U V W X Y Z A B C D E F G H I J', -10)).to.equal('A B C D E F G H I J K L M N O P Q R S T U V W X Y Z')
        });

        it('Encoding of short sentences', () => {
            expect(cipher.encode('Hello', 7)).to.equal('Olssv')
        });

        it('Decoding of short sentences', () => {
            expect(cipher.encode('Olssv', -7)).to.equal('Hello')
        });

        it('Encoding of sentences with offset greater than 26', () => {
            expect(cipher.encode('Vanity is the healthiest thing in life.', 35)).to.equal('Ejwrch rb cqn qnjucqrnbc cqrwp rw uron.')
        });

        it('Decoding of sentences with offset greater than 26', () => {
            expect(cipher.encode('Ejwrch rb cqn qnjucqrnbc cqrwp rw uron.', -35)).to.equal('Vanity is the healthiest thing in life.')
        });

        it('Encoding of long sentences with lowercase letters', () => {
            expect(cipher.encode('what you wear is how you present yourself to the world, especially today when human contacts go so fast. fashion is instant language.', 5)).to.equal('bmfy dtz bjfw nx mtb dtz uwjxjsy dtzwxjqk yt ymj btwqi, jxujhnfqqd ytifd bmjs mzrfs htsyfhyx lt xt kfxy. kfxmnts nx nsxyfsy qfslzflj.')
        });

        it('Decoding of long sentences with lowercase letters', () => {
            expect(cipher.encode('bmfy dtz bjfw nx mtb dtz uwjxjsy dtzwxjqk yt ymj btwqi, jxujhnfqqd ytifd bmjs mzrfs htsyfhyx lt xt kfxy. kfxmnts nx nsxyfsy qfslzflj.', -5)).to.equal('what you wear is how you present yourself to the world, especially today when human contacts go so fast. fashion is instant language.')
        });

        it('Encoding of long sentences with lowercase and uppercase letters', () => {
            expect(cipher.encode('What You Wear Is How You Present Yourself To The World, Especially Today When Human Contacts Go So Fast. Fashion Is Instant Language.', 40)).to.equal('Kvoh Mci Ksof Wg Vck Mci Dfsgsbh Mcifgszt Hc Hvs Kcfzr, Sgdsqwozzm Hcrom Kvsb Viaob Qcbhoqhg Uc Gc Togh. Togvwcb Wg Wbghobh Zobuious.');
        });

        it('Decoding of long sentences with lowercase and uppercase letters', () => {
            expect(cipher.encode('Kvoh Mci Ksof Wg Vck Mci Dfsgsbh Mcifgszt Hc Hvs Kcfzr, Sgdsqwozzm Hcrom Kvsb Viaob Qcbhoqhg Uc Gc Togh. Togvwcb Wg Wbghobh Zobuious.', -40)).to.equal('What You Wear Is How You Present Yourself To The World, Especially Today When Human Contacts Go So Fast. Fashion Is Instant Language.')
        });

        it('Encoding of long sentences with uppercase letters', () => {
            expect(cipher.encode('WHAT YOU WEAR IS HOW YOU PRESENT YOURSELF TO THE WORLD, ESPECIALLY TODAY WHEN HUMAN CONTACTS GO SO FAST. FASHION IS INSTANT LANGUAGE.', 18)).to.equal('OZSL QGM OWSJ AK ZGO QGM HJWKWFL QGMJKWDX LG LZW OGJDV, WKHWUASDDQ LGVSQ OZWF ZMESF UGFLSULK YG KG XSKL. XSKZAGF AK AFKLSFL DSFYMSYW.')
        });

        it('Decoding of long sentences with uppercase letters', () => {
            expect(cipher.encode('OZSL QGM OWSJ AK ZGO QGM HJWKWFL QGMJKWDX LG LZW OGJDV, WKHWUASDDQ LGVSQ OZWF ZMESF UGFLSULK YG KG XSKL. XSKZAGF AK AFKLSFL DSFYMSYW.', -18)).to.equal('WHAT YOU WEAR IS HOW YOU PRESENT YOURSELF TO THE WORLD, ESPECIALLY TODAY WHEN HUMAN CONTACTS GO SO FAST. FASHION IS INSTANT LANGUAGE.')
        });

        it('Encoding of sentences with much space', () => {
            expect(cipher.encode('Fashion      is      made      to      become      unfashionable.', 10)).to.equal('Pkcrsyx      sc      wkno      dy      lomywo      expkcrsyxklvo.')
        });

        it('Decoding of sentences with much space', () => {
            expect(cipher.encode('Pkcrsyx      sc      wkno      dy      lomywo      expkcrsyxklvo.', -10)).to.equal('Fashion      is      made      to      become      unfashionable.')
        });
    });
});