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
  username: "Shohrux Abdurasulov",
  title: "Hi all, I'm Shohrux",
  subTitle: emoji(
    // "A passionate Backend Software Developer 🚀 with experience in building scalable and efficient web applications using Python, FastAPI, Django, Flask, PostgreSQL, MySQL, and containerization tools like Docker. Currently learning C# and .NET to expand my backend expertise."
    "2+ years of hands-on experience building and deploying scalable Python backend platforms (FastAPI, Flask, Django) on Linux servers. Proven expertise in containerization (Docker), CI/CD (GitHub Actions), infrastructure-as-code, and currently mastering Kubernetes. Seeking to transition fully into DevOps while continuing to deliver reliable, high-availability systems."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1XsFMIcjLER3mnjMVHlhY1AClkkOvNvbah2xA042gYuw/edit?pli=1&tab=t.0", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/MrShokh4346",
  linkedin: "https://www.linkedin.com/in/shokhrux-abdurasulov-016411391",
  gmail: "shokhruxabdurasulov0@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/share/p/1EDf7Fmztd/",
  telegram: "https://t.me/Mr_Shokh_1555",
  instagram: "https://www.instagram.com/shohruxabdurasulov0",

  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DevOps Engineer transitioning from Python Backend Development",
  skills: [
    emoji(
      "⚡ Develop highly interactive and responsive application interfaces for web and mobile applications"
    ),
    emoji(
      "⚡ Build Progressive Web Applications (PWAs) using both traditional and Single Page Application (SPA) stacks"
    ),
    emoji(
      "⚡ Integrate third-party services such as AWS, Hetzner and DigitalOcean"
    ),
    emoji(
      "⚡ Design and deploy  production-grade microservices using Docker + Docker Compose; reduced deployment time from 2 hours to <10 minutes via GitHub Actions pipelines"
    ),
    emoji(
      "⚡ Manage full lifecycle: from requirements → code → CI/CD → production"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // ---- Existing (now with color) ----
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
      style: {color: "#00758f"} // Dark blue
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
      style: {color: "#3776AB"} // Official Python blue
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
      style: {color: "#2496ED"} // Docker blue
    },

    // ---- DevOps (Iconify) ----
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt",
      style: {color: "#F05032"} // Git red-orange
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github",
      style: {color: "#181717"} // GitHub black
    },
    {
      skillName: "Kubernetes",
      iconifyClass: "simple-icons:kubernetes",
      style: {color: "#326CE5"}
    }
    // {
    //   skillName: "Jenkins",
    //   iconifyClass: "simple-icons:jenkins",
    //   style: { color: "#D24939" }
    // },
    // {
    //   skillName: "Terraform",
    //   iconifyClass: "simple-icons:terraform",
    //   style: { color: "#7B42BC" }
    // },
    // {
    //   skillName: "Ansible",
    //   iconifyClass: "simple-icons:ansible",
    //   style: { color: "#EE0000" }
    // },
    // {
    //   skillName: "Prometheus",
    //   iconifyClass: "simple-icons:prometheus",
    //   style: { color: "#E6522C" }
    // },
    // {
    //   skillName: "Grafana",
    //   iconifyClass: "simple-icons:grafana",
    //   style: { color: "#F46800" }
    // },
    // {
    //   skillName: "Azure",
    //   iconifyClass: "simple-icons:microsoftazure",
    //   style: { color: "#0078D4" }
    // },
    // {
    //   skillName: "Google Cloud",
    //   iconifyClass: "simple-icons:googlecloud",
    //   style: { color: "#4285F4" }
    // },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName:
        "Tashkent University of Information Technologies, Samarkand Branch",
      logo: require("./assets/images/tatu.jpg"),
      subHeader: "Master of Science in Information security",
      duration: "September 2025 - May 2027 (in progress)"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Tashkent University of Information Technologies",
      logo: require("./assets/images/tatu.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2021 - May 2025"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Deploying", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backen developer",
      company: "Kodey",
      companylogo: require("./assets/images/kodey.jpg"),
      date: "June 2025 – Present",
      // desc: "• Designed and deployed  production-grade FastAPI microservices using Docker + Docker Compose; reduced deployment time from 2 hours to <10 minutes via GitHub Actions pipelines.  \
      //         • Automated database migrations and rollback scripts with Alembic and Bash, eliminating manual errors.  \
      //         • Currently leading migration of flagship service to Kubernetes (EKS/GKE); authored Helm charts and CI/CD workflows.",
      descBullets: [
        "Designed and deployed  production-grade FastAPI microservices using Docker + Docker Compose; reduced deployment time from 2 hours to <10 minutes via GitHub Actions pipelines.",
        "Automated database migrations and rollback scripts with Alembic and Bash, eliminating manual errors.",
        "Currently leading migration of flagship service to Kubernetes (EKS/GKE); authored Helm charts and CI/CD workflows."
      ]
    },
    {
      role: "Backend developer",
      company: "IT Club",
      companylogo: require("./assets/images/itclub.jpg"),
      date: "June 2023 – December 2024",
      desc: "Developed and maintained RESTful APIs using FastAPI and PostgreSQL for an ERP platform to help directors and product managers efficiently manage resources and generate reports in flexible Excel formats.\
      Built an e-commerce platform with backend services that support product management, order tracking, Stripe payment integration, and an admin dashboard.",
      descBullets: [
        "Achieved 80% growth for backend development using technical skills.",
        "Developed a number of projects."
      ]
    }
    // {
    //   role: "Front-End Developer",
    //   company: "Quora",
    //   companylogo: require("./assets/images/quoraLogo.png"),
    //   date: "May 2017 – May 2018",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/eastquest.png"),
      projectName: "EastQuest",
      projectDesc:
        "EastQuest is an innovative tourism application that\
       transforms historical exploration into an engaging, gamified\
        adventure. Designed for cultural enthusiasts and adventure-seeking\
         tourists, the app seamlessly blends real-world historical discovery\
          with interactive quest-based gameplay",

      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/MrShokh4346/EastQuestBackend"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/heartly.jpeg"),
      projectName: "Heartly",
      projectDesc:
        "An ERP system is a type of software used by \
      organizations to manage and integrate core business processes—such\
       as  procurement and product management—into a single unified system.\
        It helps improve efficiency, data accuracy, and decision-making by\
         providing a centralized view of business operations.",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/MrShokh4346/pharmacy"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/alfastroy.png"),
      projectName: "Alfa Stroy",
      projectDesc:
        "Alfastroy ERP System Construction Materials Management Designed and developed a custom ERP platform for Alfastroy, a factory producing aluminum composite panels. This system streamlined resource management for directors and product managers, enabling real-time tracking of production, employee performance, and inventory.",
      footerLink: [
        {
          name: "Visit GitHub",
          url: "https://github.com/MrShokh4346/Alyukabond"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  bio: "something",
  number: "+998 99 775 43 46",
  email_address: "shokhruxabdurasulov0@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
