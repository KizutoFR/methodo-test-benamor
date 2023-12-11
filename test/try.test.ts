import { describe, expect, test } from "@jest/globals";
import * as os from "os";
import VerificateurPalindrome from "../utils/palindrome";

describe("On vérifie si l'entrée est un palindrome.", () => {
  const palindromes = [["kayak"]];
  const chaines = [["trucs"]];

  test.each([...chaines, ...palindromes])(
    "QUAND on saisit une chaine ALORS celle-ci est renvoyée en miroir.",
    (chaine: string) => {
      const res = VerificateurPalindrome.verifier(chaine);

      const miroir = chaine.split("").reverse().join("");

      expect(res).toContain(miroir);
    }
  );

  test.each(palindromes)(
    'QUAND on saisit un palindrome ALORS celui-ci est renvoyé ET "Bien dit" est envoyé ensuite.',
    (chaine: string) => {
      const res = VerificateurPalindrome.verifier(chaine);
      const miroir = chaine.split("").reverse().join("");
      expect(miroir).toEqual(chaine);
      expect(res).toContain(chaine + os.EOL + "Bien dit !");
    }
  );

  test.each([...chaines, ...palindromes])(
    "QUAND on saisit une chaine ALORS « Bonjour » est envoyé avant toute réponse.",
    (chaine: string) => {
      let miroir = chaine.split("").reverse().join("");
      const res = VerificateurPalindrome.verifier(chaine);
      expect(res.startsWith("Bonjour" + os.EOL)).toBe(true);
    }
  );

  test.each([...chaines, ...palindromes])(
    "QUAND on saisit une chaine ALORS « Au revoir » est envoyé en dernier.",
    (chaine: string) => {
      const res = VerificateurPalindrome.verifier(chaine);
      expect(res.endsWith(os.EOL + "Au revoir")).toBe(true);
    }
  );
});