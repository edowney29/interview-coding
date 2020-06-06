const express = require("express");

const app = express();

app.use(express.static("dist"));

app.post("/api/healthcare-provider/register", (req, res) =>
  res.send({ success: true })
);

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}`)
);
