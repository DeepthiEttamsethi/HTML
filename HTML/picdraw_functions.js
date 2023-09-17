function drawPic(picSRC, canvasElem) {
//get the canvas using passed element ID
var canv = document.getElementById(canvasElem);
//get the context
var cont = canv.getContext("2d");
//define a gradient to spread across the canvas diagonally
var grad = cont.createLinearGradient(0, 0, 700, 750);
//define two colors
grad.addColorStop(0, "#000033");
grad.addColorStop(1, "#003300");
//set the gradient fill
cont.fillStyle = grad;
//fill the entire canvas with the gradient
cont.fillRect(0, 0, 300, 250);
//create the image
var picImg = new Image();
//draw the image so that it is centered
picImg.onload = function(){ cont.drawImage(picImg, 5, 5); };
//set the passed image source
picImg.src=picSRC;
}
nxe-yoid-bkz