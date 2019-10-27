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



//
//Feed Table Creation
var iter =0;
function loadHostel(tabname){

 
  const tabl = document.getElementById(tabname);

  var dispRow = document.createElement("tr");

  dispRow.setAttribute("for", 'collapseme');
  dispRow.setAttribute('data-toggle','collapse');
  dispRow.setAttribute('href','#collapseme');
  dispRow.setAttribute('aria-expanded','true');
  dispRow.setAttribute('aria-controls','collapseme');
  dispRow.setAttribute('class','collapsed w3-large w3-text-blue');
  
  
  dispRow.innerHTML = "<td><i class='fas fa-hotel w3-large'> Hotel </i></td>"
                      + "<td><i class='far fa-calendar-plus'> <b> 12-19-1999</b></i></td>"
                      + "<td><i class='fas fa-pen'> jadkljafdjljasfjd;</i></td>"
                      +"<td><b>pending</b> </td>";
                          
 tabl.appendChild(dispRow);

 dispRow = document.createElement('tr');

 dispRow.setAttribute('style',"background-color: #f1f1f1;");
 dispRow.setAttribute('class',"w3-text-blue")

 dispRow.innerHTML =  "<td colspan='4'>"
                      +"<table id='collapseme' style='border: none;' class='collapse'>"
                        +"<tr>"
                        +"  <td style='padding-right: 155px; padding-left: 115px;'>"
                          +"  <div id='collapseme' style='text-align: right;' class='collapse fa fa-signature w3-large'> Hostel Name </div>"
                          +"</td>"
                          +"<td >"
                           +" <div id='collapseme'  class='collapse'>TeeHee</div>"
                        +"</tr>"
                        +"<tr>"
                          +"  <td style='padding-right: 155px; padding-left: 115px;'>"
                            +"    <div id='collapseme' style='text-align: right;' class='collapse fas fa-chevron-circle-down w3-large'>"
                            +"  Related To </div>"
                          +"<td >"
                           +" <div id='collapseme'  class='collapse'>TeeHee</div>"
                        +"</tr>"
                        +"<tr>"
                          +"  <td style='padding-right: 155px; padding-left: 115px;'>"
                            +"    <div id='collapseme' style='text-align: right;' class='collapse fas fa-pen  w3-large'> Description </div>"
                          +"<td >"
                            +"<div id='collapseme'  class='collapse'>TeeHedjlasjfdajdlkja;je</div>"
                       +" </tr>"
                      +"</table> "
                      +"  </td>"

tabl.appendChild(dispRow);
}


function loadFees(tabname)
{

  const tabl = document.getElementById(tabname);

  var dispRow = document.createElement("tr");

  dispRow.setAttribute("for", 'collapseme');
  dispRow.setAttribute('data-toggle','collapse');
  dispRow.setAttribute('href','#collapseme');
  dispRow.setAttribute('aria-expanded','true');
  dispRow.setAttribute('aria-controls','collapseme');
  dispRow.setAttribute('class','collapsed w3-large w3-text-teal');
  
  dispRow.innerHTML = "<td><i class='fas fa-rupee-sign w3-large'> Fees </i></td>"
                      + "<td><i class='far fa-calendar-plus'> <b> 12-19-1999</b></i></td>"
                      + "<td><i class='fas fa-pen'> jadkljafdjljasfjd;</i></td>"
                      +"<td><b>pending</b> </td>";
                          
 tabl.appendChild(dispRow);

 dispRow = document.createElement('tr');

 dispRow.setAttribute('style',"background-color: #f1f1f1;");
 dispRow.setAttribute('class',"w3-text-teal")

 dispRow.innerHTML =  "<td colspan='4'>"
                      +"<table id='collapseme' style='border: none;' class='collapse'>"
                        +"<tr>"
                          +"  <td style='padding-right: 75px; padding-left: 115px;'>"
                            +"    <div id='collapseme' style='text-align: right;' class='collapse fas fa-pen  w3-large'> Description </div>"
                          +"<td >"
                            +"<div id='collapseme'  class='collapse'>TeeHedjlasjfdajdlkja;je</div>"
                       +" </tr>"
                      +"</table> "
                      +"  </td>"

tabl.appendChild(dispRow);
}

function loadMess(tabname)
{

  const tabl = document.getElementById(tabname);

  var dispRow = document.createElement("tr");

  dispRow.setAttribute("for", 'collapseme');
  dispRow.setAttribute('data-toggle','collapse');
  dispRow.setAttribute('href','#collapseme');
  dispRow.setAttribute('aria-expanded','true');
  dispRow.setAttribute('aria-controls','collapseme');
  dispRow.setAttribute('class','collapsed w3-large w3-text-blue-grey');
  
  dispRow.innerHTML = "<td><i class='fas fa-utensils w3-large'>  Mess </i></td>"
                      + "<td><i class='far fa-calendar-plus'> <b> 12-19-1999</b></i></td>"
                      + "<td><i class='fas fa-pen'> jadkljafdjljasfjd;</i></td>"
                      +"<td><b>pending</b> </td>";
                          
 tabl.appendChild(dispRow);

 dispRow = document.createElement('tr');

 dispRow.setAttribute('style',"background-color: #f1f1f1;");
 dispRow.setAttribute('class',"w3-text-blue-grey")

 dispRow.innerHTML =   "<td colspan='4'>"
                      +"<table id='collapseme' style='border: none;' class='collapse'>"
                        +"<tr>"
                        +"  <td style='padding-right: 155px; padding-left: 115px;'>"
                          +"  <div id='collapseme' style='text-align: right;' class='collapse fa fa-signature w3-large'> Mess Name </div>"
                          +"</td>"
                          +"<td >"
                           +" <div id='collapseme'  class='collapse'>TeeHee</div>"
                        +"</tr>"
                        +"<tr>"
                          +"  <td style='padding-right: 155px; padding-left: 115px;'>"
                            +"    <div id='collapseme' style='text-align: right;' class='collapse fas fa-chevron-circle-down w3-large'>"
                            +"  Related To </div>"
                          +"<td >"
                           +" <div id='collapseme'  class='collapse'>TeeHee</div>"
                        +"</tr>"
                        +"<tr>"
                          +"  <td style='padding-right: 155px; padding-left: 115px;'>"
                            +"    <div id='collapseme' style='text-align: right;' class='collapse fas fa-pen  w3-large'> Description </div>"
                          +"<td >"
                            +"<div id='collapseme'  class='collapse'>TeeHedjlasjfdajdlkja;je</div>"
                       +" </tr>"
                      +"</table> "
                      +"  </td>"


tabl.appendChild(dispRow);

}


function loadFaculty(tabname)
{

  const tabl = document.getElementById(tabname);

  var dispRow = document.createElement("tr");

  dispRow.setAttribute("for", 'collapseme');
  dispRow.setAttribute('data-toggle','collapse');
  dispRow.setAttribute('href','#collapseme');
  dispRow.setAttribute('aria-expanded','true');
  dispRow.setAttribute('aria-controls','collapseme');
  dispRow.setAttribute('class','collapsed w3-large');
  dispRow.setAttribute('style','color:#2e005e');  
  
  dispRow.innerHTML = "<td><i class='fas fa-chalkboard-teacher w3-large'>  Faculty </i></td>"
                      + "<td><i class='far fa-calendar-plus'> <b> 12-19-1999</b></i></td>"
                      + "<td><i class='fas fa-pen'> jadkljafdjljasfjd;</i></td>"
                      +"<td><b>pending</b> </td>";
                          
 tabl.appendChild(dispRow);

 dispRow = document.createElement('tr');

 dispRow.setAttribute('style',"background-color:#f1f1f1; color:#2e005e; ");
 //dispRow.setAttribute('class',"w3-text-deep-purple");
//  e
 dispRow.innerHTML =   "<td colspan='4'>"
                      +"<table id='collapseme' style='border: none;' class='collapse'>"
                        +"<tr>"
                        +"  <td style='padding-right: 155px; padding-left: 115px;'>"
                          +"  <div id='collapseme' style='text-align: right;' class='collapse fa fa-signature w3-large'> Professor's Name </div>"
                          +"</td>"
                          +"<td >"
                           +" <div id='collapseme'  class='collapse'>TeeHee</div>"
                        +"</tr>"
                        +"<tr>"
                          +"  <td style='padding-right: 155px; padding-left: 115px;'>"
                            +"    <div id='collapseme' style='text-align: right;' class='collapse fas fa-chevron-circle-down w3-large'>"
                            +"  Department </div>"
                          +"<td >"
                           +" <div id='collapseme'  class='collapse'>TeeHee</div>"
                        +"</tr>"
                        +"<tr>"
                          +"  <td style='padding-right: 155px; padding-left: 115px;'>"
                            +"    <div id='collapseme' style='text-align: right;' class='collapse fas fa-pen  w3-large'> Description </div>"
                          +"<td >"
                            +"<div id='collapseme'  class='collapse'>TeeHedjlasjfdajdlkja;je</div>"
                       +" </tr>"
                      +"</table> "
                      +"  </td>"


tabl.appendChild(dispRow);

}


function loadLab(tabname)
{

  const tabl = document.getElementById(tabname);

  var dispRow = document.createElement("tr");

  dispRow.setAttribute("for", 'collapseme');
  dispRow.setAttribute('data-toggle','collapse');
  dispRow.setAttribute('href','#collapseme');
  dispRow.setAttribute('aria-expanded','true');
  dispRow.setAttribute('aria-controls','collapseme');
  dispRow.setAttribute('class','collapsed w3-large');
  dispRow.setAttribute('style','color:#783612');  
  
  dispRow.innerHTML = "<td><i class='fas fa-flask w3-large'>  Lab </i></td>"
                      + "<td><i class='far fa-calendar-plus'> <b> 12-19-1999</b></i></td>"
                      + "<td><i class='fas fa-pen'> jadkljafdjljasfjd;</i></td>"
                      +"<td><b>pending</b> </td>";
                          
 tabl.appendChild(dispRow);

 dispRow = document.createElement('tr');

 dispRow.setAttribute('style',"background-color:#f1f1f1; color:#783612; ");
 //dispRow.setAttribute('class',"w3-text-deep-purple");
//  e
 dispRow.innerHTML =   "<td colspan='4'>"
                      +"<table id='collapseme' style='border: none;' class='collapse'>"
                        +"<tr>"
                        +"  <td style='padding-right: 155px; padding-left: 115px;'>"
                          +"  <div id='collapseme' style='text-align: right;' class='collapse fa fa-signature w3-large'> Lab's Name </div>"
                          +"</td>"
                          +"<td >"
                           +" <div id='collapseme'  class='collapse'>TeeHee</div>"
                        +"</tr>"
                        +"<tr>"
                          +"  <td style='padding-right: 155px; padding-left: 115px;'>"
                            +"    <div id='collapseme' style='text-align: right;' class='collapse fas fa-chevron-circle-down w3-large'>"
                            +"  Department </div>"
                          +"<td >"
                           +" <div id='collapseme'  class='collapse'>TeeHee</div>"
                        +"</tr>"
                        +"<tr>"
                          +"  <td style='padding-right: 155px; padding-left: 115px;'>"
                            +"    <div id='collapseme' style='text-align: right;' class='collapse fas fa-pen  w3-large'> Description </div>"
                          +"<td >"
                            +"<div id='collapseme'  class='collapse'>TeeHedjlasjfdajdlkja;je</div>"
                       +" </tr>"
                      +"</table> "
                      +"  </td>"


tabl.appendChild(dispRow);

}

function loadLib(tabname)
{

  const tabl = document.getElementById(tabname);

  var dispRow = document.createElement("tr");

  dispRow.setAttribute("for", 'collapseme');
  dispRow.setAttribute('data-toggle','collapse');
  dispRow.setAttribute('href','#collapseme');
  dispRow.setAttribute('aria-expanded','true'); 
  dispRow.setAttribute('aria-controls','collapseme');
  dispRow.setAttribute('class','collapsed w3-large');
  dispRow.setAttribute('style','color:#8c6d81');  

  
  dispRow.innerHTML = "<td><i class='fas fa-utensils w3-large'>  Library </i></td>"
                      + "<td><i class='far fa-calendar-plus'> <b> 12-19-1999</b></i></td>"
                      + "<td><i class='fas fa-pen'> jadkljafdjljasfjd;</i></td>"
                      +"<td><b>pending</b> </td>";
                          
 tabl.appendChild(dispRow);

 dispRow = document.createElement('tr');

 dispRow.setAttribute('style',"background-color: #f1f1f1; color:#8c6d81;");


 dispRow.innerHTML =   "<td colspan='4'>"
                      +"<table id='collapseme' style='border: none;' class='collapse'>"
                        +"<tr>"
                          +"  <td style='padding-right: 155px; padding-left: 115px;'>"
                            +"    <div id='collapseme' style='text-align: right;' class='collapse fas fa-chevron-circle-down w3-large'>"
                            +"  Related To </div>"
                          +"<td >"
                           +" <div id='collapseme'  class='collapse'>TeeHee</div>"
                        +"</tr>"
                        +"<tr>"
                          +"  <td style='padding-right: 155px; padding-left: 115px;'>"
                            +"    <div id='collapseme' style='text-align: right;' class='collapse fas fa-pen  w3-large'> Description </div>"
                          +"<td >"
                            +"<div id='collapseme'  class='collapse'>TeeHedjlasjfdajdlkja;je</div>"
                       +" </tr>"
                      +"</table> "
                      +"  </td>"


tabl.appendChild(dispRow);

}

function loadAll(tabname)
{
  loadHostel(tabname);
  loadFees(tabname);
  loadMess(tabname);
  loadFaculty(tabname);
  loadLab(tabname);
  loadLib(tabname);
}

// $('#collapseme').on('hidden.bs.collapse',function() {
//   alert('HelloWOrld');});

  // <tr for='collapseme' data-toggle='collapse' href='#collapseme' aria-expanded='true'
  //aria-controls='collapseme' class='collapsed w3-large w3-text-blue'>