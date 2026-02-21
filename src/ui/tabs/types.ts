import { ReactNode } from "react";

interface ITab {
  label: string;
  value: string;
  content: ReactNode | string;
  icon?: ReactNode;
}
export interface ITabsProps {
  tabs: ITab[];
  size?: Size;
  variant?: Variant;
  onChange?: (value: string) => void;
  activeTab?: string;
  prefixCls?: string;
  fullWidth?: boolean; // этот пропс который будет растягивать на всю ширину
}

type Variant = "underline" | "rounded";
type Size = "small" | "medium" | "large";
