const express = require("express");
const app = express();

const PORT = 3000;

// Heart rate data
const heartRateData = {
    normalRange: "60–100 bpm",
    athletes: "40–60 bpm",
    children: "70–130 bpm",
    bradycardia: "Below 60 bpm",
    tachycardia: "Above 100 bpm",
    description: "A normal resting heart rate for adults is 60–100 bpm. It is measured while calm, sitting, or lying down."
};

// API route
app.get("/api/heartrate", (req, res) => {
    res.json(heartRateData);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});