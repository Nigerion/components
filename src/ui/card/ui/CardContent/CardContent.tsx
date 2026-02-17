"use client";
import styles from "./CardContent.module.scss";

export interface ICardContent {
    children: React.ReactNode;
    className?: string;
    prefixCls?: string;
}

export const CardContent = ({
    children,
    prefixCls = "nui-cardcontent",
    className,
}: ICardContent) => {
    const contentClass = [styles[prefixCls], className].filter(Boolean).join(" ").trim();
    return <div className={contentClass}>{children}</div>;
};
