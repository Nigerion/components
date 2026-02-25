"use client";

import { MouseEvent, ReactNode, useState } from "react";

import { redirect } from "next/navigation";

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
    path: "",
  },
  {
    title: "Компоненты",
    icon: <Puzzle />,
    section: "components",
    children: [
      { title: "Button", path: "buttonPage", section: "button" },
      { title: "Input", path: "/", section: "input" },
      { title: "Table", path: "/", section: "table" },
      { title: "Card", path: "/", section: "card" },
      { title: "Select", path: "/", section: "select" },
      { title: "Tab", path: "/", section: "tab" },
    ],
  },
];

export const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [openSubSidebar, setOpenSubSidebar] = useState<OpenSubSidebarState>({});
  const [activeSidebar, setActiveSidebar] = useState<string>("");
  const [activeSubSidebar, setActiveSubSidebar] = useState<string>("");

  const handleSidebar = (
    e: MouseEvent<HTMLDivElement>,
    section: MenuSection
  ) => {
    e.stopPropagation();
    if (!openSidebar) {
      setOpenSidebar(true);
      // setActiveSidebar(section);
    }
    if (openSidebar) {
      setOpenSubSidebar((prev) => ({ ...prev, [section]: !prev[section] }));
    }
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.logo}>NUI</div>

      <div className={classes.menuWrapper}>
        {menu.map(({ icon, title, children, section }, index) => {
          return (
            <div key={index} className={`${classes.menuWrapper}`}>
              <div
                className={`${classes.menuSection} ${section === activeSidebar && classes.menuSectionActive}`}
                onClick={(e: MouseEvent<HTMLDivElement>) => {
                  handleSidebar(e, section);
                  setActiveSidebar(section);
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
                        redirect(path);
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
