import fetch from "node-fetch";
async function getHelp() {
  try {
    const URI = " https://giftmoney-tracker.herokuapp.com/help";
    const res = await fetch(URI, {
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
