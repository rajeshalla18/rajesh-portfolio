document.addEventListener("DOMContentLoaded", function () {
  // Skills Data
  const skills = ["Java", "JavaScript", "React", "Node.js", "AWS", "Docker"];
  const skillsContainer = document.getElementById("skills");
  skills.forEach((skill) => {
    const skillElement = document.createElement("span");
    skillElement.className = "bg-gray-700 p-2 rounded";
    skillElement.textContent = skill;
    skillsContainer.appendChild(skillElement);
  });

  // Projects Data
  const projectsData = [
    {
      title: "Cinema Analytics Dashboard",
      tech: "React, Node.js, MySQL, Linux",
      description:
        "Developed a real-time dashboard to track audience engagement metrics for film screenings.",
    },
    {
      title: "Live Event Streaming Platform",
      tech: "Angular, Firebase, AWS EC2",
      description:
        "Designed a full-stack platform for live-streaming cultural events.",
    },
  ];

  const projectsContainer = document.getElementById("projects");
  projectsData.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.className = "mt-4";
    projectElement.innerHTML = `
            <p class='font-bold text-xl'>${project.title}</p>
            <p class='text-gray-400'>Tech: ${project.tech}</p>
            <p class='mt-2 text-gray-300'>${project.description}</p>
        `;
    projectsContainer.appendChild(projectElement);
  });

  // Education Data
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Arizona State University",
      year: "2016-2020",
    },
    {
      degree: "Master of Science in Data Science",
      institution: "University of California, Berkeley",
      year: "2021-2023",
    },
  ];

  const educationContainer = document.getElementById("education");
  educationData.forEach((edu) => {
    const eduElement = document.createElement("div");
    eduElement.className = "mt-4";
    eduElement.innerHTML = `
            <p class='font-bold text-xl'>${edu.degree}</p>
            <p class='text-gray-400'>${edu.institution} | ${edu.year}</p>
        `;
    educationContainer.appendChild(eduElement);
  });

  // Work Experience Data
  const workExperienceData = [
    {
      role: "Software Engineer",
      company: "Trend Micro",
      duration: "Sep 2021 - Aug 2022",
      description:
        "Worked on software development, automation, and maintenance of various security platforms.",
    },
    {
      role: "Full Stack Developer",
      company: "Woo Joo Universe",
      duration: "Dec 2023 - Aug 2024",
      description:
        "Developed both front-end and back-end solutions for a local community engagement platform.",
    },
  ];

  const workExperienceContainer = document.getElementById("work-experience");
  workExperienceData.forEach((work) => {
    const workElement = document.createElement("div");
    workElement.className = "mt-4";
    workElement.innerHTML = `
            <p class='font-bold text-xl'>${work.role} - ${work.company}</p>
            <p class='text-gray-400'>${work.duration}</p>
            <p class='mt-2 text-gray-300'>${work.description}</p>
        `;
    workExperienceContainer.appendChild(workElement);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Skills Section
  const skills = ["Java", "JavaScript", "React", "Node.js", "AWS", "Docker"];
  const skillsContainer = document.getElementById("skills");
  skills.forEach((skill) => {
    const skillElement = document.createElement("span");
    skillElement.className = "bg-gray-700 p-2 rounded";
    skillElement.textContent = skill;
    skillsContainer.appendChild(skillElement);
  });

  // Projects Section
  const projectsData = [
    {
      title: "Cinema Analytics Dashboard",
      tech: "React, Node.js, MySQL, Linux",
      description:
        "Developed a real-time dashboard to track audience engagement metrics for film screenings.",
    },
    {
      title: "Live Event Streaming Platform",
      tech: "Angular, Firebase, AWS EC2",
      description:
        "Designed a full-stack platform for live-streaming cultural events.",
    },
  ];
  const projectsContainer = document.getElementById("projects");
  projectsData.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.className = "mt-4";
    projectElement.innerHTML = `<p class='font-bold'>${project.title}</p><p class='text-gray-400'>Tech: ${project.tech}</p><p class='mt-2 text-gray-300'>${project.description}</p>`;
    projectsContainer.appendChild(projectElement);
  });

  // About Me Section (added dynamically if you want more flexibility)
  const aboutMeContent = `I'm Rajesh Alla, a Full-Stack Developer passionate about building scalable and efficient web applications. I am always eager to learn and explore new technologies to provide impactful solutions.`;
  const aboutMeContainer = document.getElementById("about-me");
  aboutMeContainer.textContent = aboutMeContent;

  // Contact Section (added dynamically if you want more flexibility)
  const contactInfo = [
    {
      label: "Email",
      value: "rajeshsdeveloper7@gmail.com",
      link: "mailto:rajeshsdeveloper7@gmail.com",
    },
    { label: "Phone", value: "+1 (623) 201-9138", link: "tel:+16232019138" },
  ];
  const contactContainer = document.getElementById("contact-info");
  contactInfo.forEach((contact) => {
    const contactElement = document.createElement("p");
    contactElement.className = "text-lg text-gray-200";
    contactElement.innerHTML = `${contact.label}: <a href="${contact.link}" class="hover:text-yellow-300">${contact.value}</a>`;
    contactContainer.appendChild(contactElement);
  });

  // Social Links Section (added dynamically if you want more flexibility)
  const socialLinks = [
    {
      platform: "GitHub",
      url: "https://github.com/rajeshalla",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1024px-Octicons-mark-github.svg.png",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/rajeshalla1802",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo_2023.svg/1024px-LinkedIn_Logo_2023.svg.png",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/rajesh_alla",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
    },
    {
      platform: "WhatsApp",
      url: "https://wa.me/16232019138",
      iconUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
    },
  ];

  const socialLinksContainer = document.getElementById("social-links");
  socialLinks.forEach((social) => {
    const socialLinkElement = document.createElement("a");
    socialLinkElement.href = social.url;
    socialLinkElement.target = "_blank";
    socialLinkElement.className =
      "bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-700 transition transform hover:scale-110 mx-2";

    const socialIcon = document.createElement("img");
    socialIcon.src = social.iconUrl;
    socialIcon.alt = `${social.platform} logo`;
    socialIcon.className = "w-8 h-8";

    socialLinkElement.appendChild(socialIcon);
    socialLinksContainer.appendChild(socialLinkElement);
  });

  // Scroll to Top Button
  const scrollToTopBtn = document.getElementById("scroll-to-top");
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
