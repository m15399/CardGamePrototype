
var Buttons = {};

Buttons.Init = function(){
	this.highlightedButtons = [];
	this.buttons = [];
}

Buttons.Add = function(button){

	// Expects button to have fields: x, y (centered), buttonWidth, buttonHeight

	this.buttons.push(button);
}

Buttons.FindButtons = function(x, y){
	var result = [];

	for(var i = 0; i < this.buttons.length; i++){
		var o = this.buttons[i];

		var w = o.buttonWidth;
		var h = o.buttonHeight;
		if(Utils.PointInRect(x, y, o.x - w/2, o.y - h/2, w, h)){
			result.push(o);
		}
	}

	return result;
}

Buttons.Clear = function(){
	this.buttons = [];
}

Buttons.Update = function(){
	var mx = Input.mouseX;
	var my = Input.mouseY;

	this.highlightedButtons = this.FindButtons(mx, my);

	for(var i = 0; i < this.highlightedButtons.length; i++){
		var b = this.highlightedButtons[i];
		if(b.OnHover)
			b.OnHover();
	}
}

Buttons.Draw = function(g){

	g.strokeStyle = '#ffc';
	g.lineWidth = 1.5;
	for(var i = 0; i < this.highlightedButtons.length; i++){
		var b = this.highlightedButtons[i];
		StrokeRect(g, b.x, b.y, b.buttonWidth, b.buttonHeight);
	}
	g.lineWidth = 1;
}

Buttons.ProcessClick = function(){
	var buttons = this.FindButtons(Input.mouseX, Input.mouseY);

	if(buttons.length > 0){
		var b = buttons[0];

		if(b.OnClick)
			b.OnClick();
	}
}

Buttons.ProcessDrag = function(){
	var startButtons = this.FindButtons(Input.dragStartX, Input.dragStartY);
	var endButtons = this.FindButtons(Input.mouseX, Input.mouseY);

	if(startButtons.length > 0 && endButtons.length > 0){
		var b1 = startButtons[0];
		var b2 = endButtons[0];

		if(b1 != b2){
			if(b1.OnDragTo)
				b1.OnDragTo(b2);
		}
	}
}

