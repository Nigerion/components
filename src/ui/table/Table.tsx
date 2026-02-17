/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useMemo, useRef, useEffect, JSX } from "react";
import Pagination from "./Pagination/Pagination";
import TableHeader from "./TableHeader/TableHeader";
import { RowData } from "./Table.type";
import TableBody from "./TableBody/TableBody";

type Column = {
    key: string;
    value: string;
    width?: number | string;
    minWidth?: number;
    fixed?: "left" | "right";
};

type TableProps = {
    columns: Column[];
    data: RowData[];
    striped?: boolean;
    hoverable?: boolean;
    sortable?: boolean;
    pagination?: boolean;
    itemsPerPage?: number;
    className?: string;
    style?: React.CSSProperties;
    // Новые пропсы для внешней пагинации
    currentPage?: number;
    totalPages?: number;
    onPageChange?: (page: number) => void;
    // Для возможности локальной пагинации
    useLocalPagination?: boolean;
};

export default function Table({
    columns,
    data,
    striped = true,
    hoverable = true,
    sortable = false,
    pagination = false,
    itemsPerPage = 20,
    className = "",
    style = {},
    // Новые пропсы
    currentPage: externalCurrentPage = 1,
    totalPages: externalTotalPages = 1,
    onPageChange,
    useLocalPagination = true, // По умолчанию используем локальную пагинацию
}: TableProps) {
    const [sortColumn, setSortColumn] = useState<string | null>(null);
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

    // Используем либо внешнее, либо локальное состояние для пагинации
    const [localCurrentPage, setLocalCurrentPage] = useState(1);

    const tableContainerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const bodyRef = useRef<HTMLDivElement>(null);
    const [tableHeight, setTableHeight] = useState("100%");

    // Определяем используемую пагинацию
    const isExternalPagination = !useLocalPagination && onPageChange && pagination;
    const currentPage = isExternalPagination ? externalCurrentPage : localCurrentPage;
    const totalPages = isExternalPagination
        ? externalTotalPages
        : Math.ceil(data.length / itemsPerPage);

    // Автоматический расчет высоты таблицы
    useEffect(() => {
        const updateHeight = () => {
            if (tableContainerRef.current && tableContainerRef.current.parentElement) {
                const parentHeight = tableContainerRef.current.parentElement.clientHeight;
                setTableHeight(`${parentHeight - 50}px`); // Отнимаем место для заголовка и отступов
            }
        };

        updateHeight();
        window.addEventListener("resize", updateHeight);

        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    // Обработчики прокрутки
    const handleHorizontalScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const scrollLeft = e.currentTarget.scrollLeft;
        // Синхронизируем прокрутку заголовка и тела
        if (headerRef.current) {
            headerRef.current.scrollLeft = scrollLeft;
        }
    };

    // Фиксированные колонки
    const fixedLeftColumns = columns.filter((col) => col.fixed === "left");
    const fixedRightColumns = columns.filter((col) => col.fixed === "right");
    const regularColumns = columns.filter((col) => !col.fixed);

    // Сортировка данных
    const sortedData = useMemo(() => {
        if (!sortable || !sortColumn) return data;

        return [...data].sort((a, b) => {
            const aValue = a[sortColumn];
            const bValue = b[sortColumn];

            if (aValue === bValue) return 0;

            if (sortDirection === "asc") {
                return aValue < bValue ? -1 : 1;
            } else {
                return aValue > bValue ? -1 : 1;
            }
        });
    }, [data, sortable, sortColumn, sortDirection]);

    // Локальная пагинация (только если не используется внешняя)
    const paginatedData = useMemo(() => {
        if (!pagination || isExternalPagination) return sortedData;

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return sortedData.slice(startIndex, endIndex);
    }, [sortedData, pagination, currentPage, itemsPerPage, isExternalPagination]);

    // Данные для отображения
    const displayData = isExternalPagination ? sortedData : paginatedData;

    const handleSort = (columnKey: string) => {
        if (!sortable) return;

        if (sortColumn === columnKey) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortColumn(columnKey);
            setSortDirection("asc");
        }
    };

    // Обработчик изменения страницы
    const handlePageChange = (page: number) => {
        if (isExternalPagination && onPageChange) {
            onPageChange(page);
        } else {
            setLocalCurrentPage(page);
        }
    };

    const renderCell = (value: any) => {
        if (value === null || value === undefined || value === "") {
            return <span style={{ color: "#999", fontStyle: "italic" }}>—</span>;
        }

        if (typeof value === "boolean") {
            return value ? "✓" : "✗";
        }

        if (typeof value === "object") {
            return JSON.stringify(value).slice(0, 50) + "...";
        }

        const stringValue = String(value);
        return stringValue.length > 100 ? stringValue.slice(0, 100) + "..." : stringValue;
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                minHeight: 0,
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                backgroundColor: "white",
                overflow: "hidden",
                ...style,
            }}
            className={className}
        >
            <div
                ref={tableContainerRef}
                style={{
                    position: "relative",
                    overflow: "auto",
                    flex: "1",
                    minHeight: 0,
                    maxHeight: tableHeight,
                    boxSizing: "border-box",
                }}
                onScroll={handleHorizontalScroll}
            >
                <TableHeader
                    headerRef={headerRef}
                    fixedLeftColumns={fixedLeftColumns}
                    sortable={sortable}
                    handleSort={handleSort}
                    sortColumn={sortColumn}
                    sortDirection={sortDirection}
                    regularColumns={regularColumns}
                    fixedRightColumns={fixedRightColumns}
                />
                <TableBody
                    bodyRef={bodyRef}
                    displayData={displayData}
                    striped={striped}
                    hoverable={hoverable}
                    fixedLeftColumns={fixedLeftColumns}
                    renderCell={renderCell}
                    regularColumns={regularColumns}
                    fixedRightColumns={fixedRightColumns}
                />
            </div>

            {/* Пагинация */}
            <Pagination
                currentPage={currentPage}
                handlePageChange={handlePageChange}
                totalPages={totalPages}
            />
        </div>
    );
}
