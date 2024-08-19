import { useEffect, MutableRefObject } from "react";
import { useSelector } from "react-redux";
import store from "../redux/store";

interface UseScrollAndAnimateTabsProps {
    refTab: MutableRefObject<HTMLElement | null>;
    refDivList?: MutableRefObject<HTMLElement[] | null>;
}

export type RootState = ReturnType<typeof store.getState>;

const useScrollAndAnimateTabs = ({
    refTab,
    refDivList,
}: UseScrollAndAnimateTabsProps): void => {
    const scrollTab = refTab;
    const divList = refDivList;
    const activeTab = useSelector((state: RootState) => state.activeTab);

    useEffect(() => {
        if (
            scrollTab.current &&
            scrollTab.current.classList.contains(activeTab)
        ) {
            const componentNode = scrollTab.current;
            componentNode.scrollIntoView({ behavior: "smooth" });
        }
        if (divList && divList.current) {
            divList.current.forEach((div) => {
                div.classList.add("animation");
            });
            const handleScroll = () => {
                const scrollPosition = window.scrollY;
                divList?.current?.forEach((div) => {
                    const offsetTop =
                        div.getBoundingClientRect().top + scrollPosition;
                    if (
                        scrollPosition >=
                        offsetTop - window.innerHeight / 1.5
                    ) {
                        div.classList.add("active");
                    } else {
                        div.classList.remove("active");
                    }
                });
            };
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, [activeTab, scrollTab, divList]);
};

export default useScrollAndAnimateTabs;
