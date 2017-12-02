
var Objects = {};

Objects.Init = function(){
	this.List = [];

	this.ToAdd = [];
	this.ToRemove = [];
}

Objects.Add = function(o){
	this.ToAdd.push(o);
}

Objects.Destroy = function(o){
	this.ToRemove.push(o);
}

Objects.ProcessLists = function(){
	for(var i = 0; i < this.ToAdd.length; i++){
		var o = this.ToAdd[i];
		this.List.push(o);
	}

	this.ToAdd = [];
	
	for(var i = 0; i < this.ToRemove.length; i++){
		var objectToRemove = this.ToRemove[i];

		for(var i = 0; i < this.List.length; i++){
			var o = this.List[i];
			if (o == objectToRemove){
				this.List.splice(i, 1);
				break;
			}
		}
	}

	this.ToRemove = [];
}

Objects.Update = function(){
	
	this.ProcessLists();

	for(var i = 0; i < this.List.length; i++){
		this.List[i].Update();
	}
}

Objects.Draw = function(g){
	this.ProcessLists();

	for(var i = 0; i < this.List.length; i++){
		var o = this.List[i];

		var shouldDraw = true;

		if(o.hasOwnProperty('_blinkTime')){
			if(o._blinkTime > 0){
				o._blinkTime -= Time.dt;
				shouldDraw = false;
			}
		}

		if(shouldDraw)
			o.Draw(g);
	}
}
