<?Php
$degrees = -90;  //change this to be whatever degree of rotation you want
 
header('Content-type: image/jpeg');

$img=$_POST['imgRotate'];
 
$filename = '../'.$img;  //this is the original file
 
$source = imagecreatefromjpeg($filename) or notfound();
$rotate = imagerotate($source,$degrees,0);
 
$new=imagejpeg($rotate,$filename); //save the new image
 echo 'new';
 
?>