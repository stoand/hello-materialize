import { expect } from 'chai';
import { run } from './index';

describe('First Module', () => {

    it('ignore me', () => { });

    it('this should be ignored', async () => {
        await run();
    });
});
