import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faReact,
    faHtml5,
    faCss3,
    faJs,
    faVuejs,
    faAngular,
} from "@fortawesome/free-brands-svg-icons";
import { useRef, useState } from "react";
import useScrollAndAnimateTabs from "../hooks/useScrollAndAnimateTabs";

const Skills = () => {
    const [listSkills] = useState([
        {
            name: "HTML",
            des: "Proficient in creating well-structured, semantic HTML5 documents that ensure accessibility and SEO optimization.",
            icon: faHtml5,
            yearStart: 2015,
        },
        {
            name: "CSS",
            des: "Experienced in crafting responsive and visually appealing designs using CSS3, including Flexbox and Grid layouts.",
            icon: faCss3,
            yearStart: 2015,
        },
        {
            name: "JavaScript",
            des: "Skilled in writing clean, efficient JavaScript code, with a strong understanding of ES6+ features and asynchronous programming.",
            icon: faJs,
            yearStart: 2015,
        },
        {
            name: "ReactJS",
            des: "Expert in building dynamic, high-performance web applications using React, with a focus on component-based architecture and state management.",
            icon: faReact,
            yearStart: 2020,
        },
        {
            name: "Angular",
            des: "Experienced in developing robust, scalable web applications using Angular, with a strong focus on TypeScript, RxJS, and component-based architecture.",
            icon: faAngular,
            yearStart: 2018,
        },
        {
            name: "VueJs",
            des: "Adept at developing interactive user interfaces and single-page applications using Vue.js, with experience in Vuex for state management.",
            icon: faVuejs,
            yearStart: 2023,
        },
        {
            name: "C#",
            des: "Proficient in developing enterprise-level applications using C#, with extensive experience in object-oriented programming, LINQ, and the .NET framework.",
            customSvg: `<svg viewBox="0 0 1343 1471.2"><title>csharp</title><path d="M653.3 1.3C641 3 630.5 5.9 619 10.7c-4.9 2.1-63.7 34.5-130.5 72.1l-182 102.3-153 86-99 56.5c-8.8 6.2-25.4 23-31.6 32.2-10 14.6-17.1 31.5-21.1 50-1.7 8.1-1.8 23-1.8 326l1.8 326c7.4 34.5 27.1 64.7 54.1 83 3.9 2.6 41.5 24.1 83.6 47.7l484 270.1c15.3 6 29.6 8.5 48 8.6 22 0 41.1-4.4 59.4-13.6 4.4-2.2 73.7-40.9 154-86l267.1-150 141-81.3c24.4-18.9 40.6-44.9 47.7-76.6l2.3-10.4V735.8l-1.8-326c-5.9-27.7-19-51.6-38.3-70-13.9-13.2 4.5-2.5-242.4-141.2L939 130.3 801.5 53 725 11.1c-11.5-5-23.1-8.1-36.2-9.8-13.5-1.8-22.3-1.8-35.5 0zm53.8 352c50.9 4.8 96.5 18.3 142 42 37.4 19.4 69.1 43.3 100.3 75.8 8.5 8.8 27.1 30.7 27.1 31.9 0 .8-8.3 5.8-43 25.8l-80.4 46.6-15.9 9.3-10.1-9.6c-17.6-16.6-35.5-29.2-55.2-39.1-41.5-20.7-87.1-28.2-132.4-21.6-24.4 3.5-44 9.7-67.6 21.4-66.1 32.7-110.8 94.5-122 169-2.4 15.9-2.4 46.4 0 62 7.4 48.3 27.6 89.5 61 124.7 26.9 28.4 68.2 52 107.7 61.7 67.3 16.4 138.2.6 192.9-43.1 4.1-3.3 11.6-9.8 16.6-14.6l9.1-8.6 10.4 6.1 80.9 46.8 46.9 27.5c2.1 2-10.8 17.5-33.4 40-33.4 33.4-63.7 55.1-104 74.6-39.6 19-79 30.3-126.5 36.1-14 1.7-65.9 1.7-80.5 0-90.8-10.8-170.1-49.2-232.7-112.8-42.7-43.5-71.3-89.7-90.8-146.9-26.6-78.3-26.7-165.7-.2-244.5C345.5 500.3 434.7 410.7 548 372.1c25.6-8.7 57.8-15.8 83-18.2l14.5-1.4c10.4-1 47.5-.5 61.6.8zm348.4 254.5v32h32 32v-32-32h32 32v32 32h32 32v32 32h-32-32v32 32h32 32v32 32h-32-32v32 32h-32-32v-32-32h-32-32v32 32h-32-32v-32-32h-32-32v-32-32h32 32v-32-32h-32-32v-32-32h32 32v-32-32h32 32v32zm0 128v32h32 32v-32-32h-32-32v32z"></path></svg>`,
            yearStart: 2016,
        },
        {
            name: "Express.js",
            des: "Experienced in building robust and scalable server-side applications using Express.js, with a strong focus on RESTful APIs and middleware.",
            customSvg: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                            <path d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"></path>
                        </svg>`,
            yearStart: 2023,
        },
    ]);

    const scrollTab = useRef<HTMLElement | null>(null);
    const divList = useRef<HTMLElement[]>([]);
    useScrollAndAnimateTabs({ refTab: scrollTab, refDivList: divList });

    const calculateYearsOfExperience = (yearStart: number) => {
        const currentYear = new Date().getFullYear();
        const years = currentYear - yearStart;
        const label = years === 1 ? "year" : "years";
        return { years, label };
    };

    return (
        <section className="skills" ref={scrollTab}>
            <div className="title" ref={(el) => el && divList.current.push(el)}>
                These are my Skills
            </div>
            <div className="des" ref={(el) => el && divList.current.push(el)}>
                As a Full Stack Developer, I have extensive experience in both
                front-end and back-end development. I am proficient in a variety
                of programming languages and frameworks, including JavaScript,
                React, Node.js, and more. My expertise lies in creating
                seamless, user-friendly web applications that are both
                functional and aesthetically pleasing. I am passionate about
                coding, problem-solving, and continuously learning new
                technologies to stay up-to-date with industry trends.
            </div>
            <div className="list" ref={(el) => el && divList.current.push(el)}>
                {listSkills.map((value, key) => {
                    const { years, label } = calculateYearsOfExperience(
                        value.yearStart
                    );
                    return (
                        <div className={"item"} key={key}>
                            {value.customSvg ? (
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: value.customSvg,
                                    }}
                                />
                            ) : (
                                value.icon && (
                                    <FontAwesomeIcon icon={value.icon} />
                                )
                            )}
                            <h3>{value.name}</h3>
                            <div className="des">{value.des}</div>
                            <div className="experience">
                                Experience: {years} {label}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;
