Tools, Packages used:-

Mysql is used as database
sequelize as ORM
jsonwebtoken package to create and verify the token
express js to handle the http requests
body-parser package to work with json data
bcrypt package for password Hashing
Postman to check the APIs
VisualStudio Code as text editor



How to run the project locally

1. Clone the project as git clone https://github.com/roshan2057/backend-assignment.git
2. Start the mysql server
3. Create a database name as {assigement} in mysql server (name can edit in .env file)
4. Update the user, root, password and host according to your mysql server in .env file
5. Open the terminal in the in the project folder
6. Type the command npm install 
7. Finally type the command npm start it will start the server at the given port number in .env file
or you can type node index.js




There are total 16 different Rest APIs in this project
6 of them are authenticate
3 of them are authorize 
and other are open


Note-1: User APIs are authenticate i.e everytime you request any api you need to send a token inside the header as auth= {token}, then only it will work
Token is obtained only after login with correct email and password 

Note-2: To add the product the user role must have value (admin), default it will be user while registering but you can edit it in API/user/update 



If you use Postman follow this steps

1.Open the postman applicaion
2.Go to file -> import
3.Click to select file 
4.Select the json file located inside the Postman folder in this project
5.Hit OK
6.Done the collection is imported



Thank you!!