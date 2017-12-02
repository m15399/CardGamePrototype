
var EndTurnButton = {};

EndTurnButton.Init = function(){
	Objects.Add(this);

	this.x = pw - 100;
	this.y = ph / 2;

	this.buttonWidth = this.width = 120;
	this.buttonHeight = this.height = 60;
}

EndTurnButton.OnClick = function(){
	console.log('End!');
}

EndTurnButton.Update = function(){
	Buttons.Add(this);
}

EndTurnButton.Draw = function(g){
	g.fillStyle = '#fa4';
	FillRect(g, this.x, this.y, this.width, this.height);
}
