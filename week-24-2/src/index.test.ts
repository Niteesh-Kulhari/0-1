import { describe, expect, it, test } from "@jest/globals"
import { sum } from "./index"

describe('sum module', () => {
    test('add 1 + 2 to equal 3', ()=> {
        expect(sum(1, 2)).toBe(3); 
    })

    it('should return sum of negative numbers correctly', ()=> {
        expect(sum(-1, 3)).toBe(2);
    } )
})