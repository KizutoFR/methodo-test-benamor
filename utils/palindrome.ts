import * as os from "os";

export default class VerificateurPalindrome {
  public static verifier(str: string): string {
    if (!str) return "";

    let result = str.split("").reverse().join("");

    if (str === result) result += os.EOL + "Bien dit !";

    return "Bonjour" + os.EOL + result + os.EOL + "Au revoir";
  }
}