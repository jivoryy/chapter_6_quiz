const express = require("express");
const app = express();
const port = 8000;
const { Book } = require("./models");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  const dataSimon = await Book.findAll({
    where: {
      author: "Simon Sinek",
    },
  });
  res.json(dataSimon);
});

app.use((err, req, res, next) => {
  res.status(500).json({
    status: "fail",
    errors: err.message,
  });
});

app.use((req, res, next) => {
  res.status(404).json({
    status: "fail",
    errors: "Page doesn't exist. Please double-check your URL.",
  });
});

app.listen(port, () =>
  console.log(`Server nyala. Alamat http://localhost:${port}`)
);
