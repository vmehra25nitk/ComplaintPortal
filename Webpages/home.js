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

//Open the file complaint box
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
function whatChecked(that,othName)
{
  if(that.value=='other')
  document.getElementsByName(othName)[0].style.visibility = 'visible';

  else
  document.getElementsByName(othName)[0].style.visibility = 'collapse';
}
//Dropdown Over

//Submit Complaint


function compSubmit(type)
{
  switch(type)
  {
    case 'hostel' :
    submitHostel();break;
    case 'fees' :
    submitFees();break;
    case 'mess' :
    submitMess();break;
    case 'fac' :
    submitFac();break;
    case 'lab' :
    submitLab();break;
    case 'library' :
    submitLibrary();break;
  }

  function submitHostel()
  {
    
    const category = document.querySelector('input[name="hostelCat"]:checked').value;
    
    const relatedTo = document.getElementById('hostelSelect').value;

    var otherRel = "";

    if(relatedTo== 'other')
    otherRel = ":"+document.getElementsByName('hostelOther')[0].value;

    const description = document.getElementById('hostelDesc').value;


    const toBeSent = {
                      category: category,
                      type : relatedTo+otherRel,
                      desc : description
                    }

    alert(toBeSent.category+" "+toBeSent.Htype +" "+toBeSent.desc);
  }

  function submitFees()
  {
    
    const category = document.querySelector('input[name="feesCat"]:checked').value;
    

    const description = document.getElementById('feesDesc').value;


    const toBeSent = {
                      category: category,
                      desc : description
                    }

    alert(toBeSent.category+" "+toBeSent.desc);
  }


  function submitMess()
  {
    
    const category = document.querySelector('input[name="messCat"]:checked').value;
    
    const relatedTo = document.getElementById('messSelect').value;

    var otherRel = "";
    if(relatedTo== 'other')
    otherRel = ":"+document.getElementsByName('messOther')[0].value;

    const description = document.getElementById('messDesc').value;


    const toBeSent = {
                      category: category,
                      type : relatedTo+otherRel,
                      desc : description
                    }

    alert(toBeSent.category+" "+toBeSent.type +" "+toBeSent.desc);
  }

  function submitFac()
  {
    
    const category = document.querySelector('input[name="facCat"]:checked').value;
    
    const dept = document.getElementById('facSelect').value;
    
    const name = document.getElementsByName('facName')[0].value;
    
    const description = document.getElementById('facDesc').value;


    const toBeSent = {
                      category: category,
                      dept : dept,
                      name : name,
                      desc : description
                     }

    
    alert(toBeSent.category+" "+toBeSent.dept +" "+toBeSent.name+" "+toBeSent.desc);
  }

  function submitLab()
  {
    
    const category = document.querySelector('input[name="labCat"]:checked').value;
    
    const dept = document.getElementById('labSelect').value;

    const name = document.getElementsByName('labName')[0].value;
   
    const description = document.getElementById('labDesc').value;


    const toBeSent = {
                      category: category,
                      dept: dept,
                      name : name,
                      desc : description
                    }

    alert(toBeSent.category+" "+toBeSent.dept +" "+toBeSent.name+" "+toBeSent.desc);
  }

  function submitLibrary()
  {
    
    const category = document.querySelector('input[name="libCat"]:checked').value;
    
    const relatedTo = document.getElementById('libSelect').value;

    var otherRel = "";

    if(relatedTo== 'other')
    otherRel = ":"+document.getElementsByName('libOther')[0].value;

    const description = document.getElementById('libDesc').value;


    const toBeSent = {
                      category: category,
                      type : relatedTo+otherRel,
                      desc : description
                    }

    alert(toBeSent.category+" "+toBeSent.type +" "+toBeSent.desc);
  }
  



}
//Submit Complaint Over

