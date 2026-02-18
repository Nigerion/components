"use client";
import styles from "./CardHeader.module.scss";

export interface ICardHeader {
  avatar?: React.ReactNode;
  title?: string;
  subheader?: string;
  action?: React.ReactNode;
  className?: string;
  prefixCls?: string;
}

export const CardHeader = ({
  title,
  avatar,
  subheader,
  action,
  prefixCls = "nui-cardheader",
  className,
}: ICardHeader) => {
  const headerClass = [styles[prefixCls], className]
    .filter(Boolean)
    .join(" ")
    .trim();
  return (
    <div className={headerClass}>
      {avatar && <div>{avatar}</div>}
      <div>
        {title && <div>{title}</div>}
        {subheader && <div>{subheader}</div>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
};
