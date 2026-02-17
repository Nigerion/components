import { IPropsTableHeader } from "./TableHeader.type";

export default function TableHeader({
    headerRef,
    fixedLeftColumns,
    sortable,
    handleSort,
    sortColumn,
    sortDirection,
    regularColumns,
    fixedRightColumns,
}: IPropsTableHeader) {
    return (
        <div
            ref={headerRef}
            style={{
                position: "sticky",
                top: 0,
                zIndex: 20,
                backgroundColor: "#f8fafc",
                borderBottom: "2px solid #e2e8f0",
                minWidth: "fit-content",
            }}
        >
            <div
                style={{
                    display: "flex",
                    minWidth: "fit-content",
                }}
            >
                {/* Фиксированные левые колонки */}
                {fixedLeftColumns.map((column, index) => (
                    <div
                        key={column.key}
                        style={{
                            width: column.width || "200px",
                            minWidth: column.minWidth || "150px",
                            padding: "16px 12px",
                            borderRight: "1px solid #e2e8f0",
                            fontWeight: "600",
                            color: "#475569",
                            cursor: sortable ? "pointer" : "default",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            userSelect: "none",
                            backgroundColor: "#f1f5f9",
                            position: "sticky",
                            left: index > 0 ? `calc(${index} * (${column.width || "200px"}))` : 0,
                            zIndex: 30,
                        }}
                        onClick={() => handleSort(column.key)}
                        onMouseEnter={(e) =>
                            sortable && (e.currentTarget.style.backgroundColor = "#e2e8f0")
                        }
                        onMouseLeave={(e) =>
                            sortable && (e.currentTarget.style.backgroundColor = "#f1f5f9")
                        }
                    >
                        <span>{column.value}</span>
                        {sortable && sortColumn === column.key && (
                            <span style={{ fontSize: "12px" }}>
                                {sortDirection === "asc" ? "↑" : "↓"}
                            </span>
                        )}
                    </div>
                ))}

                {/* Обычные колонки */}
                {regularColumns.map((column) => (
                    <div
                        key={column.key}
                        style={{
                            width: column.width || "200px",
                            minWidth: column.minWidth || "150px",
                            padding: "16px 12px",
                            borderRight: "1px solid #e2e8f0",
                            fontWeight: "600",
                            color: "#475569",
                            cursor: sortable ? "pointer" : "default",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            userSelect: "none",
                            backgroundColor: "#f8fafc",
                        }}
                        onClick={() => handleSort(column.key)}
                        onMouseEnter={(e) =>
                            sortable && (e.currentTarget.style.backgroundColor = "#f1f5f9")
                        }
                        onMouseLeave={(e) =>
                            sortable && (e.currentTarget.style.backgroundColor = "#f8fafc")
                        }
                    >
                        <span>{column.value}</span>
                        {sortable && sortColumn === column.key && (
                            <span style={{ fontSize: "12px" }}>
                                {sortDirection === "asc" ? "↑" : "↓"}
                            </span>
                        )}
                    </div>
                ))}

                {/* Фиксированные правые колонки */}
                {fixedRightColumns.map((column, index) => (
                    <div
                        key={column.key}
                        style={{
                            width: column.width || "200px",
                            minWidth: column.minWidth || "150px",
                            padding: "16px 12px",
                            borderRight: "1px solid #e2e8f0",
                            fontWeight: "600",
                            color: "#475569",
                            cursor: sortable ? "pointer" : "default",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            userSelect: "none",
                            backgroundColor: "#f1f5f9",
                            position: "sticky",
                            right: index > 0 ? `calc(${index} * (${column.width || "200px"}))` : 0,
                            zIndex: 30,
                        }}
                        onClick={() => handleSort(column.key)}
                        onMouseEnter={(e) =>
                            sortable && (e.currentTarget.style.backgroundColor = "#e2e8f0")
                        }
                        onMouseLeave={(e) =>
                            sortable && (e.currentTarget.style.backgroundColor = "#f1f5f9")
                        }
                    >
                        <span>{column.value}</span>
                        {sortable && sortColumn === column.key && (
                            <span style={{ fontSize: "12px" }}>
                                {sortDirection === "asc" ? "↑" : "↓"}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
