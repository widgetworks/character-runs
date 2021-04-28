import { countRuns } from './index';

/**
* countRuns
*/
describe('countRuns', function(){
    
    it('handles empty string', function(){
        const result = countRuns('');
        expect(result).toEqual([]);
    });
    
    
    it('counts same letter', function(){
        const result = countRuns('aaaaaa');
        expect(result).toEqual([
            ['a', 6],
        ]);
    });
    
    
    it('counts all letters', function(){
        const result = countRuns('abcde');
        expect(result).toEqual([
            ['a', 1],
            ['b', 1],
            ['c', 1],
            ['d', 1],
            ['e', 1],
        ]);
    });
    
    
    it('counts multiple character runs', function(){
        const result = countRuns('aaaabbbcca');
        expect(result).toEqual([
            ['a', 4],
            ['b', 3],
            ['c', 2],
            ['a', 1],
        ]);
    });
    
    
    it('handles trailing group', function(){
        const result = countRuns('aaaabbbccaaa');
        expect(result).toEqual([
            ['a', 4],
            ['b', 3],
            ['c', 2],
            ['a', 3],
        ]);
    });
    
});
// End of 'countRuns'