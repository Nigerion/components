"use client";
import styles from "./Card.module.scss";
import { ICardProps } from "./types";

export const Card = ({
  className,
  children,
  variant,
  prefixCls = "nui-card",
  size,
}: ICardProps) => {
  const cardClass = [
    styles[prefixCls],
    variant && styles[`${prefixCls}--${variant}`],
    size && styles[`${prefixCls}--${size}`],
    className,
  ]
    .filter(Boolean)
    .join(" ")
    .trim();
  return <div className={cardClass}>{children}</div>;
};
