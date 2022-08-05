
var search = true; 
 document.getElementById("searchBar").onclick = function(){
    if(search===true){
    document.getElementById("search").style.display="block";

    search =false;
}
else{
    document.getElementById("search").style.display="none"; 
    search = true; 
}
}
var shop_cart = 3;
document.getElementById("shopCart").onclick = function(){
    if(shop_cart===3){
        document.getElementById("shoppingCart").style.display = "block"

        shop_cart =! 3
    }
    else{
        document.getElementById("shoppingCart").style.display ="none";
        shop_cart = 3
    }
}


var menu = true;
document.getElementById("menuBar").onclick = function(){
    if(menu === true){
        document.getElementById("navs").style.display="block";

        menu = false;
    }
    else{
        document.getElementById("navs").style.display="none";
        menu = true;
    }
}
