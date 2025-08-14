# Ravneet Kaur - Portfolio Website (Assignment 14)

##  Overview
This is my final portfolio project for **Coding Assignment 14**, built with **React + TypeScript** and styled using my custom component library from previous assignments.  
It highlights:
- My **Basic Information**
- **Work Experience**
- **Skills**
- **Resources** I used throughout the course
- **Developer Setup**

The project is **dockerized** and runs at `http://localhost:5575` in production mode.

---

## 🛠 Tech Stack
- **React 18** with TypeScript
- **Custom Component Library** (Button, Card, HeroImage, Img, Dropdown, RadioButton, Table components, etc.)
- **CSS Styling**
- **Docker** for production containerization
- **Nginx** for serving the production build

---

##  Project Structure
ravneet-portfolio/
├── src/
│ ├── components/ # Reusable UI components
│ ├── App.tsx # Main application file
│ ├── index.tsx # Entry point
│ └── App.css # Styles
├── Dockerfile
├── nginx.conf
├── package.json
├── tsconfig.json
└── README.md

##  Running Locally (Development)
1. Clone the repository:
   ```bash
   git clone https://github.com/Ravneetkaur9/coding_assignment_14
   cd YOUR-REPO-NAME

Install dependencies:

bash
Copy
npm install
Start the development server:

bash
Copy
npm start
Visit:
http://localhost:3000

# Running with Docker (Production)
Build the Docker image:

bash
Copy
docker build -t kaur_ravneet_coding_assignment14 .
Run the container:

bash
Copy
docker run -d --rm -p 5575:80 --name kaur_ravneet_coding_assignment14 kaur_ravneet_coding_assignment14
Visit:
http://localhost:5575

# Features
Basic Information
Name, education, and career goals.

Passion for web development and openness to opportunities.

Work
Real-world experience: Front-End Associate at Rona

Aspiring Full-Stack Web Developer profile.

Skills
Languages: JavaScript, TypeScript, Python, Ruby

Frameworks: React, Rails, Flask

Tools: Docker, GitHub, Storybook, VSCode

Resources
Clickable links to tutorials and guides I used:

Dockerize Your React App

Create and Publish a React Component Library

Pre-commit Hook with Prettier & ESLint using Husky

Build CI/CD Pipeline with GitHub Actions

Build a Portfolio Website with React

Developer Setup
VSCode with JetBrains Mono font

One Dark Pro theme

Integrated terminal using PowerShell

# Deliverables
GitHub Repository: https://github.com/Ravneetkaur9/coding_assignment_14

Dockerized Production Build

Zip File for LEARN Dropbox submission

# Author
Ravneet Kaur
Currently pursuing Full Stack Web Development at Red River College Polytechnic
Passionate about building intuitive and high-performing web applications.


