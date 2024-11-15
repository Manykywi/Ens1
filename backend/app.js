const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const PORT = 8080;
const SECRET_KEY = "your_secret_key";

app.use(bodyParser.json());
app.use(cors());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "email@gmail.com" && password === "password") {
    const user = { email };
    const token = jwt.sign(user, SECRET_KEY, { expiresIn: "1000h" });
    res.json({ token, email });
  } else {
    res.sendStatus(403);
  }
});

app.get("/products", (req, res) => {
  const products = [
    {
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Monster_Energy_drink_%28cropped%29.jpg/1200px-Monster_Energy_drink_%28cropped%29.jpg",
      title: "Energy Drink 1",
      price: "$2.99",
    },
    {
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Monster_Energy_drink_%28cropped%29.jpg/1200px-Monster_Energy_drink_%28cropped%29.jpg",
      title: "Energy Drink 2",
      price: "$3.49",
    },
    {
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Monster_Energy_drink_%28cropped%29.jpg/1200px-Monster_Energy_drink_%28cropped%29.jpg",
      title: "Energy Drink 3",
      price: "$4.00",
    },
    {
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Monster_Energy_drink_%28cropped%29.jpg/1200px-Monster_Energy_drink_%28cropped%29.jpg",
      title: "Energy Drink 4",
      price: "$5.00",
    },
  ];
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
