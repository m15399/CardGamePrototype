
var CreatureStateRing = {};

CreatureStateRing.Init = function(creature){
	Objects.Add(this);

	this.creature = creature;
}

CreatureStateRing.Update = function(){

}

CreatureStateRing.Draw = function(g){
	g.fillStyle = '#5f5c';
	if(this.creature.state == CreatureState.Asleep){
		g.fillStyle = '#fff6';
	}
	g.save();
	g.translate(this.creature.x, this.creature.y);
	g.scale(1, .5);
	g.beginPath();
	g.arc(0, 100, 60, 0, Math.PI)
	g.fill();
	g.restore();
}
