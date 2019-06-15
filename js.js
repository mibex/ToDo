var noviZadatak = document.getElementById("noviZadatak");

function noviElement() {
   
    var unosVrednosti = document.getElementById("noviUnos").nodeValue
    var li = document.createElement("li");
}



var zatvori = document.getElementsByClassName("zatvori");
for(i = 0; i < zatvori.length; i++) {
    zatvori[i].onclick = function() {
        var kk = this.parentElement;
        kk.style.display = "none";
    }
}




