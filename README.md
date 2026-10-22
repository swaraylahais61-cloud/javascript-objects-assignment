# JavaScript Objects — Student Assignment 1/2

## 1. Project Overview

This project contains selected solutions to the **JavaScript Objects — Student Assignment 1/2**. The assignment focuses on creating objects, accessing properties, updating object data, working with nested objects, processing arrays of objects, cloning objects, and validating object structures.

The solutions are organized by level to make the code easy to navigate, test, and review.

## 2. Assignment Objectives

The objectives of this project are to:

- Create JavaScript objects and access their properties.
- Access object properties dynamically using variable keys.
- Manage object data through basic operations and validation.
- Work with nested objects and arrays of objects.
- Summarize inventory data and group students by major.
- Implement a deep-clone function for ordinary nested objects and arrays.
- Validate objects against specified rules.

## 3. Project Structure

```text
javascript-object-assignments/
├── .gitignore
├── README.md
├── level1/
│   ├── question01_student.js
│   └── question04_dynamic_property.js
├── level2/
│   ├── question02_bank_account.js
│   └── question03_nested_address.js
├── level3/
│   ├── question01_inventory.js
│   └── question02_group_students.js
├── level4/
│   ├── question01_deep_clone.js
│   └── question02_object_validator.js
├── outputs/
│   ├── level1_q1_student.png
│   ├── level1_q4_dynamic_property.png
│   ├── level2_q2_bank_account.png
│   ├── level2_q3_nested_address.png
│   ├── level3_q1_inventory.png
│   └── level4_q1_deep_clone.png
└── video/
    ├── level3_group_students.mp4
    └── level4_object_validator.mp4
```

## 4. Selected Questions

### Level 1: Basic Object Operations

- **Question 1 — Create a Student Object:** Create a student object containing relevant student information.
- **Question 4 — Access Properties Dynamically:** Access an object's property using a variable as the property key.

### Level 2: Object Manipulation

- **Question 2 — Manage a Bank Account:** Perform basic account operations and handle invalid transactions.
- **Question 3 — Work with Nested Objects:** Create and access information stored inside a nested object.

### Level 3: Data Processing

- **Question 1 — Build an Inventory Summary:** Calculate inventory information and identify products with low stock.
- **Question 2 — Group Students by Major:** Organize student records into groups based on their major.

### Level 4: Advanced Object Operations

- **Question 1 — Create a Deep-Clone Function:** Copy ordinary nested objects and arrays without sharing their nested references.
- **Question 2 — Build an Object Validator:** Check an object's properties against defined validation rules.



javascript-object-assignments/
├── outputs/
│   ├── level1_q1_student.png
│   ├── level1_q4_dynamic_property.png
│   ├── level2_q2_bank_account.png
│   ├── level2_q3_nested_address.png
│   ├── level3_q1_inventory.png
│   ├── level3_q2_group_students.png
│   ├── level4_q1_deep_clone.png
│   └── level4_q2_object_validator.png
└── videos/
    ├── level3_group_students.mp4
    └── level4_object_validator.mp4
## 5. Requirements

- Node.js installed on the computer.
- A code editor, such as Visual Studio Code.
- A terminal, such as Windows PowerShell.

This project uses standard JavaScript and Node.js. No external packages are required.

## 6. How to Run the Programs

Open PowerShell or the VS Code terminal in the project directory.

Run each JavaScript file using the following command format:

```powershell
node level1/question01_student.js
```

For example, to run the student-grouping solution:

```powershell
node level3/question02_group_students.js
```

To run the object-validator solution:

```powershell
node level4/question02_object_validator.js
```

Replace the file path with the path of any other solution you want to test.

## 7. Video Demonstrations

The assignment requires two screen-recorded demonstrations.

1. **Level 3 — Question 2: Group Students by Major.** The recording demonstrates the program, explains the grouping logic, and shows the output.
2. **Level 4 — Question 2: Build an Object Validator.** The recording explains the validation rules, demonstrates valid and invalid cases, and shows the results.

The original recordings remain in the local `videos/` directory and are excluded from Git. Compressed copies are saved in `video/` at reduced resolution and frame rate to fit GitHub's 100 MB per-file limit.

## 8. Testing and Expected Results

Each program should be executed and checked before submission.

Testing includes:

- Checking that object properties return the expected values.
- Testing valid and invalid bank account transactions.
- Confirming that nested object properties are accessed correctly.
- Verifying inventory totals and low-stock products.
- Confirming that students are grouped under the correct majors.
- Checking that modifying a deep clone does not change the original nested data.
- Testing the validator with both valid and invalid objects.

Screenshot examples are included in the `outputs/` directory. Actual outputs should be verified by running the programs.

## 9. Limitations

The deep-clone implementation is intended for ordinary nested objects and arrays containing primitive values. It does not handle circular references or special object types unless explicitly implemented.

The object validator supports only the rules implemented in the source code. Its behavior should be checked against the assignment requirements.


## 11. Conclusion

This project demonstrates practical applications of JavaScript objects, from basic property access to structured data processing and validation. Organizing the solutions by level makes it easier to understand each task, test the implementation, and review the results.

**Submission:** The GitHub repository contains the source code, documentation, and available output screenshots. Compressed video demonstrations are in `video/`; the original full-quality recordings remain local in `videos/`.
