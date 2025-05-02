const portfolioData = {
    hero: {
        id: "hero",
        title: "Welcome to My DevFolio",
        profileImage: "https://avatars.githubusercontent.com/u/72925170?v=4",
        name: "Kerim Senturk",
        position: "Software Engineer | Java Backend Developer"
    },
    about: {
        id: "about",
        title: "About Me",
        description: "Hi, i am Kerim. I am a Backend Java Developer. I have experience and knowledge on Java SE. I generally use Spring Framework to build my projects. I have worked with technologies like Docker, Git, GitHub, GitFlow, Maven, and JavaScript/ReactJS. I enjoy learning and sharing knowledge about new technologies. I write technical articles on Medium and publish my projects with documentation on GitHub. I try to stay updated with the latest tech trends by researching, following official technical platforms, and continuously improving my skills."
    },
    education: {
        id: "education",
        title: "Education",
        items: [{
                degree: "Bachelor's in Computer Engineering",
                institution: "Kastamonu University (Turkiye)",
                period: "2020-Present"
            },
            {
                degree: "Erasmus Mobility in Information Technologies",
                institution: "Katowice Institute of Information Technologies (Poland)",
                period: "2023-2024"
            }
        ]
    },
    experience: {
        id: "experience",
        title: "Experience",
        items: [{
                position: "Java Backend Developer",
                company: "Ozgur Yazilim A.S.",
                period: "April 2024-July 2024",
                technologies: ["java", "spring_boot", "maven", "react"]
            },
            {
                position: "Backend Web Developer",
                company: "INDATA Endüstriyel Veri Teknolojileri A.Ş.",
                period: "February 2025-Present",
                technologies: ["csharp", "aspnet_core"]
            }
        ]
    },
    projects: {
        id: "projects",
        title: "My Projects",
        items: [{
                title: "Image Proccessing Tool",
                image: "https://github.com/kerimsenturk5734/Image-Processing-Tool/raw/master/logo.png",
                description: "This repository contains an Image Process Tool written in Java without using external image processing library like OpenCV.",
                technologies: ["java", "swing", "maven"],
                githubUrl: "https://github.com/kerimsenturk5734/Image-Processing-Tool"
            },
            {
                title: "Lab Report",
                description: "This repository includes a web-based disease and report management application for patients, doctors and laboratory staff",
                technologies: ["java", "spring_boot", "maven", "react", "docker", "typescript", "mysql", "itext"],
                githubUrl: "https://github.com/kerimsenturk5734/lab-report"
            },
            {
                title: "Visual Data Structure",
                description: "This repository contains a web-based app to visualize and teach data structures and algorithms.",
                technologies: ["java", "spring_boot", "maven", "react", "docker", "javascript", "mysql", "d3js"],
                githubUrl: "https://github.com/kerimsenturk5734/visual-data-structure"
            },
            {
                title: "Library Management System",
                image: "https://raw.githubusercontent.com/kerimsenturk5734/Library-Management/main/bin/Debug/books-128.ico",
                description: "This repository contains a library information management system for public or private library services.",
                technologies: ["csharp", "windows_forms", "mssql"],
                githubUrl: "https://github.com/kerimsenturk5734/Library-Management"
            },
            {
                title: "Bookorrow",
                image: "https://raw.githubusercontent.com/kerimsenturk5734/Bookorrow/master/logo.png",
                description: "This repository contains a trading mobile application where we can only buy books in exchange for books.",
                technologies: ["java", "android", "firebase"],
                githubUrl: "https://github.com/kerimsenturk5734/Bookorrow"
            },
            {
                title: "DevFolio",
                description: "A simple, clean portfolio site template for software developers to showcase their personal information, career information, blog content and projects.",
                technologies: ["html", "css", "javascript", "bootstrap"],
                githubUrl: "https://github.com/kerimsenturk5734/dev-folio"
            }
        ]
    },
    blogs: {
        id: "blogs",
        title: "My Blogs",
        rssFeedUrl: "https://medium.com/feed/@kerimsenturk5734"
    },
    contact: {
        id: "contact",
        title: "Contact Me",
        email: "kerimsenturk2002@outlook.com",
        location: "Istanbul, Turkiye",
        social: {
            instagram: "https://www.instagram.com/_kerimsntrk/",
            medium: "https://medium.com/@kerimsenturk5734",
            github: "https://github.com/kerimsenturk5734",
            twitter: "https://x.com/KerSenturk57"
        }
    }
};