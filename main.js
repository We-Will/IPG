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

// ------------------------------------------NEWSLETTER----------------------------------------------------
 function checkIfEmail() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var b = document.getElementById("email_popup").value;

    if (!re.test(b)) {

        document.getElementById("email_popup").style.border = "solid 1px red";
        document.getElementById("notValidEmail").style.display = "block";
        document.getElementById("notValidEmail").style.transform = "translate(-48.5%, -25%)"
    } else {
        document.getElementById("notValidEmail").style.display = "none";
         document.getElementById("email_popup").style.border = "none";
        document.getElementById("ValidEmail").style.display = "block";
        document.getElementById("ValidEmail").style.transform = "translate(-50%, -25%)"

        setTimeout(function ()
        {
            button.click();
        }, 1800);
    }

}
// ----------------------------------------NEWSLETTER---------------------------------------------------
