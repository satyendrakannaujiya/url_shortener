# url_shortener
url_shortener using node js

Pre requisite to install the application

1. Node js should be installed on the server
2. Mysql should be installed on the server 

Steps to run  the application -

1. Pull the code
2. Go to the application folder ie - url_shortener
3. run - npm install
4. Go to the database create a datbase url
5. run the schema.sql from model folder.
6. modify the db configuration from db.js file.
4. run - node server.js
5. Now hit api to shotend the code - http://localhost:4445/api/links?link=https://www.facebook.com
6. Get the shortened url - http://localhost:4445/api/liks/<shortend_code>


