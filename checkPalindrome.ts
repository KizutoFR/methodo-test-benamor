import readline from 'readline';
import { isPalindrome, reverseMessage } from './utils/palindrome'
import { welcomeMessage, endMessage } from './utils/date';

console.log(welcomeMessage);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Entrez une chaîne de caractères à vérifier : ', (stringToTest: string) => {
    rl.close();
    console.log(reverseMessage(stringToTest))
    if (isPalindrome(stringToTest)) {
        console.log('Bien Dit');
    }
    console.log(endMessage);
    process.exit();
});
