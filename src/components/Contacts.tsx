import { useState, useRef } from "react";
import useScrollAndAnimateTabs from "../hooks/useScrollAndAnimateTabs";

function Contacts() {
    const [listContacts] = useState([
        {
            title: "Phone Number",
            value: "+639360871446",
        },
        {
            title: "Email",
            value: "jay.marvin.quiambao@gmail.com",
        },
        {
            title: "Linkedin",
            value: "https://www.linkedin.com/in/jay-marvin-quiambao-0470ab180",
        },
    ]);
    const scrollTab = useRef<HTMLElement | null>(null);
    const divList = useRef<HTMLElement[]>([]);
    useScrollAndAnimateTabs({ refTab: scrollTab, refDivList: divList });
    return (
        <section className="contacts" ref={scrollTab}>
            <div className="title" ref={(el) => el && divList.current.push(el)}>
                These are my contacts
            </div>
            <div className="des" ref={(el) => el && divList.current.push(el)}>
                I would love to hear from you! Whether you have a question, a
                project idea, or just want to connect, feel free to reach out.
                Here are the best ways to get in touch with me:
            </div>
            <div className="list" ref={(el) => el && divList.current.push(el)}>
                {listContacts.map((value, key) => (
                    <div className="item" key={key}>
                        <h3>{value.title}</h3>
                        <div>{value.value}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Contacts;
