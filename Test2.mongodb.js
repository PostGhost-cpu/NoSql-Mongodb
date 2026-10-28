/* global use, db */
// MongoDB Playground

use (ST10477323); // database
db.createCollection("Client"); // collection

// collection data
db.ST10477323.insertOne([
    {"Client Name": "Debbie", "Thomas"},
    {"Client Surname": "Theart", "Duncan"},
    {"Client DOB": "1980-03-17", "1976-08-12"}
]);
