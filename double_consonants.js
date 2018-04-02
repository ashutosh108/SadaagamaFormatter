function double_consonants(string) {
    var vowel = /(?:a|A|i|I|u|U|~r|~R|~l|~L|e|ai|o|au)/;
    var cns = /(?:k|kh|g|gh|~N|ch|chh|j|jh|~n|T|Th|D|Dh|N|t|th|d|dh|n|p|ph|b|bh|m|y|r|l|v|sh|Sh|s|h|L)/;
    var consonant_no_hbbhv = /(?:k|kh|g|gh|~N|ch|chh|j|jh|~n|T|Th|D|Dh|N|t|th|d|dh|n|p|ph|m|y|r|l|sh|Sh|s|L)/;
    var cns_dbl = /(?:kk|kkh|gg|ggh|~N~N|chch|chchh|jj|jjh|~n~n|TT|TTh|DD|DDh|NN|tt|tth|dd|ddh|nn|pp|pph|mm|yy|rr|ll|shsh|ShSh|ss|LL)/;

    var mahaaprana_pairs = /(?:kh|gh|chh|jh|Th|Dh|th|dh|ph)/;
    regexp = new RegExp(
        '('
            +vowel.source
            +'r'
        +')'
        +'(?!'+cns_dbl.source+')'
        +'(?!(?:sh|Sh|s)' + vowel.source + ')'

        +'('
        +consonant_no_hbbhv.source
        +')'
    );
    newstr = '$1$2$2';

    return string.replace(regexp, newstr);
}

module.exports = double_consonants;
