import express from "express";
import cors from  "cors";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
// app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1> Hello, World! </h1>");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("<h1> Hello, World! </h1>");
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
