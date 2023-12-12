import {LangueFrançaise} from "../src/langue.francais";
import {Expressions} from "../src/expressions";
import {LangueAnglaise} from "../src/langue.anglais";
import {LangueInterface} from "../src/langue.interface";
import {MomentDeLaJournee} from "../src/moments";

describe("Langues", () => {
    test.each([
        [new LangueFrançaise(), MomentDeLaJournee.Inconnu, Expressions.BONJOUR],
        [new LangueFrançaise(), MomentDeLaJournee.Matin, Expressions.BONJOUR],
        [new LangueFrançaise(), MomentDeLaJournee.ApresMidi, Expressions.BONJOUR],
        [new LangueFrançaise(), MomentDeLaJournee.Soir, Expressions.BONSOIR],
        [new LangueFrançaise(), MomentDeLaJournee.Nuit, Expressions.BONSOIR],
        [new LangueAnglaise(), MomentDeLaJournee.Inconnu, Expressions.HELLO],
        [new LangueAnglaise(), MomentDeLaJournee.Matin, Expressions.GOOD_MORNING],
        [new LangueAnglaise(), MomentDeLaJournee.ApresMidi, Expressions.GOOD_AFTERNOON],
        [new LangueAnglaise(), MomentDeLaJournee.Soir, Expressions.GOOD_EVENING],
        [new LangueAnglaise(), MomentDeLaJournee.Nuit, Expressions.GOOD_NIGHT],
    ])("En %s on salue le %s par '%s'",
        (langue: LangueInterface, moment: MomentDeLaJournee, attendu: string) => {
        expect(langue.Saluer(moment)).toBe(attendu)
    })
});