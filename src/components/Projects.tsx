import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPersonCircleQuestion,
    faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import useScrollAndAnimateTabs from "../hooks/useScrollAndAnimateTabs";
// import CustomHook from './CustomHook';

function Projects() {
    const [listProjects] = useState([
        {
            name: "Electromagnetic Compatibility Projects",
            des: "These projects involve the collection, analysis, and visualization of data to ensure that electronic devices meet regulatory standards for electromagnetic emissions and susceptibility.",
            mission: "Front End and Backend Developer",
            language: "React, Electron, Python, Python GUI",
            images: "/my-portfolio/browser.png",
        },
        {
            name: "Intake Tool",
            des: "The Intake Tool is a user-friendly application designed to streamline the process of collecting and managing feature requests and upgrades for existing projects. This tool empowers users to easily submit their ideas and requirements, ensuring that all feedback is captured and organized efficiently.",
            mission: "Fullstack Developer",
            language: "MERN Stack",
            images: "/my-portfolio/browser.png",
        },
        {
            name: "Inspection Standards Project",
            des: "The Inspection Standards Project is a comprehensive tool designed to ensure quality and compliance by leveraging established international standards. This tool facilitates the systematic inspection and categorization of issues into major, minor, and critical categories, helping organizations maintain high standards of quality and safety.",
            mission: "Fullstack Developer",
            language: "Angular, VueJS, C#, SQL",
            images: "/my-portfolio/browser.png",
        },
        {
            name: "End to End Tool",
            des: "The End to End Tool is a powerful and versatile application designed to integrate multiple APIs into a single, cohesive platform. This project aims to streamline workflows and enhance productivity by providing a unified interface for accessing and managing various services and data sources.",
            mission: "DEV Lead & Fullstack Developer",
            language: "Angular, React, C#, SQL",
            images: "/my-portfolio/browser.png",
        },
    ]);

    const scrollTab = useRef<HTMLElement | null>(null);
    const divList = useRef<HTMLElement[]>([]);
    useScrollAndAnimateTabs({ refTab: scrollTab, refDivList: divList });

    return (
        <section className="projects" ref={scrollTab}>
            <div className="title" ref={(el) => el && divList.current.push(el)}>
                These are my projects
            </div>
            <div className="des" ref={(el) => el && divList.current.push(el)}>
                Welcome to my project portfolio! Here, you'll find a curated
                selection of the work I've done throughout my career. Each
                project showcases my skills in full stack programming,
                highlighting my ability to deliver innovative solutions and
                drive impactful results. While some details are generalized to
                respect confidentiality, these summaries provide insight into my
                expertise and the value I bring to each project. Explore my work
                to see how I turn ideas into reality and contribute to
                successful outcomes.
            </div>
            <div className="list" ref={(el) => el && divList.current.push(el)}>
                {listProjects.map((value, key) => (
                    <div className="item" key={key}>
                        <div className="images">
                            <img src={value.images} alt="" />
                        </div>
                        <div className="content">
                            <h3>{value.name}</h3>
                            <div className="des">{value.des}</div>
                            <div className="mission">
                                <div>
                                    <FontAwesomeIcon
                                        icon={faPersonCircleQuestion}
                                    />
                                </div>
                                <div>
                                    <h4>Mission</h4>
                                    <div className="des">{value.mission}</div>
                                </div>
                            </div>
                            <div className="mission">
                                <div>
                                    <FontAwesomeIcon icon={faEarthAmericas} />
                                </div>
                                <div>
                                    <h4>Languages</h4>
                                    <div className="des">{value.language}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Projects;
