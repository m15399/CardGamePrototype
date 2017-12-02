
var CreatureState = {};
CreatureState.Asleep = 0;
CreatureState.Active = 1;

var Creature = {};

Creature.Init = function(){
	Objects.Add(this);
	this.isCreature = true;

	this.x = pw/2;
	this.y = ph/2;

	this.buttonWidth = 100;
	this.buttonHeight = 100;

	this.attack = 0;
	this.health = 0;

	this.state = CreatureState.Active;

	this.stateRing = Create(CreatureStateRing, this);
	this.healthBar = Create(CreatureHealthBar, this);
}

Creature.Fight = function(otherCreature){
	this.health -= otherCreature.attack;
	otherCreature.health -= this.attack;

	Utils.Blink(this);
	Utils.Blink(otherCreature);
}

Creature.OnDragTo = function(other){

	if(other.isCreature){
		var canAttack = this.state == CreatureState.Active;

		if (!canAttack){
			Create(AlertText, 'Can\'t attack with that right now');
		} else {
			this.Fight(other);
			this.state = CreatureState.Asleep;
		}	
	}
}

Creature.Update = function(){
	Buttons.Add(this);
}

Creature.Draw = function(g){
	g.fillStyle = 'red';
	FillRect(g, this.x, this.y, 100, 100);
}
