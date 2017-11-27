
function FillRect(g, x, y, w, h){
	g.fillRect(x - w/2, y - h/2, w, h);
}

function StrokeRect(g, x, y, w, h){
	g.strokeRect(x - w/2, y - h/2, w, h);
}

function Create(proto){
	var o = Object.create(proto);
	if(arguments.length > 1){
		console.log();
		o.Init.apply(o, Array.prototype.slice.call(arguments, 1));
	} else {
		o.Init();
	}
	return o;
}

function PointInRect(px, py, x, y, w, h){
	if(px > x && px < (x + w) && py > y && py < (y + h)){
		return true;
	}
	return false;
}