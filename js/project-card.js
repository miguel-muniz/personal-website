window.onload = function() {
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
		"image",
		"image",
		"image",
		"image",
		"image",
		"image",
		"image",
		"image",
		"image",
		"image"
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
		"Web Design \& Dev",
		"Ad Campaign",
		"Promo Design",
		"Package Design"
	];

	document.getElementById('p-card-one').href = pLink[card1Num];
	document.getElementById('p-card-one').querySelectorAll('h3').item(0).textContent = pName[card1Num];
	document.getElementById('p-card-one').querySelectorAll('p').item(0).textContent = pType[card1Num];
	document.getElementById('p-card-one').style.backgroundImage = "url(../img/" + pImage[card1Num] + ".jpg)";

	document.getElementById('p-card-two').href = pLink[card2Num];
	document.getElementById('p-card-two').querySelectorAll('h3').item(0).textContent = pName[card2Num];
	document.getElementById('p-card-two').querySelectorAll('p').item(0).textContent = pType[card2Num];
	document.getElementById('p-card-two').style.backgroundImage = "url(../img/" + pImage[card2Num] + ".jpg)";
};
