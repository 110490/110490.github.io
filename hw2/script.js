// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
var randomColor = Math.floor(Math.random()*16777215).toString(16);
let x = -100, y = -100, dx = 10, dy = 10, r = 30, aa = 0 ;

const setBg = () => {
  
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  color = "#" + randomColor;
}
document.addEventListener("mousedown", setBg);
setBg();



// 按下按鍵時觸發
document.addEventListener("mousemove", mousemove);
function mousemove(e) 
{
		if(aa == 1)
		{	
				x = e.clientX - canvas.offsetLeft;
				y = e.clientY - canvas.offsetTop;
				
		}
            document.addEventListener("mousedown", mousedown);
			document.addEventListener("mouseup", mouseup);		
}
function mousedown() 
{
	aa = 1;
}
function mouseup() 
{
	aa = 0;
}


// TODO: 滑鼠移動(mousemove)時觸發，改變位置(x, y)為滑鼠目前位置(e.clientX, e.clientY)
// ...


// 畫圓形
function drawBall() 
{
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI*2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
	ctx.fillStyle = color;
	ctx.fill();
	ctx.closePath();
}

// 更新畫布
function draw() 
{	
    drawBall();
    requestAnimationFrame(draw);
}
draw();
