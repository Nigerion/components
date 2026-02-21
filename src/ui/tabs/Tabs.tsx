"use client";

import { useState } from "react";

import styles from "./Tabs.module.scss";
import { ITabsProps } from "./types";

export const Tabs = ({
  tabs,
  prefixCls = "nui",
  activeTab,
  size = "large",
  onChange,
  variant = "rounded",
  fullWidth = false,
}: ITabsProps) => {
  const [active, setActive] = useState(activeTab || tabs[0].value);

  const wrapperTabsClasses = [styles[`${prefixCls}-wrapper`]]
    .filter(Boolean)
    .join(" ")
    .trim();
  const tabsClasses = [
    styles[`${prefixCls}-tabs`],
    styles[`${prefixCls}-tabs--${size}`],
    styles[`${prefixCls}-tabs--${variant}`],

    fullWidth && styles[`${prefixCls}-tabs--full-width`],
  ]
    .filter(Boolean)
    .join(" ")
    .trim();

  const constentClasses = [styles[`${prefixCls}-content`]]
    .filter(Boolean)
    .join(" ")
    .trim();

  const activeTabData = tabs.find((tab) => tab.value === active) || tabs[0];

  return (
    <div className={wrapperTabsClasses}>
      <div className={tabsClasses}>
        {tabs.map((tab) => {
          const tabClasses = [
            styles[`${prefixCls}-tab`],
            active === tab.value && styles[`${prefixCls}-tab--active`],
            styles[`${prefixCls}-tab--${variant}`],
            styles[`${prefixCls}-tab--${size}`],
            fullWidth && styles[`${prefixCls}-tab--full-width`],
          ]
            .filter(Boolean)
            .join(" ")
            .trim();

          return (
            <div
              className={tabClasses}
              key={tab.value}
              onClick={() => {
                setActive(tab.value);
                onChange?.(tab.value);
              }}
            >
              {tab.icon && (
                <span className={styles[`${prefixCls}-tab-icon`]}>
                  {tab.icon}
                </span>
              )}
              <span className={styles[`${prefixCls}-tab-label`]}>
                {tab.label}
              </span>
            </div>
          );
        })}
      </div>
      <div className={constentClasses}>{activeTabData.content}</div>
    </div>
  );
};
