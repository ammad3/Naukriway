
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

console.log("script running")

// Resume builder code

async function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const nameValue = document.getElementById('fullName').value;
  const emailValue = document.getElementById('email').value;
  const phoneValue = document.getElementById('phone').value;
  const addressValue = document.getElementById('address').value;

  const companyValue = document.getElementById('company').value;
  const jobTitleValue = document.getElementById('jobTitle').value;
  const startDateValue = document.getElementById('startDate').value;
  const endDateValue = document.getElementById('endDate').value;
  const disValue = document.getElementById('description').value;

  const schoolValue = document.getElementById('school').value;
  const degreeValue = document.getElementById('degree').value;
  const graduateValue = document.getElementById('graduateYear').value;
  const skillsValue = document.getElementById('addSkills').value;

  let y = 30; // Starting Y position

  // Header - Name
  doc.setFontSize(25);
  doc.text(nameValue, 20, y);
  
  y += 8; // Slightly more space after name
  doc.setFontSize(12);
  doc.text(emailValue, 21, y);
  y += 6;
  doc.text(phoneValue, 21, y);
  y += 6;
  doc.text(addressValue, 21, y);

  // Section: Experience
  y += 12;
  doc.setFontSize(20);
  doc.text("Experience", 20, y);

  y += 8;
  doc.setFontSize(12);
  doc.text(companyValue, 21, y);
  y += 6;
  doc.text(jobTitleValue, 21, y);
  y += 6;
  doc.text(`From ${startDateValue} To ${endDateValue}`, 21, y);
  y += 6;
  doc.text(disValue, 21, y);

  // Section: Education
  y += 12;
  doc.setFontSize(20);
  doc.text("Education", 20, y);

  y += 8;
  doc.setFontSize(12);
  doc.text(schoolValue, 21, y);
  y += 6;
  doc.text(degreeValue, 21, y);
  y += 6;
  doc.text(graduateValue, 21, y);

  // Section: Skills
  y += 12;
  doc.setFontSize(20);
  doc.text("Skills", 20, y);

  y += 8;
  doc.setFontSize(12);
  doc.text(skillsValue, 21, y);


  doc.save("output.pdf");
}


