import isPalindrome from '../utils/palindrome'
import { welcomeMessage, endMessage } from '../utils/date';
beforeAll(() => {
    console.log(welcomeMessage);
});

test('Bien dit', () => {
    const stringToTest ='kayak'
    expect(isPalindrome(stringToTest)).toBe(true);
});

test('is not a palindrome', () => {
    const stringToTest = 'is not a palindrome';
    expect(isPalindrome(stringToTest)).toBe(false);
});

afterAll(() => {
    console.log(endMessage);
});