/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Adam Chhor",
  title: "Hello! I'm Adam",
  subTitle: emoji(
    `Solving problems and making clients happy is what drives me. With a strong technical background in full-stack development (React, TypeScript, Vue, Django, and Python) as well as IT systems, and infrastructure, I bring a well-rounded skill set that bridges both worlds. I bring a solutions-oriented mindset that drives results. When I join a team, problems disappear and clients walk away happy.`
  ),
  resumeLink:
    "https://drive.google.com/file/d/1K_So4f9TYrKRXPOz5cIgydXwsvPMobKR/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/adamseth2",
  linkedin: "https://www.linkedin.com/in/adam-chhor/",
  gmail: "chhoradam@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Driven by curiosity and a love for building, I pick up new tools fast and I'm always adding to what I know:",
  skills: [
    // emoji(
    //   "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    // ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Vue",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: ""
    },
    {
      skillName: "Typescript",
      fontAwesomeClassname: "fab fa-typescript"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-cplusplus"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "fab fa-sass"
    },

    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Washington",
      logo: require("./assets/images/uw-logo-white.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "March 2025",
      desc: "Awards: Recognized among the Top 100 impactful students 2025 (Husky 100) Dean's list",
      descBullets: [
        "Relevant coursework: Data Structures and Algorithms, Database Systems, Technical Writing, Hardware and Operating System, Usability and User-Centered Design",
        "Scholarships: Center for Biotechnology Innovation and Training - Summer Undergraduate Research, UW Bothell Study Abroad Ambassador",
        "Clubs: TrickFire Robotics, ACM"
      ]
    }
    //   {
    //     schoolName: "Stanford University",
    //     logo: require("./assets/images/stanfordLogo.png"),
    //     subHeader: "Bachelor of Science in Computer Science",
    //     duration: "September 2013 - April 2017",
    //     desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //     descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    //   }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "IT Specialist",
      company: "Per Scholas",
      companylogo: require("./assets/images/per-scholas-logo-30-white.png"),
      date: "March 2026 – Present",
      desc: "Lead a team of four to plan and deploy networked computer systems for mid-scale environments, handling everything from hardware setup to operating system configuration. Building out local network infrastructure end-to-end, running cable, assigning IP addresses, and ensuring stable LAN connectivity across 6 to 20 machines."
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },

    {
      role: "USA Youth Ambassador",
      company: "U.S. Department of State",
      companylogo: require("./assets/images/department-of-state-logo.webp"),
      date: "March 2025 – August 2025",
      desc: "Chosen to represent Washington State and the U.S. as a Youth Ambassador at World Expo 2025 in Osaka, Japan, one of the most largest international events in the world. Guided thousands of international visitors, delegations, and business leaders through the USA Pavilion, playing a direct role in promoting U.S. diplomacy on a global stage. On the technical side, embedded with the IT team to explore how large-scale events are run behind the scenes, gaining exposure to database management, workflow automation, and digital operations."
    },
    {
      role: "Full Stack Developer",
      company: "University of Washington",
      companylogo: require("./assets/images/uw-logo-white.png"),
      date: "March 2024 – March 2025",
      desc: "Led a small team to build a machine learning tool to automatically identify cells undergoing mitosis to better understand DNA mutation for a group of biologists at the University of Utah using Django and Python. Developed a first-of-its-kind automated DNA alignment process that improved researcher workflow by 80%."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Technical Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/beach-cleanup.png"),
      projectName: "Beach Cleanup",
      projectDesc: `
      Nonprofit platform to organize and manage beach cleanup events.
      \nBuilt with React, TypeScript, and Node.js and CRUD REST API hosted on an AWS EC2 instance, integrated with Google Maps Platform to help users find cleanup events near them. I also handled user authentication and event data management throughout the full stack.
      `,
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/adamseth2/beach-party"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/mission-control-project.png"),
      projectName: "Mission Control System",
      projectDesc:
        "Led a team of 6+ to design and build a NASA-inspired mission control system for the University Rover Challenge, handling real-time communication with the rover and enabling remote command execution. To give the driver more intuitive control, I also engineered a digital twin of the rover's arm that mirrored its movements in real time. The system was built using Vue and TypeScript.",
      footerLink: [
        {
          name: "GitHub Repository",
          url: "https://github.com/TrickfireRobotics/mission-control"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle: "",

  achievementsCards: [
    {
      title: "AWS Cloud Practitioner",
      subtitle:
        "Foundational understanding of cloud computing and core Amazon Web Services services for building and managing scalable applications",
      image: require("./assets/images/AWS Cloud Practitioner Certificate.png"),
      imageAlt: "AWS Cloud Practitioner Certificate",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/56e62b6d-ab58-4780-8ffb-99198620386c/public_url"
        }
      ]
    },
    {
      title: "CompTIA Security+",
      subtitle:
        "Foundational cybersecurity skills for securing systems, networks, and data, and understanding core security principles",
      image: require("./assets/images/comptia-security+.png"),
      imageAlt: "CompTIA Security+ Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/23aeefa3-9bfd-4d00-b3c9-5f528160165b/public_urln"
        }
      ]
    },

    {
      title: "CompTIA A+",
      subtitle:
        "Foundational IT skills for troubleshooting hardware, software, and operating systems",
      image: require("./assets/images/comptia-a+.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          //TODO: UPDATE THIS WITH REAL LINK
          url: "https://www.credly.com/badges/23aeefa3-9bfd-4d00-b3c9-5f528160165b/public_url"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "",
  number: "(435) 277-0115",
  email_address: "chhoradam@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
