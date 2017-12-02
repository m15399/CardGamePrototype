
var CreatureHealthBar = {};

CreatureHealthBar.Init = function(creature){
	this.creature = creature;

	Objects.Add(this);
}

CreatureHealthBar.Update = function(){

}

CreatureHealthBar.Draw = function(g){
	var x = this.creature.x;
	var y = this.creature.y + 50;
	var w = 60;
	var h = 20;

	g.fillStyle = '#666';
	FillRect(g, x, y, w, h);
	g.strokeStyle = '#eee';
	StrokeRect(g, x, y, w, h);

	g.fillStyle = 'white';
	Utils.Font(g, 14);
	
	var attack = this.creature.attack;
	var health = this.creature.health;
	g.fillText(attack + ' / ' + health, x, y);
}
