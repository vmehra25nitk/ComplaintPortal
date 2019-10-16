const Lab = require('../lab');
const Library = require('../library');
const Hostel = require('../hostel');
const Faculty = require('../faculty');
const Mess = require ('../mess');
const Fees = require('../fees');


//CHANGE TYPE FOR ALL THE CATEGORIES AND NAME FOR HOSTEL
exports.detect =  function (req)
{
   // console.log("I am here", typeof req.body.category);
    const category = (req.body.category).toLowerCase();
    const cid = req.body.cid;
    const type = req.body.type;
    switch(category)
    {
        case "lab":
            {const name = req.body.name;
            const dept = req.body.department;
            Lab.createLabComplaint(cid,name,dept,type);}
            return true;
        
        case 'faculty':
            {
                const name = req.body.name;
                const dept = req.body.department;
                Faculty.createFacultyComplaint(type,cid,name,department);    
            }
            return true;
        case 'fees':
            {
                Fees.createFeesComplaint(type,cid);
            }
            return true;
        case 'hostel':
            {
                var Hname = req.body.name
                Hostel.createHostelComplaint(type,cid,name);
            }
            return true;
        case 'library':
           {
            Library.createLibraryComplaint(type,cid);}
            return true;
        case 'mess':
            {
                Mess.createMessComplaint(type,cid);
            }
            return true; 
        default: 
        return false;

    }
}