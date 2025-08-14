import React, { useState } from 'react';
import './App.css';
import {
  HeroImage,
  Text,
  Card,
  Img,
  //Dropdown,
  //RadioButton,
  Button,
  Label,
  TableHeader,
  TableRow,
  TableCell,
//  TableFooter,
} from './components';

function App() {
  const [theme, setTheme] = useState("Light"); 
  return (
   <div className={`App ${theme.toLowerCase()}`}>

      <HeroImage
        src="https://picsum.photos/800/300"
        alt="Hero Banner"
        title="Ravneet Kaur"
        subtitle="Web Developer Portfolio"
      />

      {/* Basic Information */}
      <section>
        <h2>Basic Information</h2>
         <Text content="My name is Ravneet Kaur, and I am currently pursuing a Full Stack Web Development program at Red River College Polytechnic. I have a strong passion for creating dynamic, user-friendly, and visually appealing websites, and I am continuously learning new technologies to expand my skill set." />
         <Text content="I am open to exciting opportunities where I can apply my technical skills, creativity, and problem-solving abilities to real-world projects, while continuing to grow as a professional in the web development field." />
     </section>

      {/* Work Section */}
      <section>
        <h2>Work</h2>
        <Card
          title="Front-End Associate"
          content="Worked at Rona as a Front End Associate, providing customer service, managing transactions, and assisting in store operations"
          footer="Rona+ • Customer Service • Teamwork"
        />
        
   {/* Aspirational Role */}
  <Card
    title="Full Stack Web Developer"
    content="Aspiring to leverage my Full Stack Web Development training to build scalable, user-friendly applications. Experienced in React, Ruby on Rails, Flask, and modern deployment pipelines."
    footer="React • Rails • Flask • Docker"
  />
        <Img
          src="https://picsum.photos/400/200"
          alt="Image"
        />
       <Button
     label="Visit Linkedin"
     onClick={() => window.open("https://www.linkedin.com/in/ravneet-kaur-016311345/")}
/>
      </section>

      {/* Skills */}
      <section>
        <h2>Skills</h2>
        <Label text="Description:" />
        <Text content="Focused on clean UI/UX, scalable architecture, and testing." />
        <Label text="Languages / Frameworks:" />
        <Text content="JavaScript, TypeScript, Ruby, Python, React, Rails, Flask" />
        <Label text="Tools:" />
        <Text content="Docker, GitHub, VSCode, Storybook, Figma" />
      </section>

      {/* Resources */}
      <section>
        <h2>Resources</h2>
        
  <Card
    title="Dockerize Your React App (dev.to)"
    description="Step-by-step tutorial on how to dockerize a React application."
    url="https://dev.to/karanpratapsingh/dockerize-your-react-app-4j2e"
  />

  <Card
    title="Create & Publish a React Component Library (dev.to)"
    description="Guide on how to create and publish your React component library."
    url="https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe"
  />

  <Card
    title="Setup Pre-commit Hook with Prettier & ESLint using Husky (Medium)"
    description="Instructions on git pre-commit hooks using Husky, Prettier, and ESLint."
    url="https://medium.com/@dlyusko/how-to-set-up-a-pre-commit-hook-with-prettier-and-eslint-using-husky-3ca6a9ae7e63"
  />

  <Card
    title="Build CI/CD Pipeline with GitHub Actions"
    description="An overview of setting up CI/CD pipelines using GitHub Actions."
    url="https://github.blog/enterprise-software/ci-cd/build-ci-cd-pipeline-github-actions-four-steps/"
  />

  <Card
    title="Build Portfolio Website with React (freeCodeCamp)"
    description="FreeCodeCamp tutorial on building React portfolio websites."
    url="https://www.freecodecamp.org/news/build-portfolio-website-react/"
  />
</section>
        <Img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
        />


      {/* Demo Table with All Table Components */}
      <section>
        <h2>Work Summary Table</h2>
        <table>
          <thead>
            <tr>
              <TableHeader text="Title" />
              <TableHeader text="Tech" />
              <TableHeader text="Link" />
            </tr>
          </thead>
          <tbody>
              <TableRow>
                <TableCell text="Component Library" />
                <TableCell text="React, TypeScript" />
                <TableCell url="https://github.com/Ravneetkaur9/coding_assignment_14" />
              </TableRow>
              <TableRow>
                <TableCell text="Portfolio Site" />
                <TableCell text="CRA, Docker" />
                <TableCell text="localhost:5575" />
              </TableRow>
            </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
