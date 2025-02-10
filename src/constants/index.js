import project1 from "../assets/projects/fyp.png";
import project2 from "../assets/projects/yt-clone.png";
import project3 from "../assets/projects/data-processing.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React, Vue.js, and Next.js, as well as back-end technologies like Django, Node.js, and Express. I have experience working with diverse databases like MySQL, PostgreSQL, and Firestore. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a passion for creating efficient and user-friendly web applications. I graduated from Queen Mary University of London with a BSc in Computer Science. My technical expertise spans a wide range of technologies, including React, Vue.js, Next.js, Django, TypeScript, Python, Java, and Apache Spark. With a strong foundation in both front-end and back-end development. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. Outside of coding, I enjoy sports such as rock climbing and skateboarding, reading books, listening podcasts and exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Laughter Classification Model",
    image: project1,
    description:
      "Developed an NLP Classification model categorizing laughter tweets. Utilized Twitter developer tools for dataset creation. Conducted experiments comparing precision, recall, and F1 score, achieving a 73% accuracy.",
    technologies: ["Scikit Learn", "Python"],
    githublink:"https://github.com/mursalin-habib/laughter-classification-model",
  },
  {
    title: "YouTube Clone",
    image: project2,
    description:
      " Developed a full-stack web application to upload and watch videos using Next.js, TypeScript and Express. Made use of Pub/Sub Message Queue to notify Cloud Run when files were uploaded to Cloud Storage Bucket. Used Firebase functions and stored videos and user details in Firestore. Used Docker to containerise the app and deployed it to Google Cloud Run.",
    technologies: ["React", "TypeScript", "Next.js", "Express", "Google Cloud Services", "Docker"],
    githublink:"https://github.com/mursalin-habib/youtube-clone",
    link:"https://yt-web-client-1049515487055.us-central1.run.app/",
  },
  {
    title: "Big Data Processing",
    image: project3,
    description:
    "Utilized Apache Spark and Hadoop for data analysis on Ethereum transactions. Performed data cleaning, time analysis, and service/miner analysis using MapReduce jobs.",
    technologies: ["Python", "PySpark", "Google Cloud Storage"],
    githublink:"https://github.com/mursalin-habib/Big-data-processing-coursework",
  },
  {
    title: "Auction App",
    
    description:
      "Developed a full-stack web application using Django backend and Vue.js frontend. Employed Django MVT architecture and Django REST framework for API creation. ",
    technologies: ["HTML", "CSS", "JavaSript","Vue.js", "Django", "mySQL"],
    githublink:"https://github.com/mursalin-habib/web-programming-groupCW-auction-app",
  },
  {
    title: "Portfolio Project",
    
    description:
    "A personal portfolio website using React and Tailwind CSS",
    technologies: ["HTML", "Tailwind CSS", "JavaSript", "React", "Framer-Motion"],
    githublink:"https://github.com/mursalin-habib/portfolio-website",
  },
];

export const EDUCATION = [
  {
    year: "2020 - 2023",
    course: "BSc Computer Science",
    institute: "Queen Mary University of London",
    grade: "Grade: 2.1",
    modules: ["Big Data Processing", "Computability, Complexity and Algorithms", "Distributed Systems", "Digital Media and Social Networks", "Web Programming",  "User Experience Design", "Software Engineering", "Probability and Matrices", "Operating Systems", "Database Systems", "Graphical User Interfaces", "Internet Protocols and Applications", "Algorithms and Data Structures", "Procedural Programming", "Computer Systems and Networks", "Logic and Discrete Structures", "Object-Oriented Programming", "Fundamentals of Web Technology", "Information System Analysis", "Automata and Formal Languages", "Professional and Research Practice"],
  },
];

export const CONTACT = {
  address: " ",
  phoneNo: "+44 07776468672",
  email: "mursalin.habib98@gmail.com",
};
