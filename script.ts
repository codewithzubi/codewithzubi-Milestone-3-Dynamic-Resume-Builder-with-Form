interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
}

interface ResumeData {
    personalInfo: PersonalInfo;
    education: string;
    experience: string;
    skills: string;
}

// Adding event listener for the form submission
document.getElementById('resumeForm')?.addEventListener('submit', (event) => {
    event.preventDefault();

    // Accessing form values
    const form = event.target as HTMLFormElement;
    const resumeData: ResumeData = {
        personalInfo: {
            name: (form.querySelector('#name') as HTMLInputElement).value,
            email: (form.querySelector('#email') as HTMLInputElement).value,
            phone: (form.querySelector('#phone') as HTMLInputElement).value
        },
        education: (form.querySelector('#education') as HTMLTextAreaElement).value,
        experience: (form.querySelector('#experience') as HTMLTextAreaElement).value,
        skills: (form.querySelector('#skills') as HTMLTextAreaElement).value
    };

    // Generating the resume HTML and displaying it in the output div
    const resumeOutput = document.getElementById('resumeOutput')!;
    resumeOutput.innerHTML = generateResumeHTML(resumeData);
});

function generateResumeHTML(data: ResumeData): string {
    return `
        <h1 style="color: #007BFF;">${data.personalInfo.name}</h1>


        <hr size="5" color="WHITE">


        <p><strong style="color: #007BFF;">Email:</strong> <span style="color:#007BFF;">${data.personalInfo.email}</span></p>
        <p><strong style="color: #007BFF;">Phone:</strong> <span style="color: #007BFF;">${data.personalInfo.phone}</span></p>

        <h2 style="color: #007BFF;">Education</h2>
         <hr size="5" color="WHITE">
       
        <p style="color: #007BFF;">${data.education}</p>
        <h2 style="color: #007BFF;">Experience</h2>
         <hr size="5" color="WHITE">
        <p style="color: #007BFF;">${data.experience}</p>
        <h2 style="color: #007BFF;">Skills</h2>
        <hr size="5" color="WHITE">
        <p style="color: #007BFF;">${data.skills}</p>
    `;
}

