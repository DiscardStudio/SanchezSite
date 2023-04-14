import { React } from 'react';
function About(props) {

        return (
                <>
                        <h1>Michael Sanchez</h1>
                        <h2>Software Engineer</h2>
                        <hr/>
                        <p>
                                I am a New Graduate from Stevens Institute of Technology. I fulfill Independent Contracts for small businesses<br/>
                                alongside working as a Tutor for my Cohort, Stevens Technical Enrichment Program (STEP).
                        </p>
                </>
        );
}

function ExperiencePoint(props) {
        return (
                <>
                <hr/>
                <div className="experience">
                        <h3 className="exp">{props.company}</h3>
                        <h6 className="range" id={props.id === "school"?"school":""}>{props.range}</h6>
                        <h4 className="title">{props.title}</h4>
                        <ul className="points" id={props.id === "school"?"school":""}>
                                {props.points.map(point => (
                                        <li key={[point]} className="point" id={props.id === "school"?"school":""}>{point}</li>
                                ))}
                        </ul>
                </div>
                </>
        );
}

function WorkExperience(props) {
        const exp = [{
                company: "Stevens Institute of Technology",
                title: "Peer Tutor",
                range: "September 2020 - May 2023" ,
                points: [
                        "Tutored students to debug their own code by teaching programming practices and convention",
                        "Taught complex concepts in a 1-on-1 and Group setting in classes such as Principles of Programming Languages, Systems Programming, Operating Systems, Algorithms, Data Structures, and Intro to Computer Science"
                ]
        }];

        return (
                <div>
                        {exp.map(job => <ExperiencePoint key={job.company+job.title} company={job.company} title={job.title} points={job.points} range={job.range} />)}
                </div>
        );
}

function ProjectExperience(props) {
        const exp = [
                {
                        company: "Protection and Restoration of the Environment Comittee",
                        title: "Project Manager, Full Stack Developer",
                        range: "September 2022 - May 2023",
                        points: [
                                "Worked as Project Manager among group of six Computer Scientists",
                                "Redesigned User Interface to include a Search Engine",
                                "Helped Expand Search Engine to feature Searches among a larger PostgreSQL Table using a NodeJS Backend and ReactJS Frontend"
                                
                                
                        ]
                },{
                        company: "NSBE Capture the Flag Hackathon",
                        title: "Project Manager",
                        range: "February 2023 - April 2023",
                        points: [
                                "Wrote ReactJS Frontend, Node.JS Backend, with PostgreSQL Database",
                                "Created Logic and Code problems to be solved by NSBE General Body",
                                "Launched site on heroku on this primary domain"
                                
                        ]
                },{
                        company: "Play! Hoboken",
                        title: "Independent Contractor",
                        range: "July 2022 - August 2022",
                        points: [
                                "Designed Code for User Authentication and User Event Coordination",
                                "Connected and Notified Users when another Player was at the Play! Hoboken store",
                                "Accessed Backend via REST API calls from a React Native Frontend to a NodeJS Backend"
                        ]
                }
        ];

        return (
                <div>
                        {exp.map(job => <ExperiencePoint company={job.company} title={job.title} points={job.points} range={job.range} />)}
                </div>
        );
}

function Experience(props) {
        return (
                <>
                        <h1>Michael Sanchez</h1>
                        <h2>Software Engineer</h2>
                        <hr/>
                        <br/>
                        <div className="exper">
                                <h2>Titles</h2>
                                <WorkExperience/>
                                <br/>
                                <h2>Projects</h2>
                                <ProjectExperience/>
                        </div>
                </>
        );
}

function Education(props) {

        return (
                <>
                        <h1>Michael Sanchez</h1>
                        <h2>Software Engineer</h2>
                        <ExperiencePoint 
                                id="school"
                                company="Stevens Institute of Technology"
                                range="September 2019 - May 2023"
                                title="Bachelors of Science in Computer Science"
                                points={[
                                        "GPA | 3.0",
                                        "Coursework:",
                                        "CS 516: Compiler Design and Implementation",
                                        "CS 517: Quantum Information and Quantum Computing",
                                        "CS 511: Concurrent Programming, Systems Programming",
                                        "CS 492: Operating Systems",
                                        "CS 334: Theory of Computation",
                                        "CS 442: Database Management Systems",
                                        "CS 496: Principles of Programming Languages"
                                ]}
                        />
                </>
        );
}

function Skills(props) {
        const frameworks = [
                {img:"SanchezPictures/qiskit.png",link:"https://qiskit.org/"},
                {img:"SanchezPictures/github.png",link:"https://nodejs.org/"},
                {img:"SanchezPictures/nodejs.png",link:"https://react.dev/"},
                {img:"SanchezPictures/selenium.png",link:"https://github.com/"},
        ];
        const languages = [
                
        ];
        return (
                <>
                        <h1>Skills</h1>
                        <hr/>
                        {frameworks.map(img => <a href={img.link}  target='_blank' rel="noreferrer"><img key={img.link} src={img.img} alt={img.link} className="skillimg"/></a>)}
                </>
        );
}

export { About, Experience, Education, Skills };