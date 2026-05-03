# 📘 MongoDB Basic Practice Task

## 🎯 Objective

The objective of this task is to understand the fundamentals of MongoDB, including database creation, data manipulation, and querying. This project demonstrates the use of CRUD operations, query operators, and a simple real-world use case.

---

## 🗂️ Project Overview

This project is divided into the following sections:

1. Database & Collection Setup
2. Insert Operations
3. Read Operations
4. Update Operations
5. Delete Operations
6. Query Operators
7. Real-World Use Case

All operations are implemented using the MongoDB shell (`mongosh`) in a JavaScript file.

---

## 🛠️ Technologies Used

* MongoDB
* MongoDB Shell (`mongosh`)
* JavaScript

---

## 📁 Database & Collection Setup

* Created a database named `studentDB`
* Created a collection named `students`

```js
use("studentDB");
db.createCollection("students");
```

---

## ➕ Insert Operations

* Inserted one document using `insertOne()`
* Inserted multiple documents using `insertMany()`

```js
db.students.insertOne({
  name: "Rahul",
  age: 21,
  course: "MERN Stack",
  status: "ongoing"
});
```

---

## 📖 Read Operations

* Retrieved all documents using `find()`
* Filtered data based on specific conditions

```js
db.students.find();
db.students.find({ course: "MERN Stack" });
```

---

## ✏️ Update Operations

* Updated a single document using `updateOne()`
* Updated multiple documents using `updateMany()`

```js
db.students.updateOne(
  { name: "Rahul" },
  { $set: { status: "completed" } }
);
```

---

## ❌ Delete Operations

* Deleted a single document using `deleteOne()`
* Deleted all documents using `deleteMany()`

```js
db.students.deleteOne({ name: "Anjali" });
db.students.deleteMany({});
```

---

## 🔍 Query Operators

The following MongoDB query operators were practiced:

* `$gt` (greater than)
* `$lt` (less than)
* `$in` (match values in an array)
* `$and` (multiple conditions)
* `$or` (either condition)
* `$exists` (check field existence)

Example:

```js
db.students.find({ age: { $gt: 20 } });
```

---

## 🌍 Real-World Use Case: Course Management System

A simple course management system was created using a separate database `courseDB`.

### Features:

* Add courses
* View all courses
* Update course availability
* Filter available courses

```js
use("courseDB");

db.courses.insertMany([
  { name: "MERN Stack", available: true },
  { name: "Data Science", available: true },
  { name: "Cyber Security", available: false }
]);
```

---

## ▶️ How to Run the Project

1. Open terminal
2. Start MongoDB shell:

   ```bash
   mongosh
   ```
3. Load the script file:

   ```bash
   load("student.js")
   ```

---

## 📌 Key Learnings

* Understanding of MongoDB database structure
* Performing CRUD operations
* Using query operators effectively
* Structuring data for real-world applications

---

## ✅ Conclusion

This project provides a foundational understanding of MongoDB operations and demonstrates how database concepts can be applied in practical scenarios.

---

## 👨‍💻 Author

Daveena Navarathnam.
