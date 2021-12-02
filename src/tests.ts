import { expect } from 'chai';
import { asdf } from './index';

describe('First Module', () => {

    it('', () => {});
    
    it('this should work', () => {
        expect(1).to.equal(2);
    });
    
    it('this should be ignored', () => {
        // console.log(2);
        asdf();
        
        // console.log(2);
    });
});
