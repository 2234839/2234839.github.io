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
}
window.onload=function(){
	get(0);
} 
