function marksheet() {
    // User Iput
    var sub1Mark = +prompt("Enter 1st Subject Score.");
    var sub2Mark = +prompt("Enter 2nd Subject Score.");
    var sub3Mark = +prompt("Enter 3rd Subject Score.");
    var totalMark = +prompt("Enter total marks.");
    // HTML Elements
    let sub1 = document.getElementById("sub1");
    let sub2 = document.getElementById("sub2");
    let sub3 = document.getElementById("sub3");
    let totMarks = document.getElementById("totMark");
    let obtMarks = document.getElementById("obtMark");
    let percent = document.getElementById("percent");
    let div = document.getElementsByClassName("texts");
    let hide_show = document.getElementsByClassName("hidden");
    let GRADE, REMARK;
    let grade = document.getElementById("grade");
    let remarks = document.getElementById("remark");
    // Now Calculations
    var obtainedMarks = sub1Mark + sub2Mark + sub3Mark;
    var percentage = obtainedMarks / totalMark * 100;
    var decimalPart = parseFloat(percentage).toFixed(2);
    // To send HTML
    if (totalMark === 0 || sub1Mark === 0 || sub2Mark === 0 || sub3Mark === 0) {
        hide_show[0].className = "show";
        div[0].className += "hidden";
    } else {
        if (percentage <= 100) {
            if (percentage >= 80) {
                GRADE = "A-one";
                REMARK = "Excellant";
            } else if (percentage >= 70) {
                GRADE = "A";
                REMARK = "Great Work!";
            } else if (percentage >= 60) {
                GRADE = "B";
                REMARK = "'You Need to improve'";
            } else if (percentage >= 50) {
                GRADE = "C";
                REMARK = "Poor effort";
            } else {
                GRADE = "Fail";
                REMARK = "Alas! you failed";
            }
        } else {
            hide_show[0].className = "show";
            div[0].className += "hidden";
        }
        sub1.innerText += sub1Mark;
        sub2.innerText += sub2Mark;
        sub3.innerText += sub3Mark;
        totMarks.innerText += totalMark;
        obtMarks.innerText += obtainedMarks;
        percent.innerText += decimalPart + "%";
        grade.innerText += GRADE;
        remarks.innerText += REMARK;
    }
}
function reload() {
    window.location.reload();
}
marksheet();