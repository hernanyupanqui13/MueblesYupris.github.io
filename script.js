function createItem(value, type_of_furniture) {
    let item = document.createElement("div");
    item.classList.add("items");
    
    let image_container = document.createElement("div");
    image_container.classList.add("image");
    let image = document.createElement("img");
    image_container.appendChild(image);
    let img_tittle = document.createElement("span");
    img_tittle.innerHTML = value.slice(0, -4); 
    image.src = "./catalog_images/"+ type_of_furniture + "/" + value;
    image.classList.add("image_catalog");
    
    item.appendChild(image_container);
    item.appendChild(img_tittle);
    document.getElementById("the_main").appendChild(item);
        
}




function requestImages(type_of_furniture) {
    var xhttp_onload = new XMLHttpRequest();
    xhttp_onload.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var all_images = JSON.parse(this.responseText);
            console.log(all_images);
            for (let i = 0; i<all_images.length; i++) {
                createItem(all_images[i], type_of_furniture);
            }
        }
    }
    xhttp_onload.open("GET", "catalog.php?type_of_furniture=" + type_of_furniture, true);
    xhttp_onload.send();
}



const veladores_html_element = document.getElementById("veladores");
const closets_html_element = document.getElementById("closets");
const centros_html_element = document.getElementById("centros_entretenimiento");

if (veladores_html_element != null) veladores_html_element.addEventListener("load", requestImages("veladores_y_otros"));
if (closets_html_element != null) closets_html_element.addEventListener("load", requestImages("closets"));
if (centros_html_element != null) centros_html_element.addEventListener("load", requestImages("centros_entretenimiento"));

