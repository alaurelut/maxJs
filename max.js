(function(root){
	var ns = {};
	ns.remove = function(element) {
		console.log(element);
	    element.parentElement.removeChild(element);
	}
	    root.max = ns;
}(this))