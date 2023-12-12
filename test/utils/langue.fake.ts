import { LangueInterface } from "../../src/langue.interface";
import { MomentDeLaJournee } from "../../src/moments";

export class LangueFake implements LangueInterface {
    Féliciter(): string {
        return "Féliciter";
    }

    Saluer(moment: MomentDeLaJournee): string {
        return "Salut/" + moment.toString();
    }

    Acquitter(moment: MomentDeLaJournee): string {
        return "Acquitter/" + moment.toString();
    }
}