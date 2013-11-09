var KEY = 
{
	D: 68,
	A: 65,
	RIGHT: 39,
	LEFT: 37,
	UP: 38,
	DOWN: 40,
	W: 87,
	S: 83
}
var pingpong = {
scoreA : 0,
scoreB : 0
}
	pingpong.pressKey = [] ;
pingpong.ball = 
{
	speed: 10,
	x: 150,
	y: 100,
	directionX: 1,
	directionY: 1
}

$(function () {
	pingpong.timer = setInterval(gameloop,30);
$(document).keydown(function (e) {	
	console.log(e.which);});
	$(document).keydown(function (e) {
	if (e.keyCode==32) {pingpong.pressKey[32]=!pingpong.pressKey[32];}
	else 
	pingpong.pressKey[e.keyCode] = true;	
	});
	$(document).keyup(function (e) {
		if (e.keyCode!=32) {
	pingpong.pressKey[e.keyCode] =false;
}	
	});
	});

function gameloop() 
{
	if (pingpong.pressKey[32]==1) {return};
	movePaddles();
	moveBall();
}
function movePaddles() {
	
if (pingpong.pressKey[KEY.D]==true) 
{
	var left = parseInt($("#paddleA").css("left"));
	if (left<145)
	 {
	 $("#paddleA").css("left",left+10);	
	 }
}
if (pingpong.pressKey[KEY.A]==true) 
{
	var left = parseInt($("#paddleA").css("left"));
	if (left>50)
	 {
	 $("#paddleA").css("left",left-10);	
	 }
}
if (pingpong.pressKey[KEY.RIGHT]==true) 
{
	var left = parseInt($("#paddleB").css("left"));
	if (left<720)
	 {
	 $("#paddleB").css("left",left+10);	
	 }
}
if (pingpong.pressKey[KEY.LEFT]==true) 
{
	var left = parseInt($("#paddleB").css("left"));
	if (left>620)
	 {
	 $("#paddleB").css("left",left-10);	
	 }
}
if (pingpong.pressKey[KEY.UP]==true) {
	var top = parseInt($("#paddleB").css("top"));
	$("#paddleB").css("top",top-10);
}

if (pingpong.pressKey[KEY.DOWN]==true) {
	var top = parseInt($("#paddleB").css("top"));
	$("#paddleB").css("top",top+10);
}


if (pingpong.pressKey[KEY.W]==true) {
	var top = parseInt($("#paddleA").css("top"));
	$("#paddleA").css("top",top-10);
}

if (pingpong.pressKey[KEY.S]==true) {
	var top = parseInt($("#paddleA").css("top"));
	$("#paddleA").css("top",top+10);
}
}
function moveBall() {
var ball = pingpong.ball;
var playgroundHeight = parseInt($("#playground").height());
var playgroundWidth = parseInt($("#playground").width());
var paddleAy = parseInt($("#paddleA").css("top"));
var paddleAx = parseInt($("#paddleA").css("left"));
var paddleBy = parseInt($("#paddleB").css("top"));
var paddleBx = parseInt($("#paddleB").css("left"))
if(ball.y + ball.speed * ball.directionY > playgroundHeight)
	{
		ball.directionY = -1;
	}
if(ball.y + ball.speed * ball.directionY < 0)
{
	ball.directionY = 1;
}
if (ball.x + ball.speed * ball.directionX > playgroundWidth) {
		ball.x = 400;
		ball.y = 200;
		pingpong.scoreA++;
		$("#scoreA").html(pingpong.scoreA);
}
if (ball.x + ball.speed * ball.directionX > paddleBx && ((ball.y + ball.speed * ball.directionY < paddleBy + 70) && (ball.y + ball.speed * ball.directionY > paddleBy))) 
{
	ball.directionX = -1;
}
if(ball.x + ball.speed * ball.directionX < 0)
{
		ball.x = 400;
		ball.y = 200;
		pingpong.scoreB++;
		$("#scoreB").html(pingpong.scoreB);
}
if (ball.x + ball.speed * ball.directionX < paddleAx +30 && ((ball.y + ball.speed * ball.directionY < paddleAy + 70) && (ball.y + ball.speed * ball.directionY > paddleAy))) 
{
	ball.directionX = 1;
}	
ball.x += ball.speed * ball.directionX ;
ball.y += ball.speed * ball.directionY ;
$("#ball").css(
{"left": ball.x,
	"top": ball.y
	});
}
