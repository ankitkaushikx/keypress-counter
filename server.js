import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  const htmlPath = path.join(__dirname, "public", "html", "index.html");

  res.sendFile(htmlPath, (err) => {
    if (err) {
      console.error(`Error serving HTML file: ${err}`);
      res.status(500).send("Internal Server Error");
    }
  });
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}--->>>>>>>>>>>>>>>>>>>>>>.`);
});
