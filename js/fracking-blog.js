 // Initialize collapse button
 
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
$('#menu').on('click', openNav);

const mq = window.matchMedia( "(min-width: 500px)" );
  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
	if (mq.matches) {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
	
	} else {
	document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("main").style.display = "none";
	}

}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main").style.display = "block";
}

