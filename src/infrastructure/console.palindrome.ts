import { LangueInterface } from "../domain/langue.interface";
import { MomentDeLaJournee } from "../domain/moments";
import { VérificateurPalindrome } from "../domain/validate.palindrome";
import { timeToMoment } from "./moments.range";
import readline, { Interface } from 'readline';
import * as os from 'os';
import { LanguesFactory } from "./langues.factory";

export class PalindromeConsole {
    private readonly _input: NodeJS.ReadableStream = process.stdin;
    private readonly _output: NodeJS.WritableStream = process.stdout;

    private readonly _rl: Interface = readline.createInterface({
        input: this._input,
        output: this._output
    });

    private readonly _exitWord = 'exit';

    constructor(input?: NodeJS.ReadableStream, output?: NodeJS.WritableStream) {
        if (input) this._input = input;
        if (output) this._output = output;
    }

    start() {
        this._rl.question('Entrez une chaine de characteres a verifier: (type exit to close)' + os.EOL, (stringToTest: string) => {
            if (stringToTest === this._exitWord) return this._rl.close();

            const now: Date = new Date();
            const locale: string = Intl.DateTimeFormat().resolvedOptions().locale;
        
            const langue: LangueInterface = new LanguesFactory().build(locale);
            const moment: MomentDeLaJournee = timeToMoment(now);
        
            const palindrome = new VérificateurPalindrome(langue, moment);
            console.log(palindrome.Vérifier(stringToTest))
            this.start();
        })
    }
}