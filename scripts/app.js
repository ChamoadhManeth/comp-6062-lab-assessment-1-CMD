const studentName = "Chamoadh Dissanayake";
const studentNumber = "1208258";
console.log(`${studentName} - ${studentNumber}`);

const headingPrimaryContent = document.querySelector("h1");
headingPrimaryContent.innerHTML = `${studentName} - ${studentNumber}`;
headingPrimaryContent.classList.add("headingPrimary");