import { MomentDeLaJournee } from "../../src/domain/moments";
import { MomentFactory } from "../../src/infrastructure/moment.factory";

const dates = [
  [new Date('2024-01-21T07:00:00.000Z'), MomentDeLaJournee.Matin],
  [new Date('2024-01-21T14:00:00.000Z'), MomentDeLaJournee.ApresMidi],
  [new Date('2024-01-21T21:00:00.000Z'), MomentDeLaJournee.Soir],
  [new Date('2024-01-21T03:00:00.000Z'), MomentDeLaJournee.Nuit],
];

describe('moment.factory.test.ts', () => {
  test.each(dates)(
    "ETANT DONNE une date" +
    "ALORS le MomentDeLaJournée correspondant est renvoyé ",
    (date: Date, momentDeLaJournee: MomentDeLaJournee) => {
      const moment: MomentDeLaJournee = new MomentFactory().fromDate(date);

      expect(moment.toString()).toEqual(momentDeLaJournee.toString());
    }
  )
})