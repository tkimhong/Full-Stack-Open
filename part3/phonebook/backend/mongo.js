const mongoose = require("mongoose");

const password = process.argv[2];
const name = process.argv[3];
const phone = process.argv[4];

const url = `mongodb+srv://fullstack:${password}@cluster0.6wcma9a.mongodb.net/phonebook?appName=Cluster0`;

mongoose.set("strictQuery", false);

mongoose.connect(url, { family: 4 });

const personSchema = new mongoose.Schema({
  name: String,
  phone: String,
});

const Person = mongoose.model("Person", personSchema);

// Inaccessible anyway (need to destructure this object)
/* const person = new Person({
  name: "Hong Daddy",
  phone: "016126629",
}); */

// TODO read from phonebook
if (process.argv.length < 4) {
  // console.log("give password as argument");
  Person.find({}).then((result) => {
    result.forEach((person) => {
      console.log(person);
    });
    mongoose.connection.close();
  });
  // process.exit(1);
}

/* person.save().then((result) => {
  console.log(`added ${name} number ${phone} to phonebook`);
  mongoose.connection.close();
}); */
