const mysql = require('mysql');
const express  = require('express');

const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.listen(3000, ()=> console.log('listening to 3000'));
app.use(express.static('public'));


const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'client'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/site_power', (request, response) => {
con.query("SELECT * FROM site_power", (error, rows, fields) =>{
		if(error)throw error;
			console.log("Successfully ");
			response.send(rows);
			console.log(rows);
			});
});




app.get('/site_power/:id', (request,response)=>{


	con.query("SELECT * FROM site_power WHERE id = ?", [request.params.id], (err, rows, fields)=>{

		if(err) throw err;
		response.send(rows);
		console.log(rows);

		console.log("here is your data");
	});
});



app.get('/',(request,response)=>{
response.sendfile('Dsu/index.html');
});



app.post('/insert', (request, response)=>{


	const data = request.body.var2;
	console.log(request.body);

 con.query("INSERT INTO dsus (description) VALUES ('"+request.body.var2+"')", (error, rows, fields)=>{
  
  if(error) throw error;
  response.send(rows);
  console.log("Inserted Successfully");
 });

});

/* USE 'employeedb';
DROP procedure IF EXISTS 'abcd';

DELIMITER $$
USE 'employeedb' $$

CREATE PROCEDURE 'abcd'(
	IN _EmpID INT,
	IN _Name varchar(45),
	IN _EmpCode varchar(45),
	IN _salary INT
	)

BEGIN
    IF _EmpID = 0 THEN
    INSERT INTO employee(Name,Empcode,Salary)
    VALUES (_Name,_EmpCode,_Salary);

    SET _EmpID = LAST_INSERT_ID();

    ELSE
      UPDATE Employee
      SET
      Name = _Name,
      EmpCode = _EmpCode,
      Salary = _Salary
      WHERE EmpID = _EmpID;
      END IF;

      SELECT _EmpID AS 'EmpID';

      END */
