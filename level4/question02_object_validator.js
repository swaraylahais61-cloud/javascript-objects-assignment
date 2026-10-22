function validate(object, schema) {
    const errors = [];

    for (const [property, rules] of Object.entries(schema)) {
        const exists = Object.prototype.hasOwnProperty.call(object, property);
        const value = object[property];

        if (rules.required &&
            (!exists || value === undefined || value === null)) {
            errors.push(`${property}: is required.`);
            continue;
        }

        if (!exists || value === undefined || value === null) {
            continue;
        }

        if (rules.type === "array") {
            if (!Array.isArray(value)) {
                errors.push(`${property}: must be an array.`);
                continue;
            }
        } else if (rules.type && typeof value !== rules.type) {
            errors.push(`${property}: must be of type ${rules.type}.`);
            continue;
        }

        if (rules.type === "number" &&
            rules.min !== undefined && value < rules.min) {
            errors.push(`${property}: must be at least ${rules.min}.`);
        }
    }

    return errors;
}

const schema = {
    name: { required: true, type: "string" },
    age: { required: true, type: "number", min: 18 },
    email: { required: true, type: "string" }
};

const validUser = {
    name: "Alya",
    age: 21,
    email: "alya@example.com"};
const invalidUser = {
    name: 231,
    age: 16
};

console.log("Valid user errors:", validate(validUser, schema));
console.log("Invalid user errors:", validate(invalidUser, schema));
