const assert = require('assert');
const dbl = require('../double_consonants');

describe('double_consonants', function() {
    it('should turn karma into karmma', function() {
        assert.equal(dbl('karma'), 'karmma');
    });
});
