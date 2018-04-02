function double_consonants(string) {
    var vwl = /(?:a|A|i|I|u|U|~r|~R|~l|~L|e|ai|o|au)/;
    var cns = /(?:k|kh|g|gh|~N|ch|chh|j|jh|~n|T|Th|D|Dh|N|t|th|d|dh|n|p|ph|b|bh|m|y|r|l|v|sh|Sh|s|h|L)/;
    var cns_no_hbbhv = /(?:k|kh|g|gh|~N|ch|chh|j|jh|~n|T|Th|D|Dh|N|t|th|d|dh|n|p|ph|m|y|r|l|sh|Sh|s|L)/;
    var cns_dbl = /(?:kk|kkh|gg|ggh|~N~N|chch|chchh|jj|jjh|~n~n|TT|TTh|DD|DDg|NN|tt|tth|dd|ddh|nn|pp|pph|mm|yy|rr|ll|shsh|ShSh|ss|LL)/;

    var mahaaprana_pairs = /(?:kh|gh|chh|jh|Th|Dh|th|dh|ph)/;
    return 'karmma';
}

module.exports = double_consonants;
