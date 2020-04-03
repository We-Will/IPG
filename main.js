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
    document.getElementById("123").style.display = "none";
    
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("123").style.display = "block";
  }
// ======================End Of HEADER======================================
