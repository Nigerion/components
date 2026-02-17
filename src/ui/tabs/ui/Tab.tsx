import styles from "./Tab.module.scss";

export interface ITab {
    title: string;
}

export const Tab = ({ title }: ITab) => {
    return <div className={styles.tab}>{title}</div>;
};
