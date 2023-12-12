import { MomentDeLaJournee } from "../domain/moments";

export class MomentFactory {
    fromDate(date: Date): MomentDeLaJournee {
        const hours = date.getHours();

        if (hours >= 6 && hours <= 12) {
            return MomentDeLaJournee.Matin;
        }

        if (hours > 12 && hours <= 18) {
            return MomentDeLaJournee.ApresMidi;
        }

        if (hours > 18 && hours <= 22) {
            return MomentDeLaJournee.Soir;
        }

        return MomentDeLaJournee.Nuit;
    }
}