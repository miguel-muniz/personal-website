// Set up Parallax
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

window.onload = function(){
	// Shows page
	document.body.className = "";

	// Replaces backup footer description with a random description
	var number = Math.floor(Math.random()*10);
	var descriptions = [
		"a pencil nerd.",
		"an avid Smash Bros. fan.",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10"
	];
	document.getElementById('description').textContent = descriptions[number];
};
