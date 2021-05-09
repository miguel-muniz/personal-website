var svg = document.querySelector('.hero_pattern-image svg');
var img = document.querySelector('.hero_pattern-image img');
var canvas = document.querySelector('.hero_pattern-image canvas');

// get svg data
var xml = new XMLSerializer().serializeToString(svg);

// make it base64
var svg64 = btoa(xml);
var b64Start = 'data:image/svg+xml;base64,';

// prepend a "header"
var image64 = b64Start + svg64;

// set it as the source of the img element
img.onload = function () {
    // draw the image onto the canvas
    canvas.getContext('2d').drawImage(img, 0, 0);
}

img.src = image64;
