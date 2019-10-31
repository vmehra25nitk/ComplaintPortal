//Submit Complaint
// function compSubmit(type)
// {
//   switch(type)
//   {
//     case 'hostel' :
//     submitHostel();break;
//     case 'fees' :
//     submitFees();break;
//     case 'mess' :
//     submitMess();break;
//     case 'fac' :
//     submitFac();break;
//     case 'lab' :
//     submitLab();break;
//     case 'library' :
//     submitLibrary();break;
//   }

//   function submitHostel()
//   {
    
//     const category = document.querySelector('input[name="hostelCat"]:checked').value;
    
//     const relatedTo = document.getElementById('hostelSelect').value;

//     var otherRel = "";

//     if(relatedTo== 'other')
//     otherRel = ":"+document.getElementsByName('hostelOther')[0].value;

//     const description = document.getElementById('hostelDesc').value;


//     const toBeSent = {
//                       category: category,
//                       type : relatedTo+otherRel,
//                       desc : description
//                     }

//     alert(toBeSent.category+" "+toBeSent.type +" "+toBeSent.desc);
//   }

//   function submitFees()
//   {
    
//     const category = document.querySelector('input[name="feesCat"]:checked').value;
    

//     const description = document.getElementById('feesDesc').value;


//     const toBeSent = {
//                       category: category,
//                       desc : description
//                     }

//     alert(toBeSent.category+" "+toBeSent.desc);
//   }


//   function submitMess()
//   {
    
//     const category = document.querySelector('input[name="messCat"]:checked').value;
    
//     const relatedTo = document.getElementById('messSelect').value;

//     var otherRel = "";
//     if(relatedTo== 'other')
//     otherRel = ":"+document.getElementsByName('messOther')[0].value;

//     const description = document.getElementById('messDesc').value;


//     const toBeSent = {
//                       category: category,
//                       type : relatedTo+otherRel,
//                       desc : description
//                     }

//     alert(toBeSent.category+" "+toBeSent.type +" "+toBeSent.desc);
//   }

//   function submitFac()
//   {
    
//     const category = document.querySelector('input[name="facCat"]:checked').value;
    
//     const dept = document.getElementById('facSelect').value;
    
//     const name = document.getElementsByName('facName')[0].value;
    
//     const description = document.getElementById('facDesc').value;


//     const toBeSent = {
//                       category: category,
//                       dept : dept,
//                       name : name,
//                       desc : description
//                      }

    
//     alert(toBeSent.category+" "+toBeSent.dept +" "+toBeSent.name+" "+toBeSent.desc);
//   }

//   function submitLab()
//   {
    
//     const category = document.querySelector('input[name="labCat"]:checked').value;
    
//     const dept = document.getElementById('labSelect').value;

//     const name = document.getElementsByName('labName')[0].value;
   
//     const description = document.getElementById('labDesc').value;


//     const toBeSent = {
//                       category: category,
//                       dept: dept,
//                       name : name,
//                       desc : description
//                     }

//     alert(toBeSent.category+" "+toBeSent.dept +" "+toBeSent.name+" "+toBeSent.desc);
//   }

//   function submitLibrary()
//   {
    
//     const category = document.querySelector('input[name="libCat"]:checked').value;
    
//     const relatedTo = document.getElementById('libSelect').value;

//     var otherRel = "";

//     if(relatedTo== 'other')
//     otherRel = ":"+document.getElementsByName('libOther')[0].value;

//     const description = document.getElementById('libDesc').value;


//     const toBeSent = {    
//                       category: category,
//                       type : relatedTo+otherRel,
//                       desc : description
//                     }

//     alert(toBeSent.category+" "+toBeSent.type +" "+toBeSent.desc);
//   }
  



// }
// //Submit Complaint Over
