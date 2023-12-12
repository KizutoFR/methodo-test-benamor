import * as os from "os";
import {LangueInterface} from "./langue.interface";
import { MomentDeLaJournee } from "./moments";

export class VérificateurPalindrome {
    private readonly _langue: LangueInterface;
    private readonly _moment: MomentDeLaJournee = MomentDeLaJournee.Inconnu;

    constructor(langue: LangueInterface, moment: MomentDeLaJournee) {
        this._langue = langue;
        this._moment = moment;
    }

    public Vérifier(chaîne: string): string {
        let miroir = chaîne.split('').reverse().join('');

        let sortie = this._langue.Saluer(this._moment) + os.EOL + miroir + os.EOL;

        if (miroir == chaîne)
            sortie += this._langue.Féliciter() + os.EOL;

        return sortie + this._langue.Acquitter(this._moment);
    }
}