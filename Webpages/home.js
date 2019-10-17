function fileComplaint()
{

    openLink(event, 'Flight');
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