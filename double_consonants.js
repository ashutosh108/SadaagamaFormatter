function double_consonants(string) {
    var vowel = /(?:a|A|i|I|u|U|~r|~R|~l|~L|e|ai|o|au)/;
    var alpaprana_no_sshShhbbhv = /(k|g|~N|ch|j|~n|T|D|N|t|d|n|p|m|y|r|l|L)/;
    var mahaprana_no_sshShhbbhv = /(k|g|ch|j|T|D|t|d|p)h/;
    regexp_alpa = new RegExp(
        '('
            +vowel.source
            +'r'
        +')'

        +alpaprana_no_sshShhbbhv.source

        +'('
        +vowel.source
        +')'
    );
    newstr_alpa = '$1$2$2$3';

    regexp_maha = new RegExp(
        '('
            +vowel.source
            +'r'
        +')'

        +mahaprana_no_sshShhbbhv.source

        +'('
        +vowel.source
        +')'
    );
    newstr_maha = '$1$2$2h$3';

    return string.replace(regexp_alpa, newstr_alpa)
                 .replace(regexp_maha, newstr_maha);
}

module.exports = double_consonants;
