
var canvas;
var cw, ch;
var pw = 1280, ph = 720;
var ctx;

function Resize(w, h){
	canvas.width = w;
	canvas.height = h;
	cw = w;
	ch = h;
}

function ResizeFull(){
	Resize(window.innerWidth, window.innerHeight);
}

function Setup(){
	var body = document.body;
	body.style.margin = '0';
	body.style.overflow = 'hidden';
	
	canvas = document.createElement('canvas');
	canvas.style.cursor = 'none';
	body.appendChild(canvas);

	ctx = canvas.getContext('2d');

	ResizeFull();

	Game.Init();
	Game.Loop();
}

Setup();
