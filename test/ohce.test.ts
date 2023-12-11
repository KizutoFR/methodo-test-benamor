import * as os from "os";
import {Expressions} from "../src/expressions";
import {LangueFrançaise} from "../src/langueFrancaise";
import {VérificateurPalindromeBuilder} from "../utils/verificateurPalindromeBuilder";
import {LangueAnglaise} from "../src/langueAnglaise";
import {LangueInterface} from "../src/langue.interface";

const palindrome = 'radar';
const nonPalindromes = ['test', 'ynov']

describe("test works", () => {
    test.each([...nonPalindromes])(
        "QUAND on saisit un non-palindrome %s " +
        "ALORS elle est renvoyée en miroir",
        (chaîne: string) => {
            let résultat = VérificateurPalindromeBuilder.Default().Vérifier(chaîne);

            let attendu = chaîne.split('').reverse().join('');
            expect(résultat).toContain(attendu);
        });

    test.each([
        [new LangueFrançaise(), Expressions.BIEN_DIT],
        [new LangueAnglaise(), Expressions.WELL_SAID],
    ])("ETANT DONNE un utilisateur parlant la %s " +
        "QUAND on saisit un palindrome " +
        "ALORS celui-ci est renvoyé " +
        "ET '%s' est envoyé ensuite",
        (langue: LangueInterface, attendu: string) => {
            let vérificateur = new VérificateurPalindromeBuilder()
                .AyantPourLangue(langue)
                .Build();

            let résultat = vérificateur.Vérifier(palindrome);

            expect(résultat).toContain(palindrome + os.EOL + attendu);
        });

    test.each([...nonPalindromes, palindrome])(
        'ETANT DONNE un utilisateur parlant français ' +
        'QUAND on saisit une chaîne %s ' +
        'ALORS "Bonjour" est envoyé avant toute réponse',
        (chaîne: string) => {
            const langue = new LangueFrançaise();
            let vérificateur =
                new VérificateurPalindromeBuilder()
                    .AyantPourLangue(langue)
                    .Build();

            let résultat = vérificateur.Vérifier(chaîne);

            let premièreLigne = résultat.split(os.EOL)[0];
            expect(premièreLigne).toEqual(Expressions.BONJOUR)
        });

    test.each([...nonPalindromes, palindrome])(
        'ETANT DONNE un utilisateur parlant anglais ' +
        'QUAND on saisit une chaîne %s ' +
        'ALORS "Hello" est envoyé avant toute réponse',
        (chaîne: string) => {
            const langue = new LangueAnglaise();
            let vérificateur =
                new VérificateurPalindromeBuilder()
                    .AyantPourLangue(langue)
                    .Build();

            let résultat = vérificateur.Vérifier(chaîne);

            let premièreLigne = résultat.split(os.EOL)[0];
            expect(premièreLigne).toEqual(Expressions.HELLO)
        });

    test.each([...nonPalindromes, palindrome])('QUAND on saisit une chaîne %s ' +
        'ALORS "Au revoir" est envoyé en dernier.',
        (chaîne: string) => {
            let résultat = VérificateurPalindromeBuilder.Default().Vérifier(chaîne);

            let lignes = résultat.split(os.EOL);
            let dernièreLigne = lignes[lignes.length - 1];
            expect(dernièreLigne).toEqual(Expressions.AU_REVOIR)
        });
});