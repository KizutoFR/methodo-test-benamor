 export default function isPalindrome(message: string): boolean {
    const cleanedStr = message.toLowerCase().replace(/[\W_]/g, '');
    const reversedStr = reverseMessage(cleanedStr);
    return cleanedStr === reversedStr;
}

function reverseMessage(message: string): string {
    return message.split('').reverse().join('');
}
