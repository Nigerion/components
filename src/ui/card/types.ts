export interface ICardProps {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  prefixCls?: string;
  className?: string;
}

type Variant = "" | "" | "";
type Size = "small" | string;
