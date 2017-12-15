var Employee = require('./employee.model');
var debug = require('debug')('lab4:employee');


module.exports.home = function(req, res){
        
    if (req.method === 'POST') {
        
       var msg = '';
        
    Employee.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          department: req.body.department,
          startDate: req.body.startDate,
          jobTitle: req.body.jobTitle,
          salary: req.body.salary
    })
        .then(function(){
            msg = 'Employee was saved';
            return;
        })
        .catch(function(err){            
            msg = 'Employee was not Saved';
            return err.message;
        })
        .then(function(err){
            res.render('index', { 
                title: 'home',
                message : msg,
                error: err
             });
        });   
              
    } else {
        res.render('index', { 
            title: 'home',
            message : ''
        }); 
    }
     
};

module.exports.view = function(req, res){
   
       Employee
       .find()
       .exec()
       .then(function(results){
            res.render('view', { 
                title: 'View Results',
                results : results
            });
       });
     
};

module.exports.delete = function(req, res){
    var id = req.params.employeeid;
        removed = '';
               
        Employee.remove({ _id: id })
        .then(function(){            
            removed = `${id} has been removed`;
            return;
        })
        .catch(function (err) {            
            removed = `${id} has not been removed`;
            return err;
        })    
        .then( (err) => {
            res.render('delete', { 
                removed : removed
            });
        })
}

module.exports.update = function(req, res){
    
    var id = req.params.employeeid;
    var msg = '';
    
    if (req.method === 'POST') {
         
        id = req.body._id;

        Employee
            .findById(id)
            .exec() 
            .then(function(EmployeeData) {
                // figure out why the data is not saving.
                debug(req.body);
                EmployeeData.firstName = req.body.firstName;
                EmployeeData.lastName = req.body.lastName;
                EmployeeData.department = req.body.department;
                EmployeeData.startDate = req.body.startDate;
                EmployeeData.jobTitle = req.body.jobTitle;
                EmployeeData.salary = req.body.salary;
          
                return EmployeeData.save();
                                
            })
            .then(function(){
                msg = 'data has been updated';
            })
            .catch(function(err){
                msg = 'data has NOT been updated';
                debug(err);
            });
        
    }
        
    Employee
    .findOne({ '_id': id })
    .exec()
    .then(function(results){   
        console.log(results);
        res.render('update', { 
            title: 'Update Employees',
            message: msg,
            results : results           
        });
         
    })
    .catch(function(){
        res.render('notfound', { 
            message: 'Sorry ID not found'
        });
    });
};

