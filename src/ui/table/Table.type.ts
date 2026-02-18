export type Column = {
  key: string;
  value: string;
  width?: number | string;
  minWidth?: number;
  fixed?: "left" | "right";
};

export type RowData = {
  [key: string]: string | number;
  id: string | number;
};
