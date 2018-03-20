<?php

class SadaagamaFormatter {
    public static function onParserSetup( Parser $parser ) {
        $parser->setHook( 'muulam', 'SadaagamaFormatter::onMuulamTag' );
        $parser->setHook( 'shloka', 'SadaagamaFormatter::onShlokaTag' );
        $parser->setHook( 'madhva', 'SadaagamaFormatter::onMadhvaTag' );
        $parser->setHook( 'jayatiirtha', 'SadaagamaFormatter::onJayatiirthaTag' );
    }

    private static function identity($text) {
        return $text;
    }

    private static function div($class, $input, $frame, $parser, $transform=null) {
        $rendered_input = $parser->recursiveTagParse( $input, $frame );
        if ($transform) {
            $rendered_input = $transform($rendered_input);
        }
        return "<div class=\"$class\">" . $rendered_input . "</div>";

    }

    public static function onMuulamTag( $input, array $args, Parser $parser, PPFrame $frame) {
        return self::div("muulam", $input, $frame, $parser );
    }

    private static function append_brs_after_dandas( $wiki_text ) {
        return preg_replace("/।\\s*/", "।<br>\n", $wiki_text);
    }

    public static function onShlokaTag( $input, array $args, Parser $parser, PPFrame $frame) {
        return self::div("shloka", $input, $frame, $parser, 'SadaagamaFormatter::append_brs_after_dandas');
    }

    private static function fix_stars($text) {
        return preg_replace('{\*(?=\S)(.*?)(?<=\S)\*}', '<q>$1</q>', $text);
    }

    public static function onMadhvaTag( $input, array $args, Parser $parser, PPFrame $frame) {
        return self::div("commentary by-madhva", $input, $frame, $parser, 'SadaagamaFormatter::fix_stars');
    }

    public static function onJayatiirthaTag( $input, array $args, Parser $parser, PPFrame $frame) {
        $rendered_input = $parser->recursiveTagParse( $input, $frame );
        return self::div("commentary by-jayatiirtha", $input, $frame, $parser, 'SadaagamaFormatter::fix_stars');
    }

}