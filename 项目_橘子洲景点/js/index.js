window.onload=function(){
	tiaozheng()
}	


function tiaozheng(){
	img = new Image();
	img.src="img/maps.jpg"
	
	c=document.getElementById("myCanvas");
	ctx=c.getContext("2d");
	
	//y+=1000
	setInterval('a()',20)	//1300*8666
	
	console.log(y)
}
var y_z=3	//y的增量

var sx=0
var sy=0
var x=0
var y=0

var 前进状态=true

//岛的折线形态数组
var zb=[[642,19307],	//岛最下端中点
		[868,17169],
		[1102,12425],
		[1614,6954],	//桥的中点
		[2498,3180],
		[2802,2144]]	//最顶端中点

function 设置横坐标(){
	var Y=20000-y
	var i=1
	if(前进状态){
		if(Y<zb[1][1])
			i=2
		if(Y<zb[2][1])
			i=3
		if(Y<zb[3][1])
			i=4
		if(Y<zb[4][1])
			i=5
	}
	else{
		if(Y>zb[5][1])
			i=4
		if(Y>zb[4][1])
			i=3
		if(Y>zb[3][1])
			i=2
		if(Y>zb[2][1])
			i=1
	}
	
	//直线方程
	var X1=zb[i][0]
	var Y1=zb[i][1]
	
	var X2=zb[i-1][0]
	var Y2=zb[i-1][1]
	
	var A = Y2 - Y1
	var B = X1 - X2
	var C = X2*Y1 - X1*Y2
	
	sx=(-B*Y-C)/A-900

}

function a(){
	设置横坐标()
	y+=y_z
	ctx.drawImage(img,sx,18307-y,3000,2300,x,0,3000,1600);
}
