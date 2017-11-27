var y_z = 1 //y的增量

var sx = 0
var sy = 0
var x = 0
var y = 1000

var 前进状态 = true

img = new Image();
img.src = "img/maps.jpg"

//岛的折线形态数组
var zb = [
	[642, 19307], //岛最下端中点
	[868, 17169],
	[1102, 12425],
	[1614, 6954], //桥的中点
	[2498, 3180],
	[2802, 2144]
] //最顶端中点

//按y的值从大到小排列
var zym_xy= [[647,19107],	//问天台
			[703,17870],	//诗词碑
			[1080,15638],	//竹园
			[1365,10530]]	//焰火广场

window.onload = function() {
	setTimeout(function(){
		document.getElementById("jiazai").style.opacity="0"
	},2000)
	
	tiaozheng()
}

function tiaozheng() {

	c = document.getElementById("myCanvas");
	ctx = c.getContext("2d");

	setInterval('a()', 2)
}

function 设置横坐标() {
	var Y = 20000 - y
	var i = 1
	if(前进状态) {
		if(Y < zb[1][1])
			i = 2
		if(Y < zb[2][1])
			i = 3
		if(Y < zb[3][1])
			i = 4
		if(Y < zb[4][1])
			i = 5
	} else {
		if(Y > zb[5][1])
			i = 4
		if(Y > zb[4][1])
			i = 3
		if(Y > zb[3][1])
			i = 2
		if(Y > zb[2][1])
			i = 1
	}

	//直线方程
	var X1 = zb[i][0]
	var Y1 = zb[i][1]

	var X2 = zb[i - 1][0]
	var Y2 = zb[i - 1][1]

	var A = Y2 - Y1
	var B = X1 - X2
	var C = X2 * Y1 - X1 * Y2

	sx = (-B * Y - C) / A - 1000

}		
			

function a() {
	设置横坐标()
	_zyms=document.getElementsByClassName("_zym")
	for(var i=0;i<_zyms.length;i++){
		//下面这两句算式是凑出来的所以到屏幕下方会出现偏差	-_-
		var _x = (zym_xy[i][0] - sx-220) //* (0.9+_y/10000)
		_zyms[i].style.marginLeft = `${_x}px`
		var _y = (zym_xy[i][1] - 20914 + y-280) * 0.57125 + 300
		_zyms[i].style.marginTop = `${_y}px`
	}
	var img1 = document.getElementById("img1")
	y += y_z
	ctx.drawImage(img, sx, 20000 - y, 1700, 1600, 0, 0, 1700, 1600);
}