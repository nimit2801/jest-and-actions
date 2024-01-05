import { sum } from './index';

describe('index', () => {
    it('should return a number', () => {
        expect(typeof sum(1, 2)).toBe('number');
    });
});