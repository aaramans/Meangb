echo Hello, Starting the Library App!

set mongoIns=C:\Program Files\MongoDB\Server\3.4\bin\mongod
set mongoData=C:\Users\a.raman.samavedam\Documents\data\db

start cmd /k "%mongoIns%" --dbpath "%mongoData%"
echo Mongo server is up!

start cmd /k node server\app.js
echo Express server is up!

start cmd /k gulp start-server
echo Application Launched!