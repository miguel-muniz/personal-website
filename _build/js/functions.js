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
		"/img/icn-pencil.svg",
		"/img/icn-smash.svg",
		"/img/icn-burrito.svg",
		"/img/icn-type.svg",
		"/img/icn-pattern.svg",
		"/img/icn-internet.svg",
		"/img/icn-pen.svg",
		"/img/icn-pokeball.svg",
		"/img/icn-laptop.svg",
		"/img/icn-video.svg"
	];
	var descriptionsAlt = [
		"Pencil icon",
		"Super Smash Bros. Ball icon",
		"Burrito icon",
		"Rounded letter \"Tt\" icon",
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

	//Replaces project page card name, type, link, and background-image, with a random set on refresh
	var card1Num = Math.floor(Math.random()*10);
	var card2Num = Math.floor(Math.random()*10);
	while(card1Num === card2Num) {
		card2Num = Math.floor(Math.random()*10);
		console.log(card2Num);
	}
	var pLink = [
		"orbit-ad-campaign.html",
		"rayonier-annual-report.html",
		"metrio-user-interface.html",
		"restore-gorilla-grocery-metrio.html",
		"the-black-cat-book-design.html",
		"no-format-identity-design.html",
		"nintendo-web-design-dev.html",
		"staples-ad-campaign.html",
		"kikkoman-promo-design.html",
		"dot-dot-package-design.html"
	];
	var pImage = [
		"orbit",
		"rayonier",
		"metrio",
		"restore",
		"the-black-cat",
		"no-format",
		"nintendo",
		"staples",
		"kikkoman",
		"dot-dot"
	];
	var pName = [
		"Orbit",
		"Rayonier",
		"Metr.io",
		"Various Logos",
		"The Black Cat",
		"No Format",
		"Nintendo",
		"Staples",
		"Kikkoman",
		"Dot Dot"
	];
	var pType = [
		"Ad Campaign",
		"Annual Report",
		"User Interface",
		"Identity Design",
		"Book Design",
		"Identity Design",
		"Web Design",
		"Ad Campaign",
		"Promo Design",
		"Package Design"
	];

	document.getElementById('p-card-one').href = "/page/portfolio/" + pLink[card1Num];
	document.getElementById('p-card-one').querySelectorAll('h3').item(0).textContent = pName[card1Num];
	document.getElementById('p-card-one').querySelectorAll('p').item(0).textContent = pType[card1Num];
	document.getElementById('p-card-one').style.backgroundImage = "url(/img/card-" + pImage[card1Num] + ".jpg)";

	document.getElementById('p-card-two').href = "/page/portfolio/" + pLink[card2Num];
	document.getElementById('p-card-two').querySelectorAll('h3').item(0).textContent = pName[card2Num];
	document.getElementById('p-card-two').querySelectorAll('p').item(0).textContent = pType[card2Num];
	document.getElementById('p-card-two').style.backgroundImage = "url(/img/card-" + pImage[card2Num] + ".jpg)";
};

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-87603739-1', 'auto');
ga('send', 'pageview');
