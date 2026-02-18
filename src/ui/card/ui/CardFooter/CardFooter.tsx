"use client";
import styles from "./CardFooter.module.scss";

export interface ICardFooter {
  children: React.ReactNode;
  className?: string;
  prefixCls?: string;
}

export const CardFooter = ({
  children,
  className,
  prefixCls = "nui-cardfooter",
}: ICardFooter) => {
  const footerClass = [styles[prefixCls], className]
    .filter(Boolean)
    .join(" ")
    .trim();
  return <div className={footerClass}>{children}</div>;
};
