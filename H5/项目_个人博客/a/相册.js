function 相册(id,src){	//按后面src数组向提供id的元素中依次添加
	淡入()
	for (var i=0;i<4;i++) {				//创建四列用来存放图片的div
		var div = document.createElement("div"); 
    	div.id='div'+i
    	div.style="	width:280px;float:left;margin-left:18px;margin-top:24px;";	//设置css
    	document.getElementById(id).appendChild(div);
	}
	
	for (var i=0;i<src.length;i++)		//向div中添加图片
		添加图片元素('div'+i%4,'img/'+src[i]);
	
	function 添加图片元素(id,src){			//向指定元素添加img元素
		var Img = document.createElement("img");     //创建一个img元素  
   		Img.src=src;
    	Img.style="	width:280px;height:300px;margin-top:18px;";
    	Img.style.opacity=0;
    	document.getElementById(id).appendChild(Img);
	}
	淡入_ID=setInterval('淡入()',100)
	
}
	
	function 淡入(){
		var arr=document.getElementById("div_body").getElementsByTagName("img")
		if(arr.length==0)
			return '数组为空';
		for (var i=0;i<arr.length;i++)
			if(arr[i].style.opacity<1)
				arr[i].style.opacity=parseFloat(arr[i].style.opacity)+0.1
		if(arr[arr.length-1].style.opacity==1)
			clearInterval(淡入_ID)
	}
	