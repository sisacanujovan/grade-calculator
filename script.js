// =====================================
// Student Grade Calculator
// script.js
// =====================================

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

const total = document.getElementById("total");
const average = document.getElementById("average");
const grade = document.getElementById("grade");
const status = document.getElementById("status");

// Calculate Button
calculateBtn.addEventListener("click", calculateMarks);

// Reset Button
resetBtn.addEventListener("click", resetCalculator);

function calculateMarks() {

    const marks = [];

    for (let i = 1; i <= 6; i++) {

        const input = document.getElementById(`sub${i}`);

        const value = Number(input.value);

        // Empty field check
        if (input.value === "") {
            alert("Please enter marks for all subjects.");
            input.focus();
            return;
        }

        // Range validation
        if (value < 0 || value > 100) {
            alert("Marks should be between 0 and 100.");
            input.focus();
            return;
        }

        marks.push(value);

    }

    // Total
    const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);

    // Average
    const avg = totalMarks / marks.length;

    // Pass/Fail
    const failedSubject = marks.some(mark => mark < 35);

    // Grade
    let gradeValue = "";

    if (failedSubject) {

        gradeValue = "F";

    } else if (avg >= 90) {

        gradeValue = "A+";

    } else if (avg >= 80) {

        gradeValue = "A";

    } else if (avg >= 70) {

        gradeValue = "B";

    } else if (avg >= 60) {

    }
}