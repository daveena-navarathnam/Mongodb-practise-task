print("Script is running...\n");

//MongoDB practice Task


//Student Database Example

//1.Create DATABASE AND COLLECTION

//Create or switch to database

use("studentDB");

//Create Collections
db.createCollection("studnets");

print("Database and collection create\n");

//2.INSERT DATA

//Insert one student
db.students.insertOne({
    name: "Rahul",
    age: 21,
    course: "MERN Stack",
    status: "ongoing"
});

//Insert MANY stdents
db.students.insertMany([
    {
        name: "Anjali",
        age: 23,
        course: "Data Science",
        status: "completed"
    },
    {
        name: "Vikram",
        age: 20,
        course: "MERN Stack",
        status: "ongoing"
    }
]);

print("Students inserted\n");

//READ DATA

//Show all students
print("All students:");
db.students.find().forEach(printjson);

//Show only MERN Students
print("\nMERN students:");
db.students.find({ course: "MERN Stack " }).forEach(printjson);


//Update ONE student
db.students.updateOne(
    { name: "Rahul" },
    { $set: { status: "completed" } }
);

//update MANY Students
db.students.updateMany(
    { course: "MERN Stack" },
    { $set: { status: "completed" } }
);

print("\nAfter update:");
db.students.find().forEach(printjson);

//DELETE DATA

//Delete One student
db.students.deleteOne({ name: "Anjali" });

//Delete All students
db.students.deleteMany({});

print("\nAfter delete");
db.students.find().forEach(printjson);

//Add data again
db.students.insertMany([
    {
        name: "Amit",
        age: 19,
        course: "MERN Stack",
        status: "ongoing"
    },
    {
        name: "Priya",
        age: 25,
        course: "Data Science",
        status: "completed"
    },
    {
        name: "Karan",
        age: 22,
        course: "Cyber Security",
        status: "ongoing"
    }
]);

//Age greater than 20
print("\nAge> 20:");
db.students.find({ age: { $gt: 20 } }).forEach(printjson);

//Age less than 23
print("\nAge<23");
db.students.find({ age: { $lt: 23 } }).forEach(printjson);

//Course is MERN or Datascience
print("\nMERN or Data science");
db.students.find({
    course: { $in: ["MERN Stack", "Data Science"] }
}).forEach(printjson);

//AND condition
print("\nAge>20 AND MERN");
db.students.find({
    $and: [
        { age: { $gt: 20 } },
        { course: "MERN Stack" }
    ]
}).forEach(printjson);

//OR condition
print("\n MERN OR Data Science:");
db.students.find({
    $or: [
        {
            course: "MERN Stack"
        },
        {
            course: "Data Science"
        }
    ]
}).forEach(printjson);


//check if field exists
print("\nCheck status exists:");
db.studentd.find({
    status: { $exists: true }
}).forEach(printjson);





//Simple use case

//Create New database
use("courseDB");

//Create collection
db.createCollection("courses");

//Insert courses
db.courses.insertMany([
    {
        name: "MERN Stack",
        available: true
    },
    {
        name: "Data Science",
        available: true
    },
    {
        name: "Cyber Security",
        available: false
    }
]);

//show courses
print("\nCourses:");
db.courses.find().forEach(printjson);


//Update courses
db.course.updateOne(
    {
        name: "Cyber Security"
    },
    {
        $set: { available: true }
    }
);

//show available courses
print("\nAvailable courses:");
db.courses.find({
    availale: true
}).forEach(printjson);