
var Time = {};

Time.Init = function(){
	this.dt = .001;
}


function GetTime(){
	return Date.now() / 1000.0;
}
