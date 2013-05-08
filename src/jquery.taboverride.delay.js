/*! jquery.taboverride.delay v0.1-dev | https://github.com/wjbryant/taboverride.delay
Copyright (c) 2013 Bill Bryant | http://opensource.org/licenses/mit */

/*global exports, require, define, jQuery, TABOVERRIDE */

/**
 * the global jQuery object
 *
 * @name jQuery
 * @namespace
 */

/**
 * the jQuery prototype shortcut "namespace"
 *
 * @name fn
 * @namespace
 * @memberOf jQuery
 */

// Use CommonJS or AMD if available
(function ( factory ) {
	"use strict";

	if ( typeof exports === "object" && typeof require === "function" ) {
		// Node.js/CommonJS
		factory( require( "jquery", "taboverride", "jquery.taboverride", "taboverride.delay" ) );
	} else if ( typeof define === "function" && define.amd ) {
		// AMD - Register as an anonymous module
		// Files must be concatenated using an AMD-aware tool such as r.js
		define( [ "jquery", "taboverride", "jquery.taboverride", "taboverride.delay" ], factory );
	} else {
		// No module format - Use global variables instead
		factory( jQuery, TABOVERRIDE );
	}
}(function ( $, TABOVERRIDE ) {
	"use strict";

	var $fnTabOverride = $.fn.tabOverride,
		timeout;

	$fnTabOverride.delay = TABOVERRIDE.delay;

	$fnTabOverride.addDelegatedExtension(function ( $container, selector, enable ) {
		$container.off( "focus.tabOverrideDelay", selector );

		if ( enable ) {
			$container.on( "focus.tabOverrideDelay", selector, function () {
				$fnTabOverride.utils.removeDelegatedListeners( $container, selector );

				clearTimeout(timeout);
				timeout = setTimeout(function () {
					$fnTabOverride.utils.addDelegatedListeners( $container, selector );
				}, $fnTabOverride.delay() );
			});
		}
	});
}));
