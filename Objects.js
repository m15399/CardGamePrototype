
var Objects = {};

Objects.Init = function(){
	this.List = [];

	this.ToAdd = [];
	this.ToRemove = [];
}

Objects.Add = function(o){
	this.ToAdd.push(o);
}

// Objects.Destroy = function(o){
// 	this.ToRemove.push(o);
// }

Objects.ProcessLists = function(){
	for(var i = 0; i < this.ToAdd.length; i++){
		this.List.push(this.ToAdd[i]);
	}

	this.ToAdd = [];
	
	// for(var i = this.ToRemove.length; i >= 0; i--){
	// 	var o = this.ToRemove[i];

	// 	for(var i = 0; i < this.List; i++){

	// 	}

	// }
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
