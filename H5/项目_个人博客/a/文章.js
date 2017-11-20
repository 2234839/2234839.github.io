function 文章(id,src){					//按后面src数组向提供id的元素中依次添加
	for (var i=0;i<4;i++) {				//创建四列用来存放图片的div
		var div = document.createElement("div"); 
    	div.id='div'+i
    	div.style="	width:280px;float:left;margin-left:18px;margin-top:24px;";	//设置css
    	document.getElementById(id).appendChild(div);
	}
	
	for (var i=0;i<src.length;i++)		//向div中添加图片
		添加图片元素('div'+i%4,'img/'+src[i]);
	
	function 添加文章元素(id,src){			//向指定元素添加img元素
		var Img = document.createElement("img");     //创建一个img元素  
   		Img.src=src;
    	Img.style="	width:280px;height:300px;margin-top:18px;";
    	document.getElementById(id).appendChild(Img);
	}
	
	文章=function(src){
		//默认值
		this.time=2017/1/1
		this.作者='佚名'
		this.分类='其他'
		this.img_src='viod(0)'
		this.标题='获取标题出错'
		this.内容='获取内容出错'
		
		var div=document.createElement('div');
			var img=document.createElement('img')
			var h3=document.createElement('h3')
		
	}
}