//	Instructions for JSLint, see [jslint.com](http://www.jslint.com)
/*jslint browser: true */
/*global alert */

(function () {

	"use strict";

	var x_ifc = {

		resultField: undefined,

		getTOCMenu: function (requestUrl, resultField) {

			this.request(requestUrl, resultField, 'get');
		},

		successHandler: function (result) {

			var resultEl = document.getElementById(x_ifc.resultField),
				myEl = document.getElementById('nav');

			if (resultEl) {

				resultEl.innerHTML = result;
			}

			myEl.setAttribute('class', 'loaded');
		},

		errorHandler: function (requestObject) {

			alert("Something when wrong. Error : " + requestObject.status);
		},

		onLoadCallback: function (data, myXMLHttpRequest) {

			var httpStatus = myXMLHttpRequest.status;

			if (httpStatus === 200) {

				x_ifc.successHandler(data);

			} else {

				x_ifc.errorHandler(myXMLHttpRequest);
			}
		},

		request: function (XMLLoadURL, resultField, method) {

			this.resultField = resultField;

			if (method === 'get') {

				this.ajax(XMLLoadURL, this.onLoadCallback);
			}
		},

		ajax: function (url, callback, postdata) {

			var X = window.ActiveXObject || XMLHttpRequest;

			X = new (X)('Microsoft.XMLHTTP');

			X.open(postdata ? 'POST' : 'GET', url, 1);

			X.setRequestHeader('X_REQUESTED_WITH', 'XMLHttpRequest');

			if (postdata) {

				X.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			}

			X.onreadystatechange = function () {

				if (X.readyState > 3 && typeof callback === 'function') {

					callback(X.responseText, X);
				}
			};

			X.send(postdata);
		}
	};

	window.x_ifc = x_ifc;

}());

