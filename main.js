var images = ["Familypic_DC.jpg", "Dhruva.JPG", "Om.JPG", "Amma.jpg", "Acha.jpg"]

var names = ["Family Pic", "Dhruva", "Om", "Amma", "Acha"]

var i = 0;
function update(){
    i++;
    var number_of_family_members = 5;
    if(i > number_of_family_members){
        i = 0;
    }
    var updatedImages = images[i];
    var updatedName = names[i];
    document.getElementById("family").src = updatedImages;
    document.getElementById("names").innerHTML = updatedName;

}