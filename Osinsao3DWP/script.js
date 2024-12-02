// Header Section
const header = document.createElement('header');

const logoLink = document.createElement('a');
logoLink.href = "#";
logoLink.className = "logo";
logoLink.textContent = "WELCOME!";
header.appendChild(logoLink);


const nav = document.createElement('nav');

const navLinks = [
  { href: "#", text: "Home", class: "active" },
  { href: "#About-section", text: "About" },
  { href: "#Skills-section", text: "Skills" },
  { href: "#", text: "Projects" },
  { href: "#", text: "Contact" }
];

navLinks.forEach(linkData => {
  const link = document.createElement('a');
  link.href = linkData.href;
  link.textContent = linkData.text;
  if (linkData.class) link.className = linkData.class;
  nav.appendChild(link);
});

header.appendChild(nav);

document.body.appendChild(header);

// End of Header Section

// Hero Section
const section = document.createElement('section');
section.className = 'home';

const homeImgDiv = document.createElement('div');
homeImgDiv.className = 'home-img';

const img = document.createElement('img');
img.src = 'img/PakoMan.png';
img.alt = '';
homeImgDiv.appendChild(img);

section.appendChild(homeImgDiv);

const homeContentDiv = document.createElement('div');
homeContentDiv.className = 'home-content';

const h1 = document.createElement('h1');
h1.innerHTML = 'Hello, I\'m <span>Niel Osinsao</span>';
homeContentDiv.appendChild(h1);

const h3 = document.createElement('h3');
h3.className = 'typing-text';
h3.innerHTML = 'I\'m a <span></span>';
homeContentDiv.appendChild(h3);

const anchor = document.createElement('a');
anchor.href = '#About-section';
anchor.className = 'btn';
anchor.textContent = 'Know more about me?';
homeContentDiv.appendChild(anchor);

section.appendChild(homeContentDiv);

document.body.appendChild(section);
// End of Hero Secton

// About Section
const aboutSection = document.createElement('section');
aboutSection.className = 'about';
aboutSection.id = 'About-section';


const aboutContentDiv = document.createElement('div');
aboutContentDiv.className = 'about-content';

const aboutTitle = document.createElement('h1');
aboutTitle.textContent = 'About me';
aboutContentDiv.appendChild(aboutTitle);

const aboutParagraph = document.createElement('p');
aboutParagraph.textContent = 
    'My full name is Niel Yetyet Osinsao (21), I am currently on my 3rd year in college under the course of ' + 
    'Bachelor of Science in Information Technology in Marinduque State University.';
aboutContentDiv.appendChild(aboutParagraph);

aboutSection.appendChild(aboutContentDiv);

document.body.appendChild(aboutSection);

const anchor1 = document.createElement('a');
anchor1.href = '#SkillSection';
anchor1.className = 'btn2';
anchor1.textContent = 'Know more';
aboutContentDiv.appendChild(anchor1);

// End of About Section

// Skill Section
const skills = [
    {
        title: 'Python',
        imgSrc: 'img/pythonl.png',
        description: `Python is the first programming language that I learned. It was introduced 
            to me in my first year of college. Python's straightforward environment gave me a 
            surface understanding of what programming is. It also provided me basic knowledge, 
            like variables.`,
    },
    {
        title: 'Html',
        imgSrc: 'img/Html.png',
        description: `Html was introduced in my second year of college. We were taught the basics of 
            creating websites.`,
    },
    {
        title: 'Css',
        imgSrc: 'img/Css.png',
        description: `CSS was also introduced in my second year of college. This is where we obtained the 
            basics of designing a website.`,
    },
    {
        title: 'Javascript',
        imgSrc: 'img/javascript.png',
        description: `In my third year of college, JavaScript was introduced to us to add dynamic functions 
            to our websites.`,
    },
];

const SkillSection = document.createElement("Section");
SkillSection.id = "SkillSection";
const a = document.createElement("div");
a.className = "My-skill";
a.innerHTML = ` <h1>My <span>Skills</span></h1>`;
SkillSection.appendChild(a);



const b = document.createElement("div");
b.className = "Descript";
b.innerHTML = ` <h2>Languages I've been familiar with since I've entered college.</h2>`;
SkillSection.appendChild(b);

const skillsImgsDiv = document.createElement('div');
skillsImgsDiv.className = 'skills-container';

skills.forEach(skill => {
    const skillDiv = document.createElement('div');
    skillDiv.className = 'skill-item';

    const imgDiv = document.createElement('div');
    imgDiv.className = 'img-container';

    const skillImg = document.createElement('img');
    skillImg.src = skill.imgSrc;
    skillImg.alt = skill.title;
    imgDiv.appendChild(skillImg);

    skillDiv.appendChild(imgDiv);

    const title = document.createElement("div");
    title.className = "skill-title"

    const titleEach = document.createElement("h2");
    titleEach.textContent = skill.title;
    title.appendChild(titleEach);

    skillDiv.appendChild(title);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'description-container';

    const skillDescription = document.createElement('p');
    skillDescription.textContent = skill.description;
    descriptionDiv.appendChild(skillDescription);

    skillDiv.appendChild(descriptionDiv);

    skillsImgsDiv.appendChild(skillDiv);   
});

SkillSection.appendChild(skillsImgsDiv);

const button = document.createElement('button');
button.className = 'skills-button';
button.textContent = 'Continue';

button.addEventListener('click', function() {
     const btn = document.getElementById("id name nung gusto mong puntahan");
     if (btn) {
      btn.scrollIntoView({ behavior: "smooth" });
     }
});

SkillSection.appendChild(button);
document.body.appendChild(SkillSection);

// End of Skill Section

//Start of project section

const projectsSection = document.createElement('section');
projectsSection.id = "ProjectSection";
projectsSection.className = 'Projects';

const projectsTitle = document.createElement('h1');
projectsTitle.textContent = 'My Projects';
projectsSection.appendChild(projectsTitle);

const projectContentDiv = document.createElement('div');
projectContentDiv.className = 'Project-content';

const projectImages = [
    'img/Worlds Hardest Game.png',
    'img/Landing Page Activity.png',
    'img/Screenshot 2024-12-02 195807.png'
];

projectImages.forEach(imgSrc => {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = `Project image: ${imgSrc}`;
    projectContentDiv.appendChild(img);
});

projectsSection.appendChild(projectContentDiv);

document.body.appendChild(projectsSection);

// const button = document.createElement('button');
// button.className = 'projects-button';
// button.textContent = 'View All Skills';

// button.addEventListener('click', function() {
//      const btn = document.getElementById("id name nung gusto mong puntahan");
//      if (btn) {
//       btn.scrollIntoView({ behavior: "smooth" });
//      }
// });


// document.body.appendChild(button);


//End of project section

//Start of contact section

const contactSection = document.createElement('section');
contactSection.className = 'Contact';

const contactInfoDiv = document.createElement('div');
contactInfoDiv.className = 'Contact-info';

const heading = document.createElement('h1');
heading.textContent = 'Contact Me';
contactInfoDiv.appendChild(heading);

const description = document.createElement('p');
description.textContent = 'If you would like me to become one of your team, please feel free to Contact me.';
contactInfoDiv.appendChild(description);

const address = document.createElement('p');
address.innerHTML = '<span>Address:</span> Agumaymayan, Boac, Marinduque';
contactInfoDiv.appendChild(address);

const phone = document.createElement('p');
phone.innerHTML = '<span>Phone:</span> 09855523580';
contactInfoDiv.appendChild(phone);

const email = document.createElement('p');
email.innerHTML = '<span>E-mail:</span> nielosinsao90@gmail.com';
contactInfoDiv.appendChild(email);

contactSection.appendChild(contactInfoDiv);

const contactInputDiv = document.createElement('div');
contactInputDiv.className = 'Contact-input';

const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.placeholder = 'Name';
nameInput.id = ''; 
contactInputDiv.appendChild(nameInput);

const messageTextarea = document.createElement('textarea');
messageTextarea.placeholder = 'Enter Message';
messageTextarea.id = ''; 
contactInputDiv.appendChild(messageTextarea);

const messageButton = document.createElement('button');
messageButton.className = 'button';
messageButton.textContent = 'Message';
contactInputDiv.appendChild(messageButton);

// Add the Contact-input div to the main section
contactSection.appendChild(contactInputDiv);

// Append the entire Contact section to the body (or another container)
document.body.appendChild(contactSection);

//End of contact section

// Footer Section
const footer = document.createElement('footer');
footer.className = 'social-icons';

const socialLinks = [
  { href: '#', iconClass: 'fa-brands fa-linkedin' },
  { href: '#', iconClass: 'fa-brands fa-github' },
  { href: '#', iconClass: 'fa-brands fa-x-twitter' },
  { href: '#', iconClass: 'fa-brands fa-instagram' },
];

socialLinks.forEach(linkData => {
  const anchor = document.createElement('a');
  anchor.href = linkData.href;

  const icon = document.createElement('i');
  icon.className = linkData.iconClass;

  anchor.appendChild(icon);

  footer.appendChild(anchor); 
});

document.body.appendChild(footer);
// End of Footer Section