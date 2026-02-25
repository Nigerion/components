"use client";

import { MouseEvent, ReactNode, useState } from "react";

import { redirect } from "next/navigation";

import { Puzzle, ToolCase } from "lucide-react";

import { Sidebar } from "@/ui/Sidebar/Sidebar";

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
      { title: "Button", path: "/" },
      { title: "Input", path: "/" },
      { title: "Table", path: "/" },
      { title: "Card", path: "/" },
      { title: "Select", path: "/" },
      { title: "Tab", path: "/" },
    ],
  },
];

export default function Main() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar></Sidebar>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
