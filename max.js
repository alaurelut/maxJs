(function(root){

	var ns = {};

	ns = function( element ){
		var selectedElement = document.querySelectorAll( element );

		if( selectedElement.length > 1 ){
			return selectedElement;
		}else{
			if( selectedElement.length !== 0 ){
				return selectedElement[0];	
			}
			return undefined;
		}

	}

	ns.remove = function(element) {
	    element.parentElement.removeChild(element);
	}

	root.max = ns;
}(this))