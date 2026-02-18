/* eslint-disable @typescript-eslint/no-explicit-any */
import { JSX, Ref } from "react";

import { Column, RowData } from "../Table.type";

export interface IPropsTableBody {
  bodyRef: Ref<HTMLDivElement> | undefined;
  displayData: RowData[];
  striped: boolean;
  hoverable: boolean;
  fixedLeftColumns: Column[];
  renderCell: (value: any) => string | JSX.Element;
  regularColumns: Column[];
  fixedRightColumns: Column[];
}
