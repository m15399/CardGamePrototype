
var AlertText = {};

AlertText.MaxTime = 2.5;

AlertText.Init = function(text){
	this.timeLeft = AlertText.MaxTime;
	this.text = text;

	Objects.Add(this);
}

AlertText.Update = function(){
	this.timeLeft -= Time.dt;
	if(this.timeLeft < 0)
		Objects.Destroy(this);
}

AlertText.Draw = function(g){
	var a = 4 * this.timeLeft / AlertText.MaxTime;
	var bg = 50;
	var x = pw / 2;
	var y = ph - 30;
	
	g.fillStyle = Create(Color, bg, bg, bg, a).ToString();
	Utils.FillRect(g, x, y, 500, 35);

	g.fillStyle = Create(Color, 255, 255, 255, a).ToString();
	Utils.Font(g, 20);
	g.fillText(this.text, x, y);
}
