const express = require("express");
const { verifyToken } = require("../middlewares/verifyToken");
const router = express.Router();

router.post("/", verifyToken, (req, res, next) => {
  const { first, second, third } = req.body;
  if (first === "A" && second === "A" && third === "A") {
    return res.status(201).json({
      remarks: "You have to change these traits to fall in medium grades",
      recommendations: [
        "Absence less than 7 days. (Probability 100%)",
        "Visit resources less than 78 times (Probability 50%)",
        "Discussion participation less than 16 times. (Probability 100%)",
      ],
    });
  }
  if (first === "A" && second === "A" && third === "B") {
    return res.status(201).json({
      remarks: "You have to change these traits to fall in medium grades",
      recommendations: [
        "Absence less than 7 days. (Probability 100%)",
        "Visit resources less than 78 times (Probability 50%)",
        "Discussion participation less than 16 times. (Probability 100%)",
      ],
    });
  }
  if (first === "A" && second === "A" && third === "C") {
    return res.status(201).json({
      remarks: "You have to change these traits to fall in medium grades",
      recommendations: [
        "Discussion participation less than 16 times. (Probability 100%)",
        "Visit resources more than 82 times. (Probability 100%)",
      ],
    });
  }
  if (first === "A" && second === "B" && third === "A") {
    return res.status(201).json({
      remarks: "You have to change these traits to fall in medium grades",
      recommendations: [
        "Absence less than 7 days. (Probability 100%)",
        "Visit resources less than 78 times. (Probability 50%)",
        "Discussion participation less than 16 times. (Probability 100%)",
      ],
    });
  }

  if (first === "A" && second === "B" && third === "B") {
    return res.status(201).json({
      remarks: "You have to change these traits to fall in medium grades",
      recommendations: [
        "Absence less than 7 days. (Probability 100%)",
        "Visit resources less than 78 times. (Probability 50%)",
        "Discussion participation less than 16 times. (Probability 100%)",
      ],
    });
  }
  if (first === "A" && second === "C" && third === "B") {
    return res.status(201).json({
      remarks: "You have to change these traits to fall in medium grades",
      recommendations: [
        "Absence less than 7 days. (Probability 100%)",
        "Visit resources less than 78 times. (Probability 50%)",
        "Discussion participation less than 16 times. (Probability 100%)",
      ],
    });
  }
  if (first === "A" && second === "C" && third === "B") {
    return res.status(201).json({
      remarks: "You have to change these traits to fall in medium grades",
      recommendations: [
        "Absence less than 7 days. (Probability 100%)",
        "Visit resources less than 78 times. (Probability 50%)",
        "Discussion participation less than 16 times. (Probability 100%)",
      ],
    });
  }
  if (first === "A" && second === "C" && third === "C") {
    return res.status(201).json({
      remarks: "You have to change these traits to fall in medium grades",
      recommendations: [
        "Visit resources more than 82 times. (Probability 100%)",
        "discussion participation less than 16 times. (Probability 100%)",
      ],
    });
  }
  if (first === "B" && second === "A" && third === "A") {
    return res.status(201).json({
      remarks: "",
      recommendations: ["We have no recommendation right now."],
    });
  }
  if (first === "B" && second === "A" && third === "B") {
    return res.status(201).json({
      remarks: "You have to change these traits to fall in medium grades",
      recommendations: [
        "Absence less than 7 days (Probability 50%)",
        "visit resources less than 75 times (Probability 100%)",
        "discussion participation less than 47 times (Probability 33%)",
        "discussion participation between 13 and 19 times. (Probability 33%)",
      ],
    });
  }
  if (first === "B" && second === "A" && third === "C") {
    return res.status(201).json({
      remarks: "",
      recommendations: ["We have no recommendation right now."],
    });
  }
  if (first === "B" && second === "B" && third === "A") {
    return res.status(201).json({
      remarks: "",
      recommendations: ["We have no recommendation right now."],
    });
  }
  if (first === "B" && second === "B" && third === "B") {
    return res.status(201).json({
      remarks: "You have to change these traits to fall in medium grades",
      recommendations: [
        "Absence less than 7 days (Probability 70%)",
        "visit resources less than 75 times (Probability 100%)",
      ],
    });
  }
  if (first === "B" && second === "C" && third === "A") {
    return res.status(201).json({
      remarks: "You have to change these traits to fall in medium grades",
      recommendations: ["Discussion should be between 12 and 19 times, (Probability 100%)"],
    });
  }
  if (first === "B" && second === "C" && third === "B") {
    return res.status(201).json({
      remarks: "You have to change these traits to fall in medium grades",
      recommendations: [
        "Absence less than 7 days, (Probability 70%)",
        "visit resources less than 75 time, (Probability 100%)",
        "discussion participation less than 47 times, (Probability 33%)",
        "discussion participation above 47 times. (Probability 33%)",
      ],
    });
  }
  if (first === "B" && second === "C" && third === "C") {
    return res.status(201).json({
      remarks: "",
      recommendations: [
        "We have no recommendation right now."
      ],
    });
  }
  if (first === "C" && second === "A" && third === "A") {
    return res.status(201).json({
      remarks: "You have to change these traits to fall in medium grades",
      recommendations: [
        "Absence less than 7 days (Probability 70%)",
        "visit resources less than 75 times (Probability 100%)",
      ],
    });
  }
  if (first === "C" && second === "A" && third === "B") {
    return res.status(201).json({
      remarks: "You have to change these traits to fall in medium grades",
      recommendations: [
        "Absence less than 7 days (Probability 50%)",
        "visit resources less than 75 times (Probability 100%)", 
      ],
    });
  }
  if (first === "C" && second === "A" && third === "C") {
    return res.status(201).json({
      remarks: "You have to change these traits to fall in medium grades",
      recommendations: [
        "Absence less than 7 days (Probability 50%)",
        "visit resources less than 75 times (Probability 100%)",
      ],
    });
  }
  if (first === "C" && second === "B" && third === "A") {
    return res.status(201).json({
      remarks: "You have to change these traits to fall in medium grades",
      recommendations: [
        "Absence less than 7 days (Probability 100%)",
        "visit resources less than 75 times (Probability 100%)",
      ],
    });
  }
  if (first === "C" && second === "B" && third === "B") {
    return res.status(201).json({
      remarks: "You have to change these traits to fall in medium grades",
      recommendations: [
        "Absence less than 7 days (Probability 50%)",
        "visit resources less than 75 times (Probability 100%)",
      ],
    });
  }
  if (first === "C" && second === "B" && third === "C") {
    return res.status(201).json({
      remarks: "You have to change these traits to fall in medium grades",
      recommendations: [
        "Absence less than 7 days (Probability 50%)",
        "visit resources less than 75 times (Probability 100%)",
      ],
    });
  }
  if (first === "C" && second === "C" && third === "A") {
    return res.status(201).json({
      remarks: "You have to change these traits to fall in medium grades",
      recommendations: [
        "Absence less than 7 days (Probability 50%)",
        "visit resources less than 75 times (Probability 100%)",
      ],
    });
  }
  if (first === "C" && second === "C" && third === "B") {
    return res.status(201).json({
      remarks: "You have to change these traits to fall in medium grades",
      recommendations: [
        "Absence less than 7 days (Probability 50%)",
        "visit resources less than 75 times (Probability 100%)",
      ],
    });
  }
  if (first === "C" && second === "C" && third === "B") {
    return res.status(201).json({
      remarks: "You have to change these traits to fall in medium grades",
      recommendations: [
        "Absence less than 7 days (Probability 50%)",
        "visit resources less than 75 times (Probability 100%)",
      ],
    });
  }
  return res.status(201).json({
    remarks: "",
    recommendations: ["We have no recommendation right now."],
  });
});

module.exports = router;
