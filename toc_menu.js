function teste_x(toTest) {
	
	try {
		if(eval(toTest)) {
			
			throw 'ok';
			
		} else {
			
			throw 'oh no';
		}
		
	} catch(e) {

		if(e != 'ok') {

			alert(e);
			
			return false;
		}
		
		return true;
	}
}

function toggleHeight() {
	
	var tocLinkEl = document.getElementById('TOClink'),
		requestUrl = tocLinkEl.getAttribute('href') || '',
		myEl = document.getElementById('nav');

	if(requestUrl && myEl.getAttribute('class') !== 'loaded') {
		
		var e2 = teste_x('x_ifc');
		
		if(e2 && ! document.getElementById('TOCTable')) {
			
			x_ifc.getTOCMenu(requestUrl, 'nav_inner');

		} else {
		
			myEl.setAttribute('class', 'loaded');
		}

	} else {
	
		myEl.setAttribute('class', 'collapsed');
	}
}

function initTOCMenu() {
	
	console.log('hi', 'initTOCMenu');

	document.getElementById('navigation').removeAttribute('class');
	
	document.getElementById('nav2').addEventListener('click', toggleHeight, false);
	
	var mxEl = document.getElementById('TOClinkWrapper');
	mxEl.style.display = 'none';
	
}

