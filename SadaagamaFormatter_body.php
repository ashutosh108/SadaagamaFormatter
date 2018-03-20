<?php

class SadaagamaFormatter {
    public static function onParserSetup( Parser $parser ) {
        $parser->setHook( 'muulam', 'SadaagamaFormatter::onMuulamTag' );
        $parser->setHook( 'shloka', 'SadaagamaFormatter::onShlokaTag' );
        $parser->setHook( 'madhva', 'SadaagamaFormatter::onMadhvaTag' );
        $parser->setHook( 'jayatiirtha', 'SadaagamaFormatter::onJayatiirthaTag' );
    }

    public static function onMuulamTag( $input, array $args, Parser $parser, PPFrame $frame) {
        $rendered_input = $parser->recursiveTagParse( $input, $frame );
        return "<div class=\"muulam\">" . $rendered_input . "</div>";
    }

    private static function append_brs_after_dandas( $wiki_text ) {
        return preg_replace("/।\\s*/", "।<br>\n", $wiki_text);
    }

    public static function onShlokaTag( $input, array $args, Parser $parser, PPFrame $frame) {
        $rendered_input = $parser->recursiveTagParse( $input, $frame );
        $with_dandas = self::append_brs_after_dandas($rendered_input);
        return "<div class=\"shloka\">" . $with_dandas . "</div>";
    }

    public static function onMadhvaTag( $input, array $args, Parser $parser, PPFrame $frame) {
        $rendered_input = $parser->recursiveTagParse( $input, $frame );
        return "<div class=\"commentary by-madhva\">" . $rendered_input . "</div>";
    }

    public static function onJayatiirthaTag( $input, array $args, Parser $parser, PPFrame $frame) {
        $rendered_input = $parser->recursiveTagParse( $input, $frame );
        return "<div class=\"commentary by-jayatiirtha\">" . $rendered_input . "</div>";
    }

}