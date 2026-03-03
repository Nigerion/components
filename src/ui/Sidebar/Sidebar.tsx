"use client";

import { MouseEvent, ReactNode, useEffect, useRef, useState } from "react";

import { useRouter } from "next/navigation";

import { Puzzle, ToolCase } from "lucide-react";

import classes from "./Sidebar.module.scss";

export interface IMenu {
  title: string;
  icon: ReactNode;
  section: MenuSection;
  children?: ISubMenu[];
  path?: string;
}

type MenuSection = "main" | "components";

type OpenSubSidebarState = {
  [key in MenuSection]?: boolean;
};
export interface ISubMenu {
  title: string;
  section: string;
  path: string;
}

const menu: IMenu[] = [
  {
    title: "Главная",
    icon: <ToolCase />,
    section: "main",
    path: "main",
  },
  {
    title: "Компоненты",
    icon: <Puzzle />,
    section: "components",
    children: [
      { title: "Button", path: "buttonPage", section: "button" },
      { title: "Input", path: "inputPage", section: "input" },
      { title: "Table", path: "tablePage", section: "table" },
      { title: "Card", path: "cardPage", section: "card" },
      { title: "Select", path: "selectPage", section: "select" },
      { title: "Tab", path: "tabsPage", section: "tab" },
    ],
  },
];

export const Sidebar = () => {
  const router = useRouter();
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [openSubSidebar, setOpenSubSidebar] = useState<OpenSubSidebarState>({});
  const [activeSidebar, setActiveSidebar] = useState<string>("");
  const [activeSubSidebar, setActiveSubSidebar] = useState<string>("");

  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleSidebar = (
    e: MouseEvent<HTMLDivElement>,
    section: MenuSection,
    path?: string
  ) => {
    e.stopPropagation();
    if (!openSidebar) {
      setOpenSidebar(true);
    }
    if (openSidebar) {
      router.push(path || "#");
      setOpenSubSidebar((prev) => ({ ...prev, [section]: !prev[section] }));
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpenSidebar(false);
        setOpenSubSidebar({});
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`${classes.wrapper} ${openSidebar && classes.wrapperOpen}`}
      ref={wrapperRef}
    >
      <div className={classes.logo}>NUI</div>

      <div className={classes.menuWrapper}>
        {menu.map(({ icon, title, children, section, path }, index) => {
          return (
            <div key={index} className={`${classes.menuWrapper}`}>
              <div
                className={`${classes.menuSection} ${section === activeSidebar && classes.menuSectionActive}`}
                onClick={(e: MouseEvent<HTMLDivElement>) => {
                  handleSidebar(e, section, path);
                  setActiveSidebar(section);
                  // router.push(path || "#");
                }}
              >
                <span>{icon}</span>
                {openSidebar && <span>{title}</span>}
              </div>
              {openSubSidebar[section] && children && (
                <>
                  {children?.map(({ title, path, section }, index) => (
                    <div
                      className={`${classes.menuSubSection} ${section === activeSubSidebar && classes.menuSubSectionActive}`}
                      key={index}
                      onClick={() => {
                        setActiveSubSidebar(section);
                        router.push(path);
                      }}
                    >
                      {title}
                    </div>
                  ))}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
