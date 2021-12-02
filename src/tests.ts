import { expect } from 'chai';
import { run } from './index';

describe('First Module', () => {

    it('ignore me', () => { });

    it('this should be ignored', async () => {
        // console.log(2);
        await run();

        // console.log(2);
    });
});
