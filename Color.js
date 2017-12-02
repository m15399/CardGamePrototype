
var Color = {};

Color.Init = function(r, g, b, a){
	this.r = r;
	this.g = g;
	this.b = b;

	if (a == undefined)
		this.a = 1;
	else
		this.a = a;
}

Color.ToString = function(){
	return 'rgba(' + Math.round(this.r) + ', ' + Math.round(this.g) + ', ' + Math.round(this.b) + ', ' + this.a + ')';
}
