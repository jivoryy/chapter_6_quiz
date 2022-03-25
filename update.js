const { Book } = require("./models");

Book.update(
  {
    name: "Percy Jackson & the Olympians",
  },
  {
    where: {
      name: "Percy Jackson",
      author: "Rick Riordan",
    },
  }
);
