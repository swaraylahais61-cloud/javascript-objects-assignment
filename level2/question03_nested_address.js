const employee = {
    name: "Maya",
    address: {
        street: "12 Merdeka Street",
        city: "Sukabumi",
        postalCode: "43111"
    }
};

employee.address.city = "Bandung";

console.log("Employee:", employee.name);
console.log("Complete address:", employee.address);
