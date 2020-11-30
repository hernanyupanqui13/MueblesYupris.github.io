<?php  


$allfiles = scandir("./catalog_images/" . $_GET['type_of_furniture'], 0);

for($i=2; $i<count($allfiles);$i++) {
    $all_images[$i-2] = $allfiles[$i];
}


$all_items = [];

for($x=0; $x<count($all_images); $x++) {
    if(substr($all_images[$x], 0, 9) != substr($all_images[$x+1], 0, 9)) {
        $newItem = new CatalogItem($all_images[$x]);
        array_push($all_items, $newItem);
    } else {
        $newItem = new CatalogItem($all_images[$x]);
        while(substr($all_images[$x], 0, 11) == substr($all_images[$x+1], 0, 11)){
            $newItem->addImage($all_images[$x+1]);
            $x++;
        }
        array_push($all_items, $newItem);
    }
}

class CatalogItem {
    public $name;
    public $images = [];

    function _construct($the_name) {
        $this->name = $the_name;
        array_push($this->images, $the_name);   
    }

    function addImage($image_to_add) {
        array_push($this->images, $image_to_add);
    }

}

echo json_encode($all_items);

?>