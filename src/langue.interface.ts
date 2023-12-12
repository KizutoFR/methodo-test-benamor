import { MomentDeLaJournee } from "./moments";

export interface LangueInterface {
    Féliciter(): string;

    Saluer(moment: MomentDeLaJournee): string;

    Acquitter(moment: MomentDeLaJournee): string
}