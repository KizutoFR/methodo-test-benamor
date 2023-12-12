import { LangueInterface } from "../domain/langue.interface";
import { LangueAnglaise } from "../domain/langue.anglais";
import { LangueFrançaise } from "../domain/langue.francais";

export class SystemLocale {
    public static Enlish: string = 'en-US';
    public static French: string = 'fr-FR';
}

export class LanguesFactory {
    build(locale: string): LangueInterface {
        switch(locale) {
            case SystemLocale.Enlish:
                return new LangueAnglaise();
            case SystemLocale.French:
                return new LangueFrançaise();
            default:
                return new LangueAnglaise();
        }
    }
}