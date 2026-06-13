const express = require("express");
const app = express();

app.get("/api/patient", (req, res) => {
  res.json({
    id: "123",
    name: "John Doe",
    resourceType: "Patient"
  });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
