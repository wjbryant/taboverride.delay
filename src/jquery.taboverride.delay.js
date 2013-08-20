/*! jquery.taboverride.delay v0.1.0-dev | https://github.com/wjbryant/taboverride.delay
Copyright (c) 2013 Bill Bryant | http://opensource.org/licenses/mit */

/*jslint browser: true, white: true */
/*global exports, require, define, jQuery, tabOverride */

/**
 * The tabOverride jQuery plugin
 *
 * @external "jQuery.fn.tabOverride"
 */

// Use CommonJS or AMD if available
(function ( factory ) {
	"use strict";

	if ( typeof exports === "object" && typeof require === "function" ) {
		// Node.js/CommonJS
		factory( require( "jquery" ), require( "taboverride" ),
			require( "jquery.taboverride" ), require( "taboverride.delay" ) );
	} else if ( typeof define === "function" && define.amd ) {
		// AMD - Register as an anonymous module
		// Files must be concatenated using an AMD-aware tool such as r.js
		define( [ "jquery", "taboverride", "jquery.taboverride", "taboverride.delay" ], factory );
	} else {
		// No module format - Use global variables instead
		factory( jQuery, tabOverride );
	}
}(function ( $, tabOverride ) {
	"use strict";

	var $fnTabOverride = $.fn.tabOverride,
		timeout;

	/**
	 * Gets or sets the amount of time to delay before enabling Tab Override.
	 * The default delay time is 250ms.
	 *
	 * @param  {number}        [ms]  the amount of time in milliseconds to
	 *                               delay before enabling Tab Override
	 * @return {number|Object}       the delay amount in milliseconds or the
	 *                               tabOverride object
	 *
	 * @method external:"jQuery.fn.tabOverride".delay
	 */
	$fnTabOverride.delay = tabOverride.delay;

	tabOverride.addExtension( "setDelegated", function ( $container, selector, enable ) {
		$container.off( "focus.tabOverrideDelay", selector );

		if ( enable ) {
			$container.on( "focus.tabOverrideDelay", selector, function () {
				var delayTime = $fnTabOverride.delay();

				clearTimeout( timeout );

				// Only remove and add listeners if delay is set
				if ( delayTime ) {
					$fnTabOverride.utils.removeDelegatedListeners( $container, selector );

					timeout = setTimeout(function () {
						$fnTabOverride.utils.addDelegatedListeners( $container, selector );
					}, delayTime );
				}
			});
		}
	});
}));
