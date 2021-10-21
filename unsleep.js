import fetch from "node-fetch";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();
var counter = 0;
async function getHelp() {
  try {
    const res = await fetch(process.env.URI, {
      method: "GET",
      body: null,
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.error) {
      console.log(data.error);
      return null;
    }
    console.log(data);
    return data;
  } catch (err) {
    console.log("from catch");
    console.log(err);
  }
}
getHelp();
var intervalId;
try {
  intervalId = setInterval(getHelp, 1000 * 60 * 18);
} catch (err) {
  clearInterval(intervalId);
}
app.get("/", async (req, res) => {
  console.log();
  const data = await getHelp();
  res.status(200).json({ data: data, count: counter });
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
