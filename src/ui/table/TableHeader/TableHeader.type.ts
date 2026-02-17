import { Ref } from "react";
import { Column } from "../Table.type";

export interface IPropsTableHeader {
    headerRef: Ref<HTMLDivElement> | undefined;
    fixedLeftColumns: Column[];
    sortable: boolean;
    handleSort: (columnKey: string) => void;
    sortColumn: string | null;
    sortDirection: "asc" | "desc";
    regularColumns: Column[];
    fixedRightColumns: Column[];
}
