<?php  


$allfiles = scandir("./catalog_images/" . $_GET['type_of_furniture'], 0);

for($i=2; $i<count($allfiles);$i++) {
    $all_images[$i-2] = $allfiles[$i];
}



echo json_encode($all_images);

?>