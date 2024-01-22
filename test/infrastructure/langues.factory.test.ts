import { LangueAnglaise } from "../../src/domain/langue.anglais";
import { LangueFrançaise } from "../../src/domain/langue.francais";
import { LangueInterface } from "../../src/domain/langue.interface";
import { LanguesFactory } from "../../src/infrastructure/langues.factory";
import { SystemLocale } from "../../src/infrastructure/system-locale";

const langues = [
  [SystemLocale.Enlish, new LangueAnglaise()],
  [SystemLocale.French, new LangueFrançaise()],
  ['zh-CN', new LangueAnglaise()],
];

describe('moment.factory.test.ts', () => {
  test.each(langues)(
    "ETANT DONNE une langue" +
    "ALORS la langue correspondante est renvoyé",
    (locale: string, attendu: LangueInterface) => {
      const langue: LangueInterface = new LanguesFactory().build(locale);

      expect(attendu).toEqual(langue);
    }
  )
})