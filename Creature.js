
var Creature = {};

Creature.Init = function(){
	Objects.Add(this);

	this.x = pw/2;
	this.y = ph/2;

	this.buttonWidth = 100;
	this.buttonHeight = 100;
	this.buttonType = Creature;

	this.attack = 0;
	this.health = 0;

	this.healthBar = Create(CreatureHealthBar, this);
}

Creature.Fight = function(otherCreature){
	this.health -= otherCreature.attack;
	otherCreature.health -= this.attack;
}

Creature.Update = function(){

}

Creature.Draw = function(g){
	g.fillStyle = 'red';
	FillRect(g, this.x, this.y, 100, 100);
}
