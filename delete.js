const { Book } = require("./models");

Book.destroy({
  where: {
    author: "Rick Riordan",
  },
});
