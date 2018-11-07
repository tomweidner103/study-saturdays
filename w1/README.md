# Week I

To get started, fork this repo if you haven't already and then clone it to your local machine. Navigate to this directory in your terminal and run `npm install`. To start your server run `npm start`. From there, start working on the objectives below (there are no specs, just the goals below)!

## Objective: Build 2 sets of CRUD routes for 2 models, Students and Tests

### Details

	- For now, models are just objects that live in express app score
	
	```
		Test {id : 0, score: 99, subject : 'Physics', studentID : 2}
    	Student {id : 0, name : 'Ashi'}
	```
	- Necessary routes: 

		- Get all students

		- Get all test scores

		- Update student name

		- Update test score 

		- Get mean test score by student ID

		- Get top scoring student

		- Delete Student

		- Delete Score

		- Add Student

		- Add Score



### How to test routes without a frontend or specs
- GET: use your browser
- POST / PUT / DELETE : 
 - CLI (command line interface) with `curl`
   - e.g. `curl -H "Content-Type: application/json" -X POST -d '{"username":"kate","password":"1234"}' http://localhost:3000/api/login`
   - `-H`: headers. `-X`: verb. `-d`: data (must be of the type specified in headers). http://[address]:[port]/[route_path]
 - [Postman](https://www.getpostman.com/)
   ![](https://www.dropbox.com/s/4fk3b90cd0i1a5y/postman_post.png?raw=true)
