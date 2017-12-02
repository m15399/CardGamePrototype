
var Utils = {};

Utils.FillRect = function(g, x, y, w, h){
	g.fillRect(x - w/2, y - h/2, w, h);
}

var FillRect = Utils.FillRect;

Utils.StrokeRect = function(g, x, y, w, h){
	g.strokeRect(x - w/2, y - h/2, w, h);
}

var StrokeRect = Utils.StrokeRect;

Utils.Create = function(proto){
	var o = Object.create(proto);
	if(arguments.length > 1){
		console.log();
		o.Init.apply(o, Array.prototype.slice.call(arguments, 1));
	} else {
		o.Init();
	}
	return o;
}

var Create = Utils.Create;

Utils.PointInRect = function(px, py, x, y, w, h){
	if(px > x && px < (x + w) && py > y && py < (y + h)){
		return true;
	}
	return false;
}

Utils.Blink = function(o){
	o._blinkTime = .05;
}

Utils.Distance = function(x1, y1, x2, y2){
	var dx = x2 - x1;
	var dy = y2 - y1;

	return Math.sqrt(dx * dx + dy * dy);
}

Utils.Font = function(g, size, align, baseline){
	g.font = size + 'px Arial';
	g.textAlign = align || 'center';
	g.textBaseline = baseline || 'middle';

}
