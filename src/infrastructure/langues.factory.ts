import { LangueInterface } from "../domain/langue.interface";
import { LangueAnglaise } from "../domain/langue.anglais";
import { LangueFrançaise } from "../domain/langue.francais";
import { SystemLocale } from "./system-locale";

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