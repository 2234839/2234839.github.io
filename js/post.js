var i=2;

function get(i2){
document.getElementById("wen").innerHTML=" ";//清空该处的代码
$("#wen").load('rizhi/'+(i+i2)+'.html');
i=i+i2;
if(i<1){
	alert("没有更前面的文章了");
	get(1);
}
if(i>3){
	alert("没有更后面的文章了");
	get(-1);
}
if(document.getElementById("wen").innerHTML==" "){
	document.getElementById("wen").innerHTML="无法获取日志，这可能是您的网络存在问题或者是本网站被离线执行了<br/>对于前者请在HBuilder中打开，后者你可以选择访问本网站的在线版<a href='http://2234839.github.io/H5/9-8/index.html'>个人简介</a>";
}
}
window.onload=function(){
	get(0);
} 
