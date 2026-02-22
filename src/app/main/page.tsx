"use client";

import { useState } from "react";

import { Puzzle, ToolCase } from "lucide-react";

const menu = [
  { title: "Главная", icon: <ToolCase /> },
  {
    title: "Компоненты",
    icon: <Puzzle />,
    children: [{ title: "asd", href: "" }],
  },
  // { title: "", icon: "", children: [{}] },
  // { title: "", icon: "", children: [{}] },
];
export default function Main() {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const [openSubSidebar, setOpenSubSidebar] = useState<boolean>(false);
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          borderRight: "1px solid red",
          maxWidth: "maxContent",
          height: "100vh",
          padding: "5px",
          borderRadius: "10px",
        }}
      >
        <div style={{ height: "100px" }}>NUI</div>

        <div onClick={() => setOpenSidebar(true)}>
          {menu.map(({ icon, title, children }, index) => {
            return (
              <div key={index}>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    border: "1px solid red",
                    padding: "5px 15px",
                  }}
                >
                  <span>{icon}</span>
                  {openSidebar && <span>{title}</span>}
                </div>
                {openSubSidebar && openSidebar ? (
                  <>
                    {children?.map(({ title }, index) => (
                      <div
                        onClick={() => setOpenSubSidebar(true)}
                        style={{
                          display: "flex",
                          gap: "10px",
                          border: "1px solid red",
                          padding: "5px 15px",
                          marginLeft: "20px",
                        }}
                        key={index}
                      >
                        {title}
                      </div>
                    ))}
                  </>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
