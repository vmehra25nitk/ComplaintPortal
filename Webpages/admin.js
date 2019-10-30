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



//Open the file boxes
function openBlock(prefix)
{
    var tabname = 'Hostel';
    if(prefix != '')
    tabname = prefix;

    openLink(event, tabname,prefix+'tablink',prefix+'myLink');
    try{
    var form = document.getElementById(prefix+'Complaints');//.style.display('block');
    form.style.display = 'block';
    
}
    catch(error)
    {
        alert(error.toString());      
    }
   // alert("djfkl;afj");
    //form.style.display('block');
}






//open boxes over


//Restrict future dates

function restrictFutureDate(status)
{
  var now = new Date(),
    minDate = now.toISOString().substring(0,10);
    
    document.getElementById(status+'ToDate').setAttribute('max',minDate);
    document.getElementById(status+'FromDate').setAttribute('max',minDate);

}

//Restrict future dates over

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

    alert(toBeSent.category+" "+toBeSent.type +" "+toBeSent.desc);
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
function loadHostel(tabname, obj){

  // obj = {
  //         cid : '12',
  //         category:'hostel',
  //         startDate:'2010-12-12',
  //         type:'gen',
  //         description: 'djljfjfdfjlfjfjafajfsdfjafkl;asjflsjf',
  //         status: 'solved',
  //         hostel:{
  //                   name: '4',
  //                   type: 'electrical'
  //                }
  //       }

  var status = obj.status;
  if(status == "pending")
  {
    status = "<i class='fas fa-clock' class='w3-blue-grey'> </i>"
  }
  if(status == "solved")
  {
    status = "<i class='fas fa-check-circle' class='w3-blue-grey'> </i>"
  }
  var collapseme = 'coll'+obj.cid;

  const tabl = document.getElementById(tabname);

  var dispRow = document.createElement("tr");
  

  dispRow.setAttribute("for", collapseme);
  dispRow.setAttribute('data-toggle','collapse');
  dispRow.setAttribute('href','#'+ collapseme);
  dispRow.setAttribute('aria-expanded','true');
  dispRow.setAttribute('aria-controls','"+collapseme+"');
  dispRow.setAttribute('class','collapsed w3-large w3-text-blue-grey');
  
        
  dispRow.innerHTML = "<td><i class='fas fa-hotel w3-large'> Hostel </i></td>"
                      + "<td><i class='far fa-calendar-plus'> <b> "+obj.startDate+"</b></i></td>"
                      + "<td><i class='fas fa-pen'> "+obj.description.substring(0,9)+"...."+"</i></td>"
                      +"<td>"+status+" </td>"
                      + "<td><button class='dropbtn'  id='"+obj.cid+"Btn"+"'  style='padding: 3px'>Make Changes</button></td>";
                          
 tabl.appendChild(dispRow);
 document.getElementById(obj.cid+"Btn").onclick = function(){clickMakeChanges(obj)};

 dispRow = document.createElement('tr');

 dispRow.setAttribute('style',"background-color: #f1f1f1;");
 dispRow.setAttribute('class','w3-text-blue-grey')

 dispRow.innerHTML =  "<td colspan='5'>"
                      +"<table id='"+collapseme+"' style='border: none;' class='collapse'>"
                        +"<tr>"
                        +"  <td style='padding-right: 155px; padding-left: 115px;'>"
                          +"  <div id='"+collapseme+"' style='text-align: right;' class='collapse fa fa-signature w3-large'> Hostel Name </div>"
                          +"</td>"
                          +"<td >"
                           +" <div id='"+collapseme+"'  class='collapse'>"+obj.hostel.name+"</div>"
                        +"</tr>"
                        +"<tr>"
                          +"  <td style='padding-right: 155px; padding-left: 115px;'>"
                            +"    <div id='"+collapseme+"' style='text-align: right;' class='collapse fas fa-chevron-circle-down w3-large'>"
                            +"  Related To </div>"
                          +"<td >"
                           +" <div id='"+collapseme+"'  class='collapse'>"+obj.hostel.type+"</div>"
                        +"</tr>"
                        +"<tr>"
                          +"  <td style='padding-right: 155px; padding-left: 115px;'>"
                            +"    <div id='"+collapseme+"' style='text-align: right;' class='collapse fas fa-pen  w3-large'> Description </div>"
                          +"<td >"
                            +"<div id='"+collapseme+"'  class='collapse'>"+obj.description+"</div>"
                       +" </tr>"
                      +"</table> "
                      +"  </td>"

tabl.appendChild(dispRow);
}

//Fees
function loadFees(tabname,obj)
{

  // obj = {
  //         cid : '13',
  //         category:'hostel',
  //         startDate:'2010-12-12',
  //         type:'gen',
  //         description: 'djljfjfdfjlfjfjafajfsdfjafkl;asjflsjf',
  //         status: 'solved',
  //         fees:{
  //                   type: 'electrical'
  //                }
  //       }

  var status = obj.status;
  if(status == "pending")
  {
    status = "<i class='fas fa-clock' class='w3-blue-grey'> </i>"
  }
  if(status == "solved")
  {
    status = "<i class='fas fa-check-circle' class='w3-blue-grey'> </i>"
  }
  var collapseme = 'coll'+obj.cid;


  const tabl = document.getElementById(tabname);

  var dispRow = document.createElement("tr");

  dispRow.setAttribute("for", collapseme);
  dispRow.setAttribute('data-toggle','collapse');
  dispRow.setAttribute('href','#'+collapseme);
  dispRow.setAttribute('aria-expanded','true');
  dispRow.setAttribute('aria-controls','"+collapseme+"');
  dispRow.setAttribute('class','collapsed w3-large w3-text-blue-grey');
  
  dispRow.innerHTML = "<td><i class='fas fa-rupee-sign w3-large'> Fees </i></td>"
                      + "<td><i class='far fa-calendar-plus'> <b> "+obj.startDate+"</b></i></td>"
                      + "<td><i class='fas fa-pen'> "+obj.description.substring(0,9)+"...."+"</i></td>"
                      +"<td>"+status+" </td>"
                      + "<td><button  class='dropbtn'  id='"+obj.cid+"Btn"+"'  style='padding: 3px'>Make Changes</button></td>";
                          
 tabl.appendChild(dispRow);

 document.getElementById(obj.cid+"Btn").onclick = function(){clickMakeChanges(obj)};

 dispRow = document.createElement('tr');

 dispRow.setAttribute('style',"background-color: #f1f1f1;");
 dispRow.setAttribute('class','w3-text-blue-grey')

 dispRow.innerHTML =  "<td colspan='5'>"
                      +"<table id='"+collapseme+"' style='border: none;' class='collapse'>"
                        +"<tr>"
                          +"  <td style='padding-right: 160px; padding-left: 115px;'>"
                            +"    <div id='"+collapseme+"' style='text-align: right;' class='collapse fas fa-pen  w3-large'> Description </div>"
                          +"<td >"
                            +"<div id='"+collapseme+"'  class='collapse'>"+obj.description+"</div>"
                       +" </tr>"
                      +"</table> "
                      +"  </td>"

tabl.appendChild(dispRow);
}
//Mess
function loadMess(tabname,obj)
{

  // obj = {
  //         cid : '14',
  //         category:'hostel',
  //         startDate:'2010-12-12',
  //         type:'gen',
  //         description: 'djljfjfdfjlfjfjafajfsdfjafkl;asjflsjf',
  //         status: 'solved',
  //         mess:{
  //                   type: 'food',
  //                   messName: '4'
  //                }
  //       }

  var status = obj.status;
  if(status == "pending")
  {
    status = "<i class='fas fa-clock' class='w3-blue-grey'> </i>"
  }
  if(status == "solved")
  {
    status = "<i class='fas fa-check-circle' class='w3-blue-grey'> </i>"
  }
  var collapseme = 'coll'+obj.cid;


  const tabl = document.getElementById(tabname);

  var dispRow = document.createElement("tr");

  dispRow.setAttribute("for", collapseme);
  dispRow.setAttribute('data-toggle','collapse');
  dispRow.setAttribute('href','#'+collapseme);
  dispRow.setAttribute('aria-expanded','true');
  dispRow.setAttribute('aria-controls','"+collapseme+"');
  dispRow.setAttribute('class','collapsed w3-large w3-text-blue-grey');
  
  dispRow.innerHTML = "<td><i class='fas fa-utensils w3-large'>  Mess </i></td>"
                       + "<td><i class='far fa-calendar-plus'> <b> "+obj.startDate+"</b></i></td>"
                      + "<td><i class='fas fa-pen'> "+obj.description.substring(0,9)+"...."+"</i></td>"
                      +"<td>"+status+" </td>"
                      + "<td><button class='dropbtn'  id='"+obj.cid+"Btn"+"'  style='padding: 3px'>Make Changes</button></td>";
                          
 tabl.appendChild(dispRow);
 document.getElementById(obj.cid+"Btn").onclick = function(){clickMakeChanges(obj)};
 dispRow = document.createElement('tr');

 dispRow.setAttribute('style',"background-color: #f1f1f1;");
 dispRow.setAttribute('class',"w3-text-blue-grey")

 dispRow.innerHTML =   "<td colspan='5'>"
                      +"<table id='"+collapseme+"' style='border: none;' class='collapse'>"
                        +"<tr>"
                        +"  <td style='padding-right: 155px; padding-left: 115px;'>"
                          +"  <div id='"+collapseme+"' style='text-align: right;' class='collapse fa fa-signature w3-large'> Mess Name </div>"
                          +"</td>"
                          +"<td >"
                           +" <div id='"+collapseme+"'  class='collapse'>"+obj.mess.messName+"</div>"
                        +"</tr>"
                        +"<tr>"
                          +"  <td style='padding-right: 155px; padding-left: 115px;'>"
                            +"    <div id='"+collapseme+"' style='text-align: right;' class='collapse fas fa-chevron-circle-down w3-large'>"
                            +"  Related To </div>"
                          +"<td >"
                           +" <div id='"+collapseme+"'  class='collapse'>"+obj.mess.type+"</div>"
                        +"</tr>"
                        +"<tr>"
                          +"  <td style='padding-right: 155px; padding-left: 115px;'>"
                            +"    <div id='"+collapseme+"' style='text-align: right;' class='collapse fas fa-pen  w3-large'> Description </div>"
                          +"<td >"
                            +"<div id='"+collapseme+"'  class='collapse'>"+obj.description+"</div>"
                       +" </tr>"
                      +"</table> "
                      +"  </td>"


tabl.appendChild(dispRow);

}

//Faculty
function loadFaculty(tabname,obj)
{

    // obj = {
    //   cid : '15',
    //   category:'hostel',
    //   startDate:'2010-12-12',
    //   type:'gen',
    //   description: 'djljfjfdfjlfjfjafajfsdfjafkl;asjflsjf',
    //   status: 'solved',
    //   faculty:{
    //             department:'cse',
    //             name: 'dkaf'
    //         }
    // }

  var status = obj.status;
  if(status == "pending")
  {
  status = "<i class='fas fa-clock' class='w3-blue-grey'> </i>"
  }
  if(status == "solved")
  {
  status = "<i class='fas fa-check-circle' class='w3-blue-grey'> </i>"
  }
  var collapseme = 'coll'+obj.cid;


  const tabl = document.getElementById(tabname);

  var dispRow = document.createElement("tr");

  dispRow.setAttribute("for", collapseme);
  dispRow.setAttribute('data-toggle','collapse');
  dispRow.setAttribute('href','#'+collapseme);
  dispRow.setAttribute('aria-expanded','true');
  dispRow.setAttribute('aria-controls',collapseme);
  dispRow.setAttribute('class','collapsed w3-large w3-text-blue-grey');
  //dispRow.setAttribute('style','color:#2e005e');  
  
  dispRow.innerHTML = "<td><i class='fas fa-chalkboard-teacher w3-large'>  Faculty </i></td>"
                       + "<td><i class='far fa-calendar-plus'> <b> "+obj.startDate+"</b></i></td>"
                      + "<td><i class='fas fa-pen'> "+obj.description.substring(0,9)+"...."+"</i></td>"
                      +"<td>"+status+" </td>"
                      + "<td><button class='dropbtn'  id='"+obj.cid+"Btn"+"'  style='padding: 3px'>Make Changes</button></td>";
                          
 tabl.appendChild(dispRow);
 document.getElementById(obj.cid+"Btn").onclick = function(){clickMakeChanges(obj)};
 dispRow = document.createElement('tr');

 dispRow.setAttribute('style',"background-color:#f1f1f1;");// color:#2e005e; ");
 dispRow.setAttribute('class',"w3-text-blue-grey");
//  e
 dispRow.innerHTML =   "<td colspan='5'>"
                      +"<table id='"+collapseme+"' style='border: none;' class='collapse'>"
                        +"<tr>"
                        +"  <td style='padding-right: 100px; padding-left: 115px;'>"
                          +"  <div id='"+collapseme+"' style='text-align: right;' class='collapse fa fa-signature w3-large'> Professor's Name </div>"
                          +"</td>"
                          +"<td >"
                           +" <div id='"+collapseme+"'  class='collapse'>"+obj.faculty.name+"</div>"
                        +"</tr>"
                        +"<tr>"
                          +"  <td style='padding-right: 155px; padding-left: 115px;'>"
                            +"    <div id='"+collapseme+"' style='text-align: right;' class='collapse fas fa-chevron-circle-down w3-large'>"
                            +"  Department </div>"
                          +"<td >"
                           +" <div id='"+collapseme+"'  class='collapse'>"+obj.faculty.department+"</div>"
                        +"</tr>"
                        +"<tr>"
                          +"  <td style='padding-right: 155px; padding-left: 115px;'>"
                            +"    <div id='"+collapseme+"' style='text-align: right;' class='collapse fas fa-pen  w3-large'> Description </div>"
                          +"<td >"
                            +"<div id='"+collapseme+"'  class='collapse'>"+obj.description+"</div>"
                       +" </tr>"
                      +"</table> "
                      +"  </td>"


tabl.appendChild(dispRow);

}

//Lab
function loadLab(tabname,obj)
{

  // obj = {
  //     cid : '16',
  //     category:'hostel',
  //     startDate:'2010-12-12',
  //     type:'gen',
  //     description: 'djljfjfdfjlfjfjafajfsdfjafkl;asjflsjf',
  //     status: 'solved',
  //     lab:{
  //               department:'cse',
  //               name: 'dkaf'
  //           }
  //   }

  var status = obj.status;
  if(status == "pending")
  {
  status = "<i class='fas fa-clock' class='w3-blue-grey'> </i>"
  }
  if(status == "solved")
  {
  status = "<i class='fas fa-check-circle' class='w3-blue-grey'> </i>"
  }
  var collapseme = 'coll'+obj.cid;
  

  const tabl = document.getElementById(tabname);

  var dispRow = document.createElement("tr");

  dispRow.setAttribute("for", collapseme);
  dispRow.setAttribute('data-toggle','collapse');
  dispRow.setAttribute('href','#'+collapseme);
  dispRow.setAttribute('aria-expanded','true');
  dispRow.setAttribute('aria-controls',collapseme);
  dispRow.setAttribute('class','collapsed w3-large w3-text-blue-grey');
  //dispRow.setAttribute('style','color:#783612');  
  
  dispRow.innerHTML = "<td><i class='fas fa-flask w3-large'>  Lab </i></td>"
                       + "<td><i class='far fa-calendar-plus'> <b> "+obj.startDate+"</b></i></td>"
                      + "<td><i class='fas fa-pen'> "+obj.description.substring(0,9)+"...."+"</i></td>"
                      +"<td>"+status+" </td>"
                      + "<td><button class='dropbtn'  id='"+obj.cid+"Btn"+"'  style='padding: 3px'>Make Changes</button></td>";
                          
 tabl.appendChild(dispRow);
 document.getElementById(obj.cid+"Btn").onclick = function(){clickMakeChanges(obj)};
 dispRow = document.createElement('tr');

 dispRow.setAttribute('style',"background-color:#f1f1f1;");// color:#783612; ");
 dispRow.setAttribute('class',"w3-text-blue-grey");
//  e
 dispRow.innerHTML =   "<td colspan='5'>"
                      +"<table id='"+collapseme+"' style='border: none;' class='collapse'>"
                        +"<tr>"
                        +"  <td style='padding-right: 155px; padding-left: 115px;'>"
                          +"  <div id='"+collapseme+"' style='text-align: right;' class='collapse fa fa-signature w3-large'> Lab's Name </div>"
                          +"</td>"
                          +"<td >"
                           +" <div id='"+collapseme+"'  class='collapse'>"+obj.lab.name+"</div>"
                        +"</tr>"
                        +"<tr>"
                          +"  <td style='padding-right: 155px; padding-left: 115px;'>"
                            +"    <div id='"+collapseme+"' style='text-align: right;' class='collapse fas fa-chevron-circle-down w3-large'>"
                            +"  Department </div>"
                          +"<td >"
                           +" <div id='"+collapseme+"'  class='collapse'>"+obj.lab.department+"</div>"
                        +"</tr>"
                        +"<tr>"
                          +"  <td style='padding-right: 155px; padding-left: 115px;'>"
                            +"    <div id='"+collapseme+"' style='text-align: right;' class='collapse fas fa-pen  w3-large'> Description </div>"
                          +"<td >"
                            +"<div id='"+collapseme+"'  class='collapse'>"+obj.description+"</div>"
                       +" </tr>"
                      +"</table> "
                      +"  </td>"


tabl.appendChild(dispRow);

}
//Lib
function loadLib(tabname,obj)
{

  // obj = {
  //     cid : '17',
  //     category:'hostel',
  //     startDate:'2010-12-12',
  //     type:'gen',
  //     description: 'djljfjfdfjlfjfjafajfsdfjafkl;asjflsjf',
  //     status: 'pending',
  //     library:{
  //               type:'books'
  //           }
  //   }

  var status = obj.status;
  if(status == "pending")
  {
  status = "<i class='fas fa-clock' class='w3-blue-grey'> </i>"
  }
  if(status == "solved")
  {
  status = "<i class='fas fa-check-circle' class='w3-blue-grey'> </i>"
  }
  var collapseme = 'coll'+obj.cid;


  const tabl = document.getElementById(tabname);

  var dispRow = document.createElement("tr");

  dispRow.setAttribute("for", collapseme);
  dispRow.setAttribute('data-toggle','collapse');
  dispRow.setAttribute('href','#'+collapseme);
  dispRow.setAttribute('aria-expanded','true'); 
  dispRow.setAttribute('aria-controls',collapseme);
  dispRow.setAttribute('class','collapsed w3-large w3-text-blue-grey');
  //dispRow.setAttribute('style','color:#8c6d81');  

  
  dispRow.innerHTML = "<td><i class='fas fa-utensils w3-large'>  Library </i></td>"
                       + "<td><i class='far fa-calendar-plus'> <b> "+obj.startDate+"</b></i></td>"
                      + "<td><i class='fas fa-pen'> "+obj.description.substring(0,9)+"...."+"</i></td>"
                      +"<td>"+status+" </td>"
                      + "<td><button class='dropbtn'  id='"+obj.cid+"Btn"+"'  style='padding: 3px'>Make Changes</button></td>";
                          
 tabl.appendChild(dispRow);
 document.getElementById(obj.cid+"Btn").onclick = function(){clickMakeChanges(obj)};
 dispRow = document.createElement('tr');

 //dispRow.setAttribute('style',"background-color: #f1f1f1; color:#8c6d81;");
   dispRow.setAttribute('class','w3-text-blue-grey');

 dispRow.innerHTML =   "<td colspan='5'>"
                      +"<table id='"+collapseme+"' style='border: none;' class='collapse'>"
                        +"<tr>"
                          +"  <td style='padding-right: 155px; padding-left: 115px;'>"
                            +"    <div id='"+collapseme+"' style='text-align: right;' class='collapse fas fa-chevron-circle-down w3-large'>"
                            +"  Related To </div>"
                          +"<td >"
                           +" <div id='"+collapseme+"'  class='collapse'>"+obj.library.type+"</div>"
                        +"</tr>"
                        +"<tr>"
                          +"  <td style='padding-right: 155px; padding-left: 115px;'>"
                            +"    <div id='"+collapseme+"' style='text-align: right;' class='collapse fas fa-pen  w3-large'> Description </div>"
                          +"<td >"
                            +"<div id='"+collapseme+"'  class='collapse'>"+obj.description+"</div>"
                       +" </tr>"
                      +"</table> "
                      +"  </td>"


tabl.appendChild(dispRow);

}

// Loading Complaints
function loadComplaints(status)
{
  var type = document.querySelector('input[name="'+status+'Cat"]:checked').value;
  var realStatus = document.querySelector('input[name="'+status+'Status"]:checked').value;

  const category = document.getElementById(status+'Select').value;
  
  var fromDate = document.getElementById(status+'FromDate').value;  
  var toDate = document.getElementById(status+'ToDate').value;  
  console.log(toDate);
  if(toDate==""|| fromDate=="" || (fromDate)> (toDate)){
  document.getElementById(status+'Warning').innerHTML = 'Please select correct dates';
   return;}
  else
  document.getElementById(status+'Warning').innerHTML = '';
  fromDate = new Date(fromDate+'T00:00:00');
  toDate = new Date(toDate+'T23:59:59');

  type = type.substring(0,3);
  console.log(type);
  const obj = {
                type: type.substring(0.3),
                category : category,
                fromDate : fromDate,
                toDate : toDate,
                status : realStatus
              } 
 
               
  console.log(obj);
  const url = 'http://localhost:3000/getComplaintByCategoryAdmin';
  $.post(url,obj,function(data,status1)
  {
    console.log(data);
    
    loadAll(data,status);
     
  });
}

function loadAll(data,status)
{
  console.log("I am Here");
  status = status+'Table';
  
  document.getElementById(status).innerHTML="<tr> <td>Category</td><td>Registered On</td> <td>Description</td><td colspan='1'>Status</td> </tr> <tr></tr>";
  for(var i=0; i<data.length;i++)
  {
    data[i].startDate = data[i].startDate.substring(0,10);
  switch(data[i].category)
  {
    case 'hostel':
        //console.log(data.category);
      loadHostel(status,data[i]);
    break;
    case 'fees':
    loadFees(status,data[i]);
    break;
    case 'faculty':
    loadFaculty(status,data[i]);
    break;
    case 'mess':
    loadMess(status,data[i]);
    break;
    case 'lab':
    loadLab(status,data[i]);
    break;
    case 'library':
    loadLib(status,data[i]);
    break;
  }
}
  
}

//Loading Complaints Over

//Click  Make Changes

function clickMakeChanges(obj)
{
    console.log("MakeChanges  - "+obj.cid);

    var prefix = "Admin";

    openLink(event, prefix,prefix+'tablink',prefix+'myLink');
    try{
    var form = document.getElementById(prefix+'Complaints');//.style.display('block');
    form.style.display = 'block';
    }
    catch(error)
    {
        alert(error.toString());   
    }

    document.getElementById('adminChange').onclick = function(){
      var status = document.querySelector('input[name="adminChangeStatus"]:checked').value;

      const solvedBy = document.getElementsByName('adminPersonAssigned')[0].value;
      if(status!=obj.status || solvedBy != obj.solvedBy)
      {
        //To be Continued
        obj.status= status;
        obj.solvedBy=solvedBy;

        const url = 'http://localhost:3000/adminMakeChanges';
        $.post(url,obj,function(data,status1)
        {
          console.log(data);
        });
      }
      
    }
}

function openLink(evt, linkName,tablink,mylink) {
  var i, x, tablinks;
  x = document.getElementsByClassName(mylink);
  for (i = 0; i < x.length; i++) {  
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName(tablink);
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-blue-grey", "");
    
  }
  document.getElementById(linkName).style.display = "block";
   document.getElementById(linkName+"Btn").className += " w3-blue-grey";
  
}

//Click Make Changes    


//Demo Get Req
function getData()
{
  const httx = new XMLHttpRequest();
  const url = "http://localhost:3000/readFaculty";
  httx.open('GET',url,false);
  httx.send();
  
  httx.onreadystatechange = ()=>{
   
   console.log((httx.response));
   if (httx.readyState == 4 && httx .status == 200)
    loadFaculty('feedTable',JSON.parse(httx.response)[0]);
  }
}

// $('#"+collapseme+"').on('hidden.bs.collapse',function() {
//   alert('HelloWOrld');});

  // <tr for='"+collapseme+"' data-toggle='collapse' href='#"+collapseme+"' aria-expanded='true'
  //aria-controls='"+collapseme+"' class='collapsed w3-large w3-text-blue'>