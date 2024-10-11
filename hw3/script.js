// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
var randomColor = Math.floor(Math.random()*16777215).toString(16);
let x = 0, y = 0, dx = 5, dy = 5, r = 30, m = 30, color = "#0095DD";
let x1 = canvas.width, y1 = 0, dx1 = 5, dy1 = 5, m1 =10, r1 = 10, color1 = "red";





// 畫圓形
function drawBall(x, y, r, color)
{
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
	ctx.arc(x1, y1, r1, 0, Math.PI * 2);	// arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle =  color;
    ctx.fill();
    ctx.closePath();
}



// 更新畫布
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    x = x + dx;
    y = y + dy;

    // TODO: 如果發生碰撞(畫布寬canvas.width, 畫布高canvas.height)，則改變速度(dx, dy)和顏色(color)
    // ...
	
	if( x < 0 || x > canvas.width) 
	{	
		dx = -dx;
		color = "#" + randomColor;
	}
	if( y < 0 || y > canvas.height) dy = -dy;

    drawBall(x, y, r, color);

    x1 = x1 + dx1;
    y1 = y1 + dy1;

    
	
	if( x1 < 0 || x1 > canvas.width) 
	{	
		dx1 = -dx1; 
		color = "#" + randomColor;
	}
	if( y1 < 0 || y1 > canvas.height) dy1 = -dy1;
	
	if( (x-x1)*(x-x1) + (y-y1)*(y-y1) < (r+r1)*(r+r1) )  
	{	
			R = m1 + m;
		[dx,dx1] = [((m - m1) * dx + 2*m1*dx1)/R ,((m1 - m) * dx1 + 2*m*dx)/R] ;
		[dy,dy1] = [((m - m1) * dy + 2*m1*dy1)/R ,((m1 - m) * dy1 + 2*m*dy)/R] ;
		color = "#" + randomColor;
	}
    drawBall(x1, y1, r1, color);
    requestAnimationFrame(draw);
}
draw();
