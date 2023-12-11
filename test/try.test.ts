import {isPalindrome} from '../utils/palindrome'

test('is a palindrome', () => {
    const stringToTest ='kayak'
    expect(isPalindrome(stringToTest)).toBe(true);
});

test('is not a palindrome', () => {
    const stringToTest = 'is not a palindrome';
    expect(isPalindrome(stringToTest)).toBe(false);
});