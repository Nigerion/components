import { ReactNode } from "react";
import styles from "./Tabs.module.scss";
export interface ITabs {
    children: ReactNode;
}

export const Tabs = ({ children }: ITabs) => {
    return <div className={styles.tabs}>{children}</div>;
};
