import { useRef } from "react";
import useScrollAndAnimateTabs from "../hooks/useScrollAndAnimateTabs";

const Home = () => {
    const scrollTab = useRef<HTMLElement | null>(null);
    useScrollAndAnimateTabs({ refTab: scrollTab });
    return (
        <section className="home" ref={scrollTab}>
            <div className="content">
                <div className="name">
                    HI! I AM <span>JAEL</span>
                </div>
                <div className="description">
                    I am Jay Marvin Quiambao and you can call me Jael,
                    a passionate and dedicated software Developer with 8 years of experience in Full Stack Development.
                </div>
                <a href="/my-portfolio/mycv.docx" target="_blank" rel="noopener noreferrer">
                    Download My CV
                </a>
            </div>
            <div className="avatar">
                <div className="card">
                    <img src="/my-portfolio/JandS1.jpg" alt="" />
                    <div className="info">
                        <div>JAY MARVIN QUIAMBAO</div>
                        <div>Software Developer</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
