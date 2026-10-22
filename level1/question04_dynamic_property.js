const book = {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt and David Thomas",
    year: 1999
};

function getProperty(object, key) {
    return object[key];
}

console.log(getProperty(book, "title"));
console.log(getProperty(book, "author"));
console.log(getProperty(book, "year"));
console.log("Missing key:", getProperty(book, "publisher"));