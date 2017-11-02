window.onload=function(){
	a=[]	//用来存放点的状态
	ctx1=document.getElementById("canvas")
	W=window.screen.availWidth	//屏幕宽高
	H=window.screen.availHeight
	寿命=350
	ctx1.height=H
	ctx1.width=W
	ctx=ctx1.getContext("2d")
	ID=setInterval("诞生()",200)
	setInterval("渲染(a)",20)
}
function 诞生(){
	if(a.length<32)
		for (var i=0;i<a.length;i++)
			if(a[i]==undefined)
				break
			else{}
	else
		clearInterval(ID)
	a[i]=新生点()
	
}
function 渲染(a){
	ctx1.height=ctx1.height	//清空画布 如果不清空画布 也蛮有意思的
	for(var i=0;i<a.length;i++){
		边界碰撞检测(i)
        var alpha = 1 - (寿命-a[i][4])/寿命//愈长大便愈透明
        ctx.beginPath()
        ctx.fillStyle = "rgba("			//rgba(r,g,b,a) 红 绿 蓝 透明度
                + a[i][3][0] + ","
                + a[i][3][1] + ","
                + a[i][3][2] + ","
                + alpha.toFixed(2) + ")"
		
		a[i][0]+=a[i][0]*a[i][5][0]		//x=x+Vx*t  简单的恒速运动  t为单位时间,故省略
		a[i][1]+=a[i][0]*a[i][5][1]		
		ctx.arc(a[i][0],a[i][1],++a[i][2],0,2*Math.PI)	
		
		ctx.fill()
		if(a[i][4]--==0)//寿命若尽
			a[i]=新生点()//便投胎转世
	}
}
function 新生点(){
	return([Math.random()*(W-100)+50,	//x坐标
			Math.random()*(H-100)+50,	//y坐标
			5,							//初始半径
			[~~(Math.random()*200)+55,~~(Math.random()*200)+55,~~(Math.random()*200)+55],//初始颜色 
										//本来使用这个 ~~(Math.random()*255)  之所以将最低值设为55是为了提高生成的颜色的明度
										//'#'+Math.floor(Math.random()*16777215).toString(16)  另外一种取随机颜色的方式
			寿命,						//寿命  单位为调用渲染函数的 时间间隔
			[5*Math.random()/1000*随机取负(),5*Math.random()/1000*随机取负()]])		//速度在x轴和y轴上的两个分量
}
function 随机取负(){
	if(Math.random()>0.5)
		return(-1)
	return(1)
}
function 边界碰撞检测(i){	//碰到y边界则对Vx置反
	var Rx=a[i][0]
	var Ry=a[i][1]
	if(Rx<0||Rx>W)
		a[i][5][0]=-a[i][5][0]
	if(Ry<0||Ry>H)
		a[i][5][1]=-a[i][5][1]
}
