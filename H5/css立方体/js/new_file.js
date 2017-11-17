window.onload=function(){
	
	var X=Y=Z=0
	
	setInterval(function(){
		旋转(X++,Y++,Z++)
	},20)

}

function 旋转(X,Y,Z){
	var a=document.getElementsByClassName("box")[0]
	a.style.transform=`rotateX(${X}deg) rotateY(${Y}deg) rotateZ(${Z}deg)`
}
