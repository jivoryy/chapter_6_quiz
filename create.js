const { Book } = require("./models");

Book.create({
  name: "Percy Jackson",
  author: "Rick Riordan",
  price: 108000,
  is_publish: true,
});
