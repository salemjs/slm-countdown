import {assert} from 'chai';
import {monthDiff} from '../src/util-month-diff.js';

describe('util-month-diff', function () {
    it('less than a month', function () {
        let diff = monthDiff(new Date('2022-02-01'), new Date('2022-02-22'));
        assert.equal(diff, 0);
        diff = monthDiff(new Date('2022-02-14'), new Date('2022-03-11'));
        assert.equal(diff, 0);
    });
    it('same month', function () {
        const diff = monthDiff(new Date('2022-02-01'), new Date('2022-02-28'));
        assert.equal(diff, 1);
    });
    it('one month cross months', function () {
        const diff = monthDiff(new Date('2022-02-12'), new Date('2022-03-11'));
        assert.equal(diff, 1);
    });
    it('one month cross years', function () {
        const diff = monthDiff(new Date('2022-12-12'), new Date('2023-01-11'));
        assert.equal(diff, 1);
    });
    it('one month from month is a full month', function () {
        const diff = monthDiff(new Date('2022-02-01'), new Date('2022-03-11'));
        assert.equal(diff, 1);
    });
    it('one month to month is a full month', function () {
        const diff = monthDiff(new Date('2022-02-15'), new Date('2022-03-31'));
        assert.equal(diff, 1);
    });
    it('two full months', function () {
        const diff = monthDiff(new Date('2022-02-01'), new Date('2022-03-31'));
        assert.equal(diff, 2);
    });
    it('two months cross years', function () {
        const diff = monthDiff(new Date('2022-12-12'), new Date('2023-02-11'));
        assert.equal(diff, 2);
    });
});
