window.onload=function(){
	a=[]	//用来存放点的状态
	ctx1=document.getElementById("canvas")
	W=window.screen.availHeight	//屏幕宽高
	H=window.screen.availWidth
	寿命=350
	ctx1.height=W
	ctx1.width=H
	ctx=ctx1.getContext("2d")
	诞生()
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
	ctx1.height=ctx1.height	//清空画布
	for(var i=0;i<a.length;i++){
		ctx.beginPath()
        var alpha = 1 - (寿命-a[i][4])/寿命//愈长大便愈透明
        
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
	return([Math.random()*(H-100)+50,	//x坐标
			Math.random()*(W-100)+50,	//y坐标
			5,							//初始半径
			[~~(Math.random()*255),~~(Math.random()*255),~~(Math.random()*255)],//初始颜色	'#'+Math.floor(Math.random()*16777215).toString(16)  另外一种取随机颜色的方式
			寿命,						//寿命  单位为50毫秒
			[Math.random()/1000*随机取负(),Math.random()/1000*随机取负()]])		//速度在x轴和y轴上的两个分量
}
function 随机取负(){
	if(Math.random()>0.5)
		return(-1)
	return(1)
}
