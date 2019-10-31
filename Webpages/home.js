

  window.onload = function(){
    fillFeed();
    getStatistics();
  }


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
    status = "<i class='fas fa-clock w3-text-orange'> </i>"
  }
  if(status == "solved")
  {
    status = "<i  class='fas fa-check-circle w3-text-teal'> </i>"
  }

  if(status=="rejected")
  {
    status = "<i class='fas fa-times-circle w3-text-red'> </i>"
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
                      +"<td>"+obj.cid+"</td>";
                          
 tabl.appendChild(dispRow);

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
    status = "<i class='fas fa-clock w3-text-orange'> </i>"
  }
  if(status == "solved")
  {
    status = "<i  class='fas fa-check-circle w3-text-teal'> </i>"
  }

  if(status=="rejected")
  {
    status = "<i class='fas fa-times-circle w3-text-red'> </i>"
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
                      +"<td>"+obj.cid+"</td>";
                          
 tabl.appendChild(dispRow);

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
    status = "<i class='fas fa-clock w3-text-orange'> </i>"
  }
  if(status == "solved")
  {
    status = "<i  class='fas fa-check-circle w3-text-teal'> </i>"
  }

  if(status=="rejected")
  {
    status = "<i class='fas fa-times-circle w3-text-red'> </i>"
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
                      +"<td>"+obj.cid+"</td>";
                          
 tabl.appendChild(dispRow);

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
    status = "<i class='fas fa-clock w3-text-orange'> </i>"
  }
  if(status == "solved")
  {
    status = "<i  class='fas fa-check-circle w3-text-teal'> </i>"
  }

  if(status=="rejected")
  {
    status = "<i class='fas fa-times-circle w3-text-red'> </i>"
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
                      +"<td>"+obj.cid+"</td>";
                          
 tabl.appendChild(dispRow);

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
    status = "<i class='fas fa-clock w3-text-orange'> </i>"
  }
  if(status == "solved")
  {
    status = "<i  class='fas fa-check-circle w3-text-teal'> </i>"
  }

  if(status=="rejected")
  {
    status = "<i class='fas fa-times-circle w3-text-red'> </i>"
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
                      +"<td>"+obj.cid+"</td>";
                          
 tabl.appendChild(dispRow);

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
    status = "<i class='fas fa-clock w3-text-orange'> </i>"
  }
  if(status == "solved")
  {
    status = "<i  class='fas fa-check-circle w3-text-teal'> </i>"
  }

  if(status=="rejected")
  {
    status = "<i class='fas fa-times-circle w3-text-red'> </i>"
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
                      +"<td>"+obj.cid+"</td>";
                          
 tabl.appendChild(dispRow);

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
//Feed Table Over

// Loading Complaints
function loadComplaints(status)
{
  var type = document.querySelector('input[name="'+status+'Cat"]:checked').value;
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
                status : status
              } 
 
               
  console.log(obj);
  const url = 'http://localhost:3000/getComplaintByCategoryStudent';
  $.post(url,obj,function(data,status1)
  {
    console.log(data);
    
    loadAll(data,status);
  });


 

}

function loadAll(data,status)
{
  //console.log("I am Here");
  
  document.getElementById(status+'Table').innerHTML="";
  if(status!='feed')
  document.getElementById(status+'NumRes').innerHTML= data.length+" results found";
  if(data.length==0)
  return;
  status = status+'Table';
  document.getElementById(status).innerHTML="<tr><td><b>Category</b></td><td><b>Registered On</b></td><td><b>Description</b></td><td ><b>Status</b></td><td ><b>Complaint ID</b></td><tr>";
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

  //Filling The Feed

  function compare( a, b ) {
    if ( a.startDate < b.startDate ){
      return -1;
    }
    if ( a.startDate > b.startDate ){
      return 1;
    }
    return 0;
  }


  function fillFeed()
  {
    
  const url = 'http://localhost:3000/readAllComplaint';
  $.get(url,function(data,status1)
  {
    //console.log(data);
   // data.sort(compare);
    var l = data.length;
    if(l>10)
    l=10;
    //console.log(l);
    loadAll(data.slice(0,l),'feed');
  });
  
}

function getStatistics()
{
  console.log('getStatistics');
  const url = 'http://localhost:3000/getAllStatistics';
  $.get(url,function(data,status1)
    {
     console.log(status1); 
      console.log(data);

      document.getElementById('barRejected').innerHTML= ""+Math.round(data[0]);
      document.getElementById('barRejected').style.width= data[0]+'%';

      document.getElementById('barPending').innerHTML= ""+Math.round(data[1]);
      document.getElementById('barPending').style.width= data[1]+'%';

      document.getElementById('barSolved').innerHTML= ""+Math.round(data[2]);
      document.getElementById('barSolved').style.width= data[2]+'%';
    }
  );

}