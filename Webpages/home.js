function fileComplaint()
{

    openLink(event, 'Hostel');
    try{
    var form = document.getElementById('contact');//.style.display('block');
    form.style.display = 'block';
}
    catch(error)
    {
        alert(error.toString());      
    }
   // alert("djfkl;afj");
    //form.style.display('block');
}



function openLink(evt, linkName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("myLink");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(linkName).style.display = "block";
    evt.currentTarget.className += " w3-red";
  }



  //Dropdown menu

  function myDropDownFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
function closeDropdown(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        
      }
    }
  }
}

 
window.onclick = function(event)
{
  this.closeDropdown(event);
}


function selectFromDropDown(num)
{
  const types = ['electrical','water','network','other'];
  var disp = document.getElementById("DropdownDisplay")

  disp.innerHTML = types[num];
}


//Dropdown Over




  //Already present script

  // Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}

//Already present script over