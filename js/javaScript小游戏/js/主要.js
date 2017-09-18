window.onload = function(){//等待页面内DOM、图片资源加载完毕后触发执行
    var myCanvas=document.getElementById('myCanvas');
var ctx=myCanvas.getContext('2d');

//ctx.fillStyle='red';//写画笔颜色
//ctx.fillRect(0,0,100,100);//画方框

ctx.fillStyle = "rgb(200,0,0)";
ctx.fillRect (10, 10, 55, 50);
ctx.fillStyle = "rgba(0, 0, 200, 0.5)";//rgb颜色的最后一个值可调透明度
ctx.fillRect (30, 30, 55, 50);

ctx.clearRect(35,35,45,45);//擦除长方形
ctx.strokeRect(30,30,40,40);//画边框

ctx.beginPath(); //创建路径   画笑脸
ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle 画路径
ctx.moveTo(110,75); //移动笔刷位置
ctx.arc(75,75,35,0,Math.PI,false); // Mouth (clockwise) 
ctx.moveTo(65,65); 
ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye 
ctx.moveTo(95,65);
ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye
ctx.stroke();//绘制图形边框
ctx.fill();//填充路径

ctx.beginPath();
ctx.moveTo(25,25);
ctx.lineTo(105,25);//画直线
ctx.lineTo(25,105);
ctx.fill();//这个方法会自动闭合路径


//arc(x, y, radius, startAngle, endAngle, anticlockwise) x,y圆心坐标  半径    起弧度   末弧度   ture顺时钟flase逆时针
ctx.beginPath();
ctx.arc(200,200,50,0,Math.PI*2,true);//用画弧线的方法画了一个圆
ctx.stroke();

var img = new Image();   // Create new Image   装载图片
img.src = 'img/timg.png'; // Set source path
img.onload=function(){//图片加载完毕后再写图片
	ctx.drawImage(img,220,220);//画图
	ctx.drawImage(img,220,220, 100, 100);//缩放    【图，x，y,宽，高】
	
	ctx.drawImage(img,0,0,100, 100,400, 400, 100, 100); //切图   【图，x,y,w,h,x,y,w,h】前面的的四个坐标是表示切哪一部分，后面的是切出来的图显示在哪
}

ctx.fillStyle = 'yellow';//设置填充颜色
ctx.strokeStyle = 'red';//设置轮廓颜色

ctx.globalAlpha='0.5';//设置透明   影响全局
for (var i=0;i<6;i++){
	for (var j=0;j<6;j++){
		ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' 
		+ Math.floor(255-42.5*j) + ',0)';//这样用加号可以分行？？？
		ctx.fillRect(j*25,i*25,25,25);
	}
}
ctx.globalAlpha='1';//不加这个全部都会变透明    加上这个使上面的一段代码中画的变透明

for (var i = 0; i < 10; i++){ 
	ctx.lineWidth = 1+i; //设置画笔粗细
	ctx.beginPath(); 
	ctx.moveTo(5+i*14,5); 
	ctx.lineTo(5+i*14,140); 
	ctx.stroke();
}
}

