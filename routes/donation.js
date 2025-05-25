const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const donationsFilePath = path.join(__dirname, "..", "donations.json");

router.post("/", (req, res) => {
    const donationInfo = req.body;
    console.log(donationInfo);

    donationInfo.time = new Date().toISOString();

    fs.readFile(donationsFilePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading the donation file: ", err);
            return res.status(500).json({ error: "Server error" });
        }

        let donations = [];
        try {
            donations = JSON.parse(data);
        } catch (parseErr) {
            console.error("Error parsing donations JSON", parseErr);
            donations = [];
        }

        donations.push(donationInfo);

        fs.writeFile(donationsFilePath, JSON.stringify(donations, null, 4), (writeErr) => {
            if (writeErr) {
                console.error("Error writing donations JSON: ", writeErr);
                return res.status(500).json({ error: "Server error" });
            }

            res.status(201).json({ message: "Donation saved successfully" })
        });
    });
});

module.exports = router;