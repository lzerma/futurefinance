[![Build Status](https://travis-ci.org/lzerma/futurefinance.svg?branch=master)](https://travis-ci.org/lzerma/futurefinance)

# SAILS REST API - Future Finance

a [Sails](http://sailsjs.org) rest API for Future Finance.

## Node Version 
 
## Testing
To be able to run the tests properly you must install all the packages. To do so, execute: `npm install` on the 
project root folder.

After, run `npm test` and it will run through all available tests on the project.
 
All the tests suites are localized in _test/_. 

## Running
To run the REST API locally, we will assume that you have done the steps above. 
To bring up the __sails__  application you must run `npm start` and it will be displayed 
for you all infos about the server created by __sails__ 

## Using

 - Getting all customers: 
    - `curl -X GET -H "Content-Type: application/json" "http://localhost:1337/customer"`
 
 - Getting all customer and sorting by a specific property:
    - `curl -X GET -H "Content-Type: application/json" "http://localhost:1337/customer?sort=<property>+<asc|desc>"`  
  
 - Getting a specific customer:
    - `curl -X GET -H "Content-Type: application/json" "http://localhost:1337/customer/{id}"`
 
 - Creating a new customer:
    - `curl -X POST -H "Content-Type: application/json" -d '{
        "last_name": "Chuck",
        "first_name": "Norris",
        "birth_date": "1983-02-10"
      }' "http://localhost:1337/customer"`

 - Updating an existent customer:
    - `curl -X POST -H "Content-Type: application/json" -d '{
         "last_name": "Junior"
       }' "http://localhost:1337/customer/{id}"`
        
 - Deleting a customer: 
    - `curl -X DELETE  "http://localhost:1337/customer/{id}"`
    
    
