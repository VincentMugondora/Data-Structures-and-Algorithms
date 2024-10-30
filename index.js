'use strict'

// Define an array of student names
const allStudentNames = ["vin", "tino", "tadiwa", "anashe", "mark", "vin"]

// Function to find a student by name in the array
const findStudent = (allStudentNames, studentName) => {
    for (let i = 0; i < allStudentNames.length; i++) {
        if (allStudentNames[i] === studentName) {
            console.log(`Found ${studentName}`)
        }
        
    }
};

// Test the function with a student name
findStudent(allStudentNames, "vin"); // Output: Found vin

// define array of grocery list
const groceries = ["milk", "bread", 'eggs', 'flour', 'cheese', 'sugar']

const searchForItems = (item) => {
    for (let i = 0; i < groceries.length; i++) {
        if (groceries[i] === item) {
            console.log(`Found ${item}`)
        }
        
    }
}