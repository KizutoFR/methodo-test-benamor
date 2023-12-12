import {VérificateurPalindrome} from "../../src/validate.palindrome";
import {LangueFrançaise} from "../../src/langue.francais";
import {LangueInterface} from "../../src/langue.interface";
import { MomentDeLaJournee } from "../../src/moments";

export class VérificateurPalindromeBuilder {
    private _langue: LangueInterface = new LangueFrançaise();
    private _moment: MomentDeLaJournee = MomentDeLaJournee.Inconnu;

    public static Default() {
        return new VérificateurPalindromeBuilder().Build();
    }

    public Build(): VérificateurPalindrome {
        return new VérificateurPalindrome(this._langue, this._moment);
    }

    public AyantPourLangue(langue: LangueInterface): VérificateurPalindromeBuilder {
        this._langue = langue;
        return this;
    }

    public AyantPourMomentDeLaJournée(moment: MomentDeLaJournee): VérificateurPalindromeBuilder {
        this._moment = moment;
        return this;
    }
}