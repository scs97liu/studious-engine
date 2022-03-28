import { stringToDecimal } from "../functions/stringToDecimal";

describe ('function: stringToDecimal', () => {
    it('returns a number that rounds to nearest two decimals', () => {
        expect(stringToDecimal("22.92500002")).toBe(22.93)
    })
})