const mongoose = require("mongoose");

const password = process.argv[2];
const name = process.argv[3];
const phone = process.argv[4];

mongoose.set("strictQuery", false);

mongoose.connect(url, { family: 4 });

const personSchema = new mongoose.Schema({
  name: String,
  phone: String,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({ name, phone });

if (process.argv.length === 3) {
  // Password only -> fetch and list all
  Person.find({}).then((result) => {
    console.log("phonebook:");
    result.forEach((person) => {
      console.log(person.name, person.phone);
    });
    mongoose.connection.close();
  });
  // process.exit(1);
} else {
  // Name and phone given -> add new entry
  person.save().then((result) => {
    console.log(`added ${name} number ${phone} to phonebook`);
    mongoose.connection.close();
  });
}
