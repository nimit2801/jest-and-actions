import { randomNumber } from './randomNumber';

describe('randomNumber', () => {
    it('should return a number', () => {
        expect(typeof randomNumber()).toBe('number');
    });
});