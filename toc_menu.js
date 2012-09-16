//	Instructions for JSLint, see [jslint.com](http://www.jslint.com)
/*jslint browser: true */
/*global alert */

var x_ifc = x_ifc || {};

(function (x_ifc) {

	"use strict";

	function toggleHeight() {

		var tocLinkEl = document.getElementById('TOClink'),
			requestUrl = tocLinkEl.getAttribute('href') || '',
			myEl = document.getElementById('nav');

		if (requestUrl && myEl.getAttribute('class') !== 'loaded') {

			if (x_ifc.getTOCMenu !== undefined) {

				if (!document.getElementById('TOCTable')) {

					x_ifc.getTOCMenu(requestUrl, 'nav_inner');

				} else {

					myEl.setAttribute('class', 'loaded');
				}
			}

		} else {

			myEl.setAttribute('class', 'collapsed');
		}
	}

	function initTOCMenu() {

		var mxEl = document.getElementById('TOClinkWrapper');

		document.getElementById('navigation').removeAttribute('class');

		document.getElementById('nav2').addEventListener('click', toggleHeight, false);

		mxEl.style.display = 'none';
	}

	window.initTOCMenu = initTOCMenu;

}(x_ifc));

