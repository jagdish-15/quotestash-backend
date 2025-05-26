const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const donationRoute = require("./routes/donation");
app.use("/donate", donationRoute);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
