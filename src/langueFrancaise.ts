import {LangueInterface} from "./langue.interface";
import {Expressions} from "./expressions";
import { MomentDeLaJournee } from "./momentDeLaJournee";

export class LangueFrançaise implements LangueInterface {
    public Acquitter(moment: MomentDeLaJournee): string {
        if(moment == MomentDeLaJournee.Soir || moment == MomentDeLaJournee.Nuit)
            return Expressions.BONSOIR;

        return Expressions.AU_REVOIR;
    }

    public Saluer(moment: MomentDeLaJournee): string {
        if(moment == MomentDeLaJournee.Soir || moment == MomentDeLaJournee.Nuit)
            return Expressions.BONSOIR;

        return Expressions.BONJOUR;
    }

    public Féliciter(): string {
        return Expressions.BIEN_DIT;
    }

    public toString(): string {
        return "Langue Française";
    }
}