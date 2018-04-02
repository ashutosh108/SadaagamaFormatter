const assert = require('assert');
const dbl = require('../double_consonants');

describe('double_consonants', function() {
    var pairs = [
        ["arkaH", "arkkaH"],
        ["svargaH", "svarggaH"],
        ["pArthaH", "pArtthaH"],
        ["karma", "karmma"],
        ["sUryaH", "sUryyaH"],
        ["durlabhaH", "durllabhaH"],
        ["brahmA", "brahmA"],
        ["sudarshanaH", "sudarshanaH"],
        ["karShati", "karShati"],
        ["sarvam", "sarvam"],
        ["arbudam", "arbudam"],
        ["garbhaH", "garbhaH"],
        ["brahmA", "brahmA"],
        ["vahniH", "vahniH"],
        ["jAhnavI", "jAhnavI"],
    ];
    pairs.forEach(function(pair) {
        var a = pair[0];
        var b = pair[1];
        it(a + ' => ' + b, function() {
            assert.equal(b, dbl(a));
        });
        if (a !== b) {
            it(b + ' => ' + b, function() {
                assert.equal(b, dbl(b));
            });
        }
    });
});
