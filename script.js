var _a;
// Adding event listener for the form submission
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Accessing form values
    var form = event.target;
    var resumeData = {
        personalInfo: {
            name: form.querySelector('#name').value,
            email: form.querySelector('#email').value,
            phone: form.querySelector('#phone').value
        },
        education: form.querySelector('#education').value,
        experience: form.querySelector('#experience').value,
        skills: form.querySelector('#skills').value
    };
    // Generating the resume HTML and displaying it in the output div
    var resumeOutput = document.getElementById('resumeOutput');
    resumeOutput.innerHTML = generateResumeHTML(resumeData);
});
function generateResumeHTML(data) {
    return "\n        <h1 style=\"color:WHITE\";\">".concat(data.personalInfo.name, "</h1>\n\n\n        <hr size=\"5\" color=\"WHITE\">\n\n\n        <p><strong style=\"color: #007BFF;\">Email:</strong> <span style=\"color:#007BFF;\">").concat(data.personalInfo.email, "</span></p>\n        <p><strong style=\"color: #007BFF;\">Phone:</strong> <span style=\"color: #007BFF;\">").concat(data.personalInfo.phone, "</span></p>\n\n        <h2 style=\"color: #007BFF;\">Education</h2>\n         <hr size=\"5\" color=\"WHITE\">\n       \n        <p style=\"color: #007BFF;\">").concat(data.education, "</p>\n        <h2 style=\"color: #007BFF;\">Experience</h2>\n         <hr size=\"5\" color=\"WHITE\">\n        <p style=\"color: #007BFF;\">").concat(data.experience, "</p>\n        <h2 style=\"color: #007BFF;\">Skills</h2>\n        <hr size=\"5\" color=\"WHITE\">\n        <p style=\"color: #007BFF;\">").concat(data.skills, "</p>\n    ");
}
