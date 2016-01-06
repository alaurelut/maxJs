(function(root){
	var ns = {};
	ns.remove = function() {
		console.log(this);
	    this.parentElement.removeChild(this);
	}
	    root.max = ns;
}(this))