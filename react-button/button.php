<?php
/**
 * Plugin Name: backup-React-button
 */

function buttonReact($atts) {
	$a = shortcode_atts(array(
	'id' => ''),$atts);
	return '<div id="'.$a['id'].'" ></div>';
}

add_shortcode('button-react-mint', 'buttonReact');

function helloworld_load_assets() {
	
	$react_app_js  = plugin_dir_url( __FILE__ ) . '/build/static/js/all_in_one_file.js';
    $react_app_css = plugin_dir_url( __FILE__ ) . '/build/static/css/all_in_one_file.css';	
      
    // time stops stylesheet/js caching while in development, might want to remove later  
    $version = time();	
    wp_enqueue_script( 'react-button', $react_app_js, array(), $version, true );         
    wp_enqueue_style( 'react-button', $react_app_css, array(), $version );

}

add_action( 'wp_enqueue_scripts', 'helloworld_load_assets' );