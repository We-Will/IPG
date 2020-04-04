// ===============================HEADER================================
function myFunction() {
    var x = document.getElementById("submenu");
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
    document.getElementById("submenu").style.display = "none";
    document.getElementById("mySidenav").style.width = "0";
}
// ======================End Of HEADER======================================
