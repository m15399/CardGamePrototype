
var Input = {};

Input.Init = function(){
	this.mouseX = 0;
	this.mouseY = 0;
	this.dragStartX = 0;
	this.dragStartY = 0;
	this.mouseDown = false;

	var that = this;
	canvas.addEventListener('mousemove', function(e){that.OnMouseMove(e);});
	canvas.addEventListener('mousedown', function(e){that.OnMouseDown(e);});
	canvas.addEventListener('mouseup', function(e){that.OnMouseUp(e);});
}

Input.OnMouseMove = function(e){
	var rect = canvas.getBoundingClientRect();
	var mx = e.clientX - rect.left;
	var my = e.clientY - rect.top;

	this.mouseX = mx;
	this.mouseY = my;
}

Input.OnMouseDown = function(e){
	this.mouseDown = true;
	this.dragStartX = this.mouseX;
	this.dragStartY = this.mouseY;
}

Input.OnMouseUp = function(e){
	this.mouseDown = false;

	// Process drags/clicks
	//
	var distTravelled = Utils.Distance(this.mouseX, this.mouseY, this.dragStartX, this.dragStartY);
	if(distTravelled > 10){
		Buttons.ProcessDrag();
	} else if (distTravelled < 6){
		Buttons.ProcessClick();
	}

}
