import { MomentDeLaJournee } from "./momentDeLaJournee";

export interface LangueInterface {
    Féliciter(): string;

    Saluer(moment: MomentDeLaJournee): string;

    Acquitter(moment: MomentDeLaJournee): string
}