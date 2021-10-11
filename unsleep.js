import fetch from "node-fetch";
async function getHelp() {
  try {
    const URI = " https://giftmoney-tracker.in/help";
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