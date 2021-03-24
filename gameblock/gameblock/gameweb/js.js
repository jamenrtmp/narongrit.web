
window.onload = pageLoad;

function pageLoad(){
	var buttonstart = document.getElementById("start");
	buttonstart.onclick = startGame;
	

}

function startGame(){
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; 
	var second = min*60; 
	var x = document.getElementById('clock');
	//setting timer using setInterval function
	timer = setInterval(timeCount,TIMER_TICK);
	
	function timeCount(){
		var allbox = document.querySelectorAll("#game-layer div");
		second = second - 1;
		x.innerHTML =second; 
		console.log(allbox.length);
			if(allbox.length == 0 && second>0 )
			{ 	
				alert("You win");

				clearInterval(timer);
				clearScreen();
			}

			else if(allbox.length > 0 && second == 0 ){
			
			alert("You lose");

			clearInterval(timer);
 
			clearScreen();
			}
		
	}
}

function addBox(){
	var numbox = document.getElementById("numbox").value;
	var gameLayer = document.getElementById("game-layer") ;
	var colorDrop = document.getElementById("color").value;
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div");
		//tempbox.innerText = "BOX "+i;
		tempbox.className = "square";
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		tempbox.style.backgroundColor = colorDrop;
		console.log("Create Box"+i +colorDrop);
		//add element to HTML node
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	box.onclick = function(){
		box.parentNode.removeChild(box);
	}
}

function clearScreen(){
	var allbox = document.querySelectorAll("#game-layer div");

	//delete all  div
	for (var i=0;i<allbox.length;i++){
		allbox[i].parentNode.removeChild(allbox[i]);
	}
}