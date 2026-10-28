/* global use, db */
// MongoDB Playground

use exam // database schema
db.createCollection("Study") // database name

// populate single data
db.Study.insertOne({"Name": "Siya", "Surname": "Mukona", "Mark": 85, "Result": "Pass"}) //data
// populate multiple data
db.Study.insertOne(
    {"Name": "Thando", "Surname": "Zulu", "Gender": "Female", "Mark": 85, "Result": "Pass"}
    {"Name": "Sibusiso", "Surname": "Mthembu", "Gender": "Male", "Mark": 45, "Result": "Fail"},
    {"Name": "Lerato", "Surname": "Mokoena", "Gender": "Female", "Mark": 75, "Result": "Pass"},
    {"Name": "Tshepo", "Surname": "Nkosi", "Gender": "Male", "Mark": 60, "Result": "Pass"},
    {"Name": "Anele", "Surname": "Dlamini", "Gender": "Female", "Mark": 90, "Result": "Pass"},
    {"Name": "Sipho", "Surname": "Mabena", "Gender": "Male", "Mark": 55, "Result": "Pass"},
    {"Name": "Nokuthula", "Surname": "Mthembu", "Gender": "Female", "Mark": 40, "Result": "Fail"},
    {"Name": "Thabo", "Surname": "Mokoena", "Gender": "Male", "Mark": 70, "Result": "Pass"},
    {"Name": "Zanele", "Surname": "Nkosi", "Gender": "Female", "Mark": 80, "Result": "Pass"},
    {"Name": "Lindiwe", "Surname": "Dlamini", "Gender": "Female", "Mark": 95, "Result": "Pass"},
    {"Name": "Musa", "Surname": "Mabena", "Gender": "Male", "Mark": 50, "Result": "Fail"},
    {"Name": "Sibongile", "Surname": "Mthembu", "Gender": "Female", "Mark": 65, "Result": "Pass"},
    {"Name": "Thulani", "Surname": "Mokoena", "Gender": "Male", "Mark": 75, "Result": "Pass"},
    {"Name": "Nokwanda", "Surname": "Nkosi", "Gender": "Female", "Mark": 85, "Result": "Pass"}
)
// $gt: Greater Than
// $gte: Greater Than or Equal To
// $lt: Less Than
// $lte: Less Than or Equal To
db.Study.find({"Mark": {"$gt": 50}}) // operator

db.Study.find().pretty() // pretty print