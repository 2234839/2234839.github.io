<html>
<head>
	<title>匿议</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.0.js"></script>
	<script language="javascript" type="text/javascript">

		</script>
	<style type="text/css">

	</style>
</head>
 <body>
 <?php
 	echo "1.asp内容:<br/>";
	$file_name='../data/1.asp';
	$file=file_get_contents($file_name);
	echo $file;
	//$file=fopen($file_name,"a+") or exit("加载聊天文件失败!");
	function sock_post($url,$query){//模拟post
	$info=parse_url($url);
	$fp=fsockopen($info["host"],80,$errno,$errstr,3);
	$head="POST ".$info['path']." HTTP/1.0\r\n";
	$head.="Host: ".$info['host']."\r\n";
	$head.="Referer: http://".$info['host'].$info['path']."\r\n";
	$head.="Content-type: application/x-www-form-urlencoded\r\n";
	$head.="Content-Length: ".strlen(trim($query))."\r\n";
	$head.="\r\n";
	$head.=trim($query);
	$write=fputs($fp,$head);
	while(!feof($fp)){
		$line=fgets($fp);
		echo $line."<br-->";
	}
}
$purl="http://e2017.xyz/php/post.php";
echo "以下是POST方式的响应内容：
"; 	
sock_post($purl,"key=4280d1479a11450ab19e650c406dc5a7&info=你好，请问你是谁");

 ?>
  
 </body>
 </html>