
var Buttons = {};

Buttons.Init = function(){

}

Buttons.FindButtons = function(x, y){
	var buttons = [];

	for(var i = 0; i < Objects.List.length; i++){
		var o = Objects.List[i];

		if(!o.hasOwnProperty('buttonWidth'))
			continue;

		var w = o.buttonWidth;
		var h = o.buttonHeight;
		if(PointInRect(x, y, o.x - w/2, o.y - h/2, w, h)){
			buttons.push(o);
		}
	}

	return buttons;
}

Buttons.ProcessDrag = function(){
	var startButtons = this.FindButtons(Input.dragStartX, Input.dragStartY);
	var endButtons = this.FindButtons(Input.mouseX, Input.mouseY);

	if(startButtons.length > 0 && endButtons.length > 0){
		var b1 = startButtons[0];
		var b2 = endButtons[0];

		if(b1 != b2){

			var blink = false;

			if(b1.buttonType == Creature){
				if(b2.buttonType == Creature){
					b1.Fight(b2);
					blink = true;
				}
			}

			if(blink){
				var bt = .05;

				b1._blinkTime = bt;
				b2._blinkTime = bt;				
			}
		}
	}
}

