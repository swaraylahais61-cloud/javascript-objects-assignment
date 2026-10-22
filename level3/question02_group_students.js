
const students = [
    { name: "Alya", major: "Informatics Engineering" },
    { name: "Bima", major: "Information System" },
    { name: "Citra", major: "Business Management" },
    { name: "Doni", major: "Information System" }
];

function groupStudentsByMajor(studentsList) {
    return studentsList.reduce((groups, student) => {
        const major = student.major;

        if (!groups[major]) {
            groups[major] = [];
        }

        groups[major].push(student);
        return groups;
    }, {});
}

const groupedStudents = groupStudentsByMajor(students);

console.log(JSON.stringify(groupedStudents, null, 2));
