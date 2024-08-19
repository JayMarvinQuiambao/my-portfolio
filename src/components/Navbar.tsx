import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { changeTabActive } from "../redux/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

type NavBarProps = {
    activeTab: string;
};

const Navbar = (props: NavBarProps) => {
    const dispatch = useDispatch();

    const [listNav] = useState(["home", "skills", "projects", "contacts"]);
    const [statusNav, changeStatusNav] = useState<"active" | null>(null);
    const toggleNav = () => {
        changeStatusNav(statusNav === null ? "active" : null);
    };
    const changeTab = (value: string) => {
        dispatch(changeTabActive(value));
        toggleNav();
    };
    return (
        <header>
            <div className="logo">
                <img src="/my-portfolio/jael_icon.png" alt="" />
            </div>
            <nav>
                {listNav.map((value, key) => (
                    <span
                        key={key}
                        className={props.activeTab === value ? "active" : ""}
                        onClick={() => changeTab(value)}
                    >
                        {value}
                    </span>
                ))}
            </nav>
            <div className="icon-bar" onClick={toggleNav}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </header>
    );
};

const mapStateToProps = (state: { activeTab: string }) => ({
    activeTab: state.activeTab,
});

export default connect(mapStateToProps, { changeTabActive })(Navbar);
