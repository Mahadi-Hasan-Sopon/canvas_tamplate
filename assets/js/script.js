//nav menu class toggle script
		const list = document.querySelectorAll(".navigation-ul .nav-link");
		function activeLink() {
			list.forEach((item) =>
			item.classList.remove('active'));
			this.classList.add('active'); 
		}
		list.forEach((item)=>
			item.addEventListener('click', activeLink));
	


// Get the button, and when the user clicks on it, execute myFunction
 document.getElementById("myBtn").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
};

// navigation menu sticky class addition 
window.onscroll = function() {navSticky(), padding()};

function navSticky() {
  if (document.body.scrollTop > 44 || document.documentElement.scrollTop > 44) {
    document.getElementById("navigation-wrapper").className = "sticky";
    document.getElementById("navStyle").className = "navbar navbar-expand-lg navbar-light";
  } else {
    document.getElementById("navigation-wrapper").className = "";
    document.getElementById("navStyle").className = "navbar navbar-expand-lg navbar-dark";
  };

};

// nav container padding controling
function padding(){
  if (document.body.scrollTop >= 300 || document.documentElement.scrollTop >= 300) {
    document.getElementById("pad").className = "container py-2";
  } else {
    document.getElementById("pad").className = "container py-4";
  };
};


/* another script to toggle class on window scroll
   first added scroll event, then selected header tag 
   and toggled class name while 
   [vertical scroll (scrollY)] is greater than 40px.*/

/* window.addEventListener("scroll", function(){
      var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 40)                 
}); */

















