"use client";
import React, { CSSProperties } from "react";

import styles from "./Button.module.scss";

export interface IButton {
  children?: React.ReactNode; // через данный пропсы будет прокидываться текс и тд кнопки
  onClick?: (
    data: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void; // обработчик клика
  htmlType?: HtmlType; // "submit" | "reset" | "button";
  shape?: Shape; // предпологается , что у кнопки будет несколько вариаций 'default' | 'circle' | 'round'
  color?: Color; // пропс цвета нопки 'inherit'| 'primary'| 'secondary'| 'success'| 'error'| 'info'| 'warning'| string
  size?: Size; // пропс размера кнопки "small" | "medium" | "large"
  variant?: Variant; // outlined | dashed | solid | filled | text | link

  icon?: React.ReactNode; // иконка которая прокидывается в кнопку
  positionIcon?: PositionIcon; // "start" | "end";
  disabled?: boolean;
  href?: string; // ссылка
  target?: string;
  prefixCls?: string;

  className?: string; // класс который можно будет прокидывать в кнопку
  style?: CSSProperties;
  loading?: boolean;
}

type HtmlType = "submit" | "reset" | "button";
type PositionIcon = "start" | "end";
type Size = "small" | "medium" | "large";
type Color =
  | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning";
type Shape = "default" | "circle" | "round";
type Variant = "outlined" | "dashed" | "solid" | "text" | "link";

export const Button = ({
  style,
  positionIcon = "start",
  icon,
  children,
  onClick,
  disabled = false,
  htmlType = "button",
  shape = "default",
  color = "primary",
  size = "small",
  variant = "solid",
  href,
  className,
  target,
  prefixCls = "nui",
  loading = false,
}: IButton) => {
  const isLink = href !== undefined;
  const isDisabled = disabled || loading;

  const classes = [
    styles[`${prefixCls}-btn`],
    shape !== "default" && styles[`${prefixCls}-btn--${shape}`],
    size && styles[`${prefixCls}-btn--${size}`],
    variant && styles[`${prefixCls}-btn--${variant}`],
    color && styles[`${prefixCls}-btn--${color}`],
    isDisabled && styles[`${prefixCls}-btn--disabled`],
    loading && styles[`${prefixCls}-btn--loading`],
    className,
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    if (isDisabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  const content = (
    <>
      {loading && <span className={styles[`${prefixCls}__loading-spinner`]} />}
      {!loading && positionIcon === "start" && icon}
      {children && (
        <span className={styles[`${prefixCls}__content`]}>{children}</span>
      )}
      {!loading && positionIcon === "end" && icon}
    </>
  );

  if (isLink) {
    return (
      <a
        href={isDisabled ? undefined : href}
        target={target}
        className={classes}
        onClick={handleClick}
        style={style}
        aria-disabled={isDisabled}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      onClick={handleClick}
      disabled={isDisabled}
      type={htmlType}
      style={style}
    >
      {content}
    </button>
  );
};
