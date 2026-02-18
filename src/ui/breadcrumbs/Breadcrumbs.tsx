"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";

import { ChevronRight, Ellipsis } from "lucide-react";

import styles from "./Breadcrumbs.module.scss";
import { useBreadcrumbs } from "./useBreadcrumbs";

interface BreadcrumbsProps {
  separator?: string | React.ReactElement;
  maxItems?: number;
  className?: string;
  itemAfterCount?: number;
  itemBeforeCount?: number;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  separator = (
    <ChevronRight className={styles.separator} strokeWidth={1.5} size={20} />
  ),
  maxItems = 3,
  className,
  itemAfterCount = 1,
  itemBeforeCount = 1,
}) => {
  const breadcrumbs = useBreadcrumbs();
  const router = useRouter();
  const [showAll, setShowAll] = useState(false);

  const goTo = (path: string) => {
    router.push(path);
  };

  const shouldCollapse = breadcrumbs.length > maxItems && !showAll;

  const renderBreadcrumbItem = (
    crumb: (typeof breadcrumbs)[0],
    index: number,
    isLast: boolean
  ) => (
    <li key={crumb.path} className={styles.breadcrumbItem}>
      {index > 0 && separator}

      {crumb.disabled || isLast ? (
        <button type="button" disabled className={styles.disabled}>
          {crumb.label}
        </button>
      ) : (
        <button
          type="button"
          className={styles.link}
          onClick={() => goTo(crumb.path)}
        >
          {crumb.label}
        </button>
      )}
    </li>
  );

  const renderCollapsedBreadcrumbs = () => {
    const firstItems = breadcrumbs.slice(0, itemBeforeCount);
    const lastItems = breadcrumbs.slice(-itemAfterCount);

    return (
      <>
        {firstItems.map((crumb, index) =>
          renderBreadcrumbItem(crumb, index, false)
        )}

        <li className={styles.breadcrumbItem}>{separator}</li>

        <li className={styles.breadcrumbItem}>
          <button
            type="button"
            className={styles.link}
            onClick={() => setShowAll(true)}
            title="Показать весь путь"
          >
            <Ellipsis size={16} />
          </button>
        </li>

        <li className={styles.breadcrumbItem}>{separator}</li>

        {lastItems.map((crumb, index) =>
          renderBreadcrumbItem(
            crumb,
            firstItems.length + 2 + index, // +2 для разделителя и кнопки "..."
            index === lastItems.length - 1
          )
        )}
      </>
    );
  };

  return (
    <nav
      aria-label="breadcrumb"
      className={`${styles.breadcrumbsContainer} ${className || ""}`}
    >
      <ol className={styles.breadcrumbsList}>
        {shouldCollapse
          ? renderCollapsedBreadcrumbs()
          : breadcrumbs.map((crumb, index) =>
              renderBreadcrumbItem(
                crumb,
                index,
                index === breadcrumbs.length - 1
              )
            )}
      </ol>
    </nav>
  );
};
