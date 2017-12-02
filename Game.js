
var Game = {};

Game.Init = function(){
	Objects.Init();
	Time.Init();
	Buttons.Init();
	Input.Init();

	this.prevTime = GetTime();
	this.time = GetTime();


	Create(EndTurnButton);

	var c1 = Create(Creature);
	c1.y -= 100;
	c1.attack = 1;
	c1.health = 100;

	var c2 = Create(Creature);
	c2.y += 100;
	c2.attack = 30;
	c2.health = 10;
}

Game.Loop = function(){
	this.prevTime = this.time;
	this.time = GetTime();
	
	Time.dt = this.time - this.prevTime;

	this.Update();
	this.Draw(ctx);

	var that = this;
	window.requestAnimationFrame(function(){
		that.Loop();
	});
}

Game.Update = function(){
	Buttons.Clear();

	Objects.Update();
	
	Buttons.Update();
}

Game.Draw = function(g){
	var g = ctx;

	// Background
	g.fillStyle = 'black';
	g.fillRect(0, 0, cw, ch);

	g.strokeWidth = 1;

	// Transform canvas to middle
	g.save();
	var dx = (cw - pw) / 2;
	var dy = (ch - ph) / 2;
	g.translate(dx, dy);


	Objects.Draw(g);

	Buttons.Draw(g);

	// Drag line
	if(Input.mouseDown){
		g.lineWidth = 3;
		g.strokeStyle = '#ae5a';
		g.beginPath();
		g.moveTo(Input.dragStartX, Input.dragStartY);
		g.lineTo(Input.mouseX, Input.mouseY);
		g.stroke();
		g.lineWidth = 1;
	}

	// Cursor
	g.fillStyle = '#8cf';
	if(Input.mouseDown)
		g.fillStyle = '#d5d';
	var cursorSize = 16;
	FillRect(g, Input.mouseX, Input.mouseY, cursorSize, cursorSize);
	g.strokeStyle = '#fff';
	StrokeRect(g, Input.mouseX, Input.mouseY, cursorSize, cursorSize);

	// Border
	g.strokeStyle = 'white';
	g.strokeRect(0, 0, pw - 1, ph - 1);

	g.restore();
}
