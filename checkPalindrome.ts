import readline from 'readline';
import isPalindrome from './utils/palindrome'
import { welcomeMessage, endMessage } from './utils/date';

console.log(welcomeMessage);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Entrez une chaîne de caractères à vérifier : ', (stringToTest: string) => {
    rl.close();
    if (isPalindrome(stringToTest)) {
        console.log('La chaîne est un palindrome.');
    } else {
        console.log('La chaîne n\'est pas un palindrome.');
    }

    console.log(endMessage);
    process.exit();
});
