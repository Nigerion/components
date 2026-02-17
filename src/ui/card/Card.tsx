"use client";
import styles from "./Card.module.scss";

interface ICard {
    variant?: Variant;
    size?: Size;
    children: React.ReactNode;
    prefixCls?: string;
    className?: string;
}

type Variant = "" | "" | "";
type Size = "small" | string;

export const Card = ({ className, children, variant, prefixCls = "nui-card", size }: ICard) => {
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
