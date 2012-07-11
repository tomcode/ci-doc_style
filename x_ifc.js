var x_ifc = {
	
	resultField:undefined,
	
	getTOCMenu:function(requestUrl, resultField) {
		
		this.request(requestUrl, resultField, 'get');
	},
	
	successHandler:function(result) {
		
		var resultEl = document.getElementById(x_ifc.resultField);
		
		resultEl.innerHTML = result;
		
		var myEl = document.getElementById('nav');
		
		myEl.setAttribute('class', 'loaded');
	},
	
	errorHandler:function(requestObject) {
		
		alert("Something when wrong. Error : "+requestObject.status);
	},
	
	onLoadCallback:function(data, myXMLHttpRequest) {
		
		var httpStatus = myXMLHttpRequest.status;
	
		if(httpStatus === 200) {
			
			x_ifc.successHandler(data);
			
		} else {
			
			x_ifc.errorHandler(myXMLHttpRequest);
		}
	},
	
	request:function (XMLLoadURL, resultField, method, postField) {
		
		this.resultField = resultField;

		if(method == 'get') {
			
			this.ajax(XMLLoadURL, this.onLoadCallback);
		}
	},
	
	ajax:function(url, callback, postdata) {
		
		var x = window.ActiveXObject;

		x = new(x ? x:XMLHttpRequest)('Microsoft.XMLHTTP');
		
		x.open( postdata ? 'POST':'GET', url, 1);
		
		x.setRequestHeader('X_REQUESTED_WITH','XMLHttpRequest');
		
		if(postdata) {
			
			x.setRequestHeader('Content-type','application/x-www-form-urlencoded');
		}
		
		x.onreadystatechange = function() {
			
			x.readyState > 3 && callback ? callback(x.responseText, x) : 0;
		};
		
		x.send(postdata);
	}
};

