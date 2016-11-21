// Set up Parallax
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

window.onload = function(){
	// Shows page
	document.body.className = "";

	// Replaces backup footer description and image with a random description and image
	var number = Math.floor(Math.random()*10);
	var descriptions = [
		"a pencil nerd.",
		"a Super Smash Bros. fan.",
		"a burrito aficionado.",
		"a rounded typeface connoisseur.",
		"an icon pattern lover.",
		"an internet addict.",
		"a pen tool expert.",
		"a Pokemon collector.",
		"a technology buff.",
		"a YouTube nut."
	];
	var descriptionsSrc = [
		"img/icn-pencil.svg",
		"img/icn-smash.svg",
		"img/icn-burrito.svg",
		"img/icn-type.svg",
		"img/icn-pattern.svg",
		"img/icn-internet.svg",
		"img/icn-pen.svg",
		"img/icn-pokeball.svg",
		"img/icn-laptop.svg",
		"img/icn-video.svg"
	];
	var descriptionsAlt = [
		"Pencil icon",
		"Super Smash Bros. Ball icon",
		"Burrito icon",
		"Rounded letter \"M\" icon",
		"Icon pattern icon",
		"Internet globe icon",
		"Pen tool icon",
		"Pokeball icon",
		"Laptop icon",
		"Video window icon"
	];
	document.getElementById('description').textContent = descriptions[number];
	document.getElementById('description-icon').src = descriptionsSrc[number];
	document.getElementById('description-icon').alt = descriptionsAlt[number];
};

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-87603739-1', 'auto');
ga('send', 'pageview');
