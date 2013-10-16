/** @define {string} */
var BUILD = "debug";

(function(){

/**
* Main class of the app.
*/

var fNum=800;
var flArr=new Array(fNum);
var flSpeed=new Array(fNum);
var flNames=new Array("assets/snowfl_1.png","assets/snowfl_2.png","assets/snowfl_3.png");
var im={};
var tf={};


function Main(){}

/**
* Entry point of the app.
*/
Main.main = function()
{
	var main = new Main();
	if (!window.HTMLCanvasElement)
	{
		alert("Your browser does not support HTML5 Canvas.");
		return;
	}
	else main.initialize();
	// entry point
}



Main.prototype.initialize = function()
{
	/**
	* mainCanvas
	*/
	this.mainCanvas = document.getElementById("mainCanvas");
	/**
	* stage
	*/
	this.stage = new createjs.Stage(this.mainCanvas);
	this.stage.snapToPixelsEnabled = true;
	/*
	* createjs
	*/
	createjs.Ticker.addListener(this);
	createjs.Ticker.useRAF = true;
	createjs.Ticker.setFPS(60);
	

	
	
	
	

	
	
	
	
	
	//im.src=;
	im = new createjs.Bitmap("assets/sky1.png");
	this.stage.addChild(im);
	
	for(i=0;i<fNum;i++){
		flArr[i]=new createjs.Bitmap(flNames[(Math.random()*2) | 0 ]);
		flArr[i].x=Math.random()*854 | 0;
		flArr[i].y=Math.random()*480 | 0;
		flArr[i].regX=flArr[i].image.width/2;
		flArr[i].regY=flArr[i].image.height/2;
		flArr[i].mouseEnabled=false;
		this.stage.addChild(flArr[i]);
		flSpeed[i]=Math.random()*4-2;
		//this.stage.update();
	}
	

	
	
	tf=new createjs.Text("10", "30px Arial", "#FFF");
	this.stage.addChild(tf);
	//this.tf.text="ddsfdsfd";
	//this.stage.update();
}


	


/**
* Updates the stage on Ticker tick.
* @param event The recieved tick event.
*/
Main.prototype.tick = function(event)
{

	
	onTick();
	
	this.stage.update();
	
tf.text=createjs.Ticker.getMeasuredFPS();
}


onTick = function(){
	for(i=0;i<fNum;i++){
		flArr[i].rotation+=flSpeed[i];
		
		//this.stage.update();
		
	}
	
}

/**
* Expose class.
*/
window.Main = Main;

})();
