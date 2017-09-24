var z=[0,1,2,3,4,5,6,7,8,9,'+','-','&nbsp;&nbsp;*','&nbsp;&nbsp;/','&nbsp;CE','&nbsp;&nbsp;=','重置'];
var z2=[0,1,2,3,4,5,6,7,8,9,'+','-','*','/','CE','=','重置'];//键值表  上面那个是为了排版对齐

function cc(str){//乘除计算    思路是找到一个乘号或除号   然后将这个位置的前后两个数  做乘除运算后将值保存在此    删除前后两个数组元素   再重新开始找    直到找不到为止
	for (var i = 0; i <str.length; i++){
		if(str[i]=='*'){
			str[i]=str[i-1]*str[i+1];
			str.splice(i+1,1);		//删除乘号相临的两个数
			str.splice(i-1,1);		//
			return cc(str);
		}
		if(str[i]=='/'){
			str[i]=str[i-1]/str[i+1];
			str.splice(i+1,1);
			str.splice(i-1,1);
			return cc(str);
		}
	}
	return str;//递归结束后返回的字符串处理结果     只剩下   数字   +  -  
}
function jj(str){//加减计算   与上同
	for (var i = 0; i <str.length; i++){
		if(str[i]=='+'){
			str[i]=parseFloat(str[i-1])+parseFloat(str[i+1]);//parseInt() 将字符串转为Float型的数值  否则加号会起到连接作用而不是运算
			str.splice(i+1,1);
			str.splice(i-1,1);
			return jj(str);
		}
		if(str[i]=='-'){
			str[i]=parseFloat(str[i-1])-parseFloat(str[i+1]);
			str.splice(i+1,1);
			str.splice(i-1,1);
			return jj(str);
		}
	}
	return str;
}
function helixing(str){//判断算式的合理性   以及   首字符加零处理
	if(str.charAt(0)=='*'||str.charAt(0)=='/'){
		alert('错误:0X01\n\n算式首字符不能为  '+str.charAt(0))	;
		return 0;
	}
	if(str.charAt(str.length-1)=='*'||str.charAt(str.length-1)=='/'||str.charAt(str.length-1)=='+'||str.charAt(str.length-1)=='-'){
		alert('错误:0X02\n\n算式末字符不能为  '+str.charAt(str.length-1))	;
		return 0;
	}
	var temp;
	for (var i=0; i<str.length;i++) {
		if(str.charAt(i)=='+'||str.charAt(i)=='-'||str.charAt(i)=='*'||str.charAt(i)=='/'){
			if(temp==1){
				alert('错误:0X03\n\n两个运算符不能在一起')	;
				return 0;
			}	
			temp=1;
		}else{
			temp=0;
		}
	}
	str='0'+str;
	return str;
}
function yunsuan(){//四则运算
	var text=document.getElementById("text");
	if(helixing(text.value)=='0')//判断算式的合理性
		return ;
	else
		text.value=helixing(text.value);
	var h=text.value.length;
	var s,j=0;
	var str=new Array();//定义数组                       A是大写的！！！    
	
	for (var i = 0; i <h; i++) {//数组初始化
		str[i]='';
	}
	
	for (var i = 0; i <h; i++) {//将text中的字符串   分割开来存入str中
		s=text.value.charAt(i);
		if(s=='+'||s=='-'||s=='*'||s=='/'){
			j+=2;
			str[j-1]+=s;
		}
		else
			str[j]+=s;
	}
	
	for (var i = 0; i <h; i++) {//去除空的数组元素
		if(str=='')
		str.splice(i,1);
	}
	
	text.value=jj(cc(str))[0];//先进行乘除运算 然后再加减运算   因为加减乘除运算删除数组元素逻辑可能存在一点小问题，导致直接输出str会多一些逗号，又懒的找bug了所以直接输出str的第一个元素可避免逗号的出现
}

function CE(){//删除一个字符
	var text=document.getElementById("text")
	text.value=text.value.substring(0,text.value.length-1);//substring(a,b)取字符串的a到b的字符
}
function AnXia(a){//当按钮被按下时
	s=z2[a.replace(/[^0-9]/ig,"" )];//通过正则取出id中的数值   然后取出键值表中对应的值
	switch(s){
		case '=':yunsuan();break;//运算
		case 'CE':CE();break;//删除一个字符
		case '重置':document.getElementById("text").value='';break;//清空
		default :document.getElementById("text").value+=s;
	}
}
function XiuGai(a,b){//修改div中h2的内容
	document.getElementById(a).innerHTML="<h2>"+b+"</h2>";
}

window.onload = function () {//创建计算器界面
	var sourceNode = document.getElementById("div-0"); // 获得被克隆的节点对象 
	for (var i = 1; i < 12; i++) { //4×3的按键
		var clonedNode = sourceNode.cloneNode(true); // 克隆节点 
		clonedNode.setAttribute("id", "div-" + i); // 修改一下id 值，避免id 重复 
		document.getElementById("body").appendChild(clonedNode); // 在body div中插入克隆的节点
	}
	for (var i = 12; i < 17; i++) { //下面那五个按键
		var clonedNode = sourceNode.cloneNode(true); // 克隆节点 
		clonedNode.setAttribute("id", "div-" + i); // 修改一下id 值，避免id 重复 
		document.getElementById("jisuan").appendChild(clonedNode); // 在body div中插入克隆的节点
	}
	for (var i=0;i<17;i++) {//键值表输出
		XiuGai("div-" + i,z[i]);
	}
}

