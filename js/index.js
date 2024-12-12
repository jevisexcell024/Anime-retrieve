hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active")
}



// sticky navbar 
let header = document.querySelector("header");
window.onscroll = function() {
  if (document.documentElement.scrollTop > 20) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function hide(elementID) { 
	var myElement = document.getElementById(elementID); 
	if (myElement) myElement.style.display = "none"; 
	showLink.style.display = "block"; 
	hideLink.style.display = "none"; 
} 
function show(elementID) { 
	var myElement = document.getElementById(elementID); 
	if (myElement) myElement.style.display = "block"; 
	showLink.style.display = "none"; 
	hideLink.style.display = "block"; 
}