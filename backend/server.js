const express = require("express");
const app = express();
app.get("/test1", (req, res) => res.send("test1"));
app.get("/api/activities", (req, res) => {
  res.json([]);
});
app.listen(3000, () => console.log("VitalSync API on :3000"));
