// ===============================HEADER================================
function myFunction_properties() {
    var x = document.getElementById("submenu_properties");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function myFunction_calculator() {
    var x = document.getElementById("submenu_calculator");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

 
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("submenu_properties").style.display = "none";
    document.getElementById("submenu_calculator").style.display = "none";
    document.getElementById("mySidenav").style.width = "0";
}
// ======================End Of HEADER======================================
