window.onload=function(){

}	


function tiaozheng(){
	img = new Image();
	img.src="img/maps.jpg"
	
	c=document.getElementById("myCanvas");
	ctx=c.getContext("2d");
	
	//y+=1000
	setInterval('a()',20)	//1300*8666
	setInterval('设置横坐标()',150)
	
	console.log(y)
}
var y_z=3	//y的增量

var sx=0
var sy=0
var swidth=1300
var sheight=1000
var x=0
var y=0

var 前进状态=true
//岛的折线形态
var zb=[[642,19307],	//岛最下端中点
		[868,17169],
		[1102,12425],
		[1614,6954],	//桥的中点
		[2498,3180],
		[2802,2144]]	//最顶端中点

function zhuanhaun(){
	前进状态=!前进状态
	y_z=-y_z
	console.log(y_z)
	console.log("=>:"+(y+=y_z))
}

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
		if(Y<zb[4][1])
			y_z=-3
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
		if(Y>zb[1][1])
			y_z=3
	}
	
	//console.log(y_z)
	
	var X1=zb[i][0]
	var Y1=zb[i][1]
	
	var X2=zb[i-1][0]
	var Y2=zb[i-1][1]
	var A = Y2 - Y1
	var B = X1 - X2
	var C = X2*Y1 - X1*Y2
	
	sx=(-B*Y-C)/A-900
	
	//console.log(sx)
}

function a(){
	y+=y_z
	ctx.drawImage(img,sx,19307-y,3000,1770,x,0,3000,1770);
}
