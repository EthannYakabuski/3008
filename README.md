# 3008
Website used for Project2 COMP3008

Launching Steps:


Step 1: Installing and Launching MongoDB: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#get-mongodb-community-edition
   
   1. Install MongoDB Community Edition: Steps 1 & 2
   2. Run MongoDB Community Edition: Steps 1 -> 4
   3. Configure a Windows Service for MongoDB Community Edition: Steps 1 -> 7
   
After running all of these steps for the first time, for subsequent programming sessions one will only need to run the following command 
from the command line, and this will start the shell needed to communicate and query the DB.
--> "C:\Program Files\\MongoDB\Server\3.6\bin\mongo.exe" 
  
Step 2: Cloning and Launching Project Code: 

   1. From command line and in desired directory: git clone https://github.com/EthannYakabuski/3008
   2. Run from command line in same directory as package.json: npm install
   3. Run from command line in top directory containing server.js: node server.js
     - visit on chrome browser at localhost:3008
     
