<!DOCTYPE html>
<html>
<body>

<?php
$myfile = fopen("index.html", "a") or die("Unable to open file!");


echo fwrite($myfile,"<h2>saw min oo</h2>");
fclose($myfile);

?>

</body>
</html>
