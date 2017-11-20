window.onload=function(){
//	var sss=['index_beijin.jpg','index_beijin.jpg','index_beijin.jpg','index_beijin.jpg','index_beijin.jpg','index_beijin.jpg','index_beijin.jpg','index_beijin.jpg','index_beijin.jpg','index_beijin.jpg']
//相册('div_body',sss)
加载组件('div_body',"个人博客/index.html")

加载组件('aside_1',"关于博主/index.html")
加载组件('aside_2',"侧边栏_三合一/index.html")
加载组件('aside_3',"友情链接/index.html")
}
function 加载组件(id1,src){	
	$('#'+id1).load(src)
	
	switch(src){
		case '个人博客/index.html':改变侧边栏(true);break;		//首页
		case '关于我/index.html':改变侧边栏(true);break;							//关于我
		case '碎言碎语/index.html':改变侧边栏(false);break;		//碎言碎语
		case '日记/index.html':改变侧边栏(true);break;			//个人日记
		case '相册/DE.html':改变侧边栏(false);break;				//相册展示
		case '个人博客/index.html':改变侧边栏(true);break;							//学无止境
		case '留言板/index.html':改变侧边栏(true);break;							//留言板
	}
	
	
}
function 改变侧边栏(b){		//b==true显示侧边栏
	if(b){
		document.getElementById("aside_1").style.display="block";
		document.getElementById("aside_2").style.display="block";
		document.getElementById("aside_3").style.display="block";
		document.getElementById("div_body").style.width="650px";
	}
	else{
		document.getElementById("aside_1").style.display="none";
		document.getElementById("aside_2").style.display="none";
		document.getElementById("aside_3").style.display="none";
		document.getElementById("div_body").style.width="900px";
	}
}
