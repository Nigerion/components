import { IPropsTableBody } from "./TableBody.type";

export default function TableBody({
    bodyRef,
    displayData,
    striped,
    hoverable,
    fixedLeftColumns,
    renderCell,
    regularColumns,
    fixedRightColumns,
}: IPropsTableBody) {
    return (
        <div
            ref={bodyRef}
            style={{
                minWidth: "fit-content",
            }}
        >
            {displayData.length === 0 ? (
                <div
                    style={{
                        padding: "48px 16px",
                        textAlign: "center",
                        color: "#64748b",
                        minWidth: "100%",
                    }}
                >
                    Нет данных для отображения
                </div>
            ) : (
                displayData.map((row, rowIndex) => (
                    <div
                        key={row.id || rowIndex}
                        style={{
                            display: "flex",
                            minWidth: "fit-content",
                            borderBottom: "1px solid #e2e8f0",
                            backgroundColor: striped && rowIndex % 2 === 1 ? "#f8fafc" : "white",
                            transition: hoverable ? "background-color 0.2s" : "none",
                        }}
                        onMouseEnter={(e) =>
                            hoverable && (e.currentTarget.style.backgroundColor = "#f1f5f9")
                        }
                        onMouseLeave={(e) =>
                            hoverable &&
                            (e.currentTarget.style.backgroundColor =
                                striped && rowIndex % 2 === 1 ? "#f8fafc" : "white")
                        }
                    >
                        {/* Фиксированные левые колонки */}
                        {fixedLeftColumns.map((column, index) => (
                            <div
                                key={`${row.id}-${column.key}`}
                                style={{
                                    width: column.width || "200px",
                                    minWidth: column.minWidth || "150px",
                                    padding: "12px",
                                    borderRight: "1px solid #e2e8f0",
                                    display: "flex",
                                    alignItems: "center",
                                    wordBreak: "break-word",
                                    backgroundColor:
                                        striped && rowIndex % 2 === 1 ? "#f1f5f9" : "white",
                                    position: "sticky",
                                    left:
                                        index > 0
                                            ? `calc(${index} * (${column.width || "200px"}))`
                                            : 0,
                                    zIndex: 10,
                                    fontSize: "14px",
                                }}
                            >
                                {renderCell(row[column.key])}
                            </div>
                        ))}

                        {/* Обычные колонки */}
                        {regularColumns.map((column) => (
                            <div
                                key={`${row.id}-${column.key}`}
                                style={{
                                    width: column.width || "200px",
                                    minWidth: column.minWidth || "150px",
                                    padding: "12px",
                                    borderRight: "1px solid #e2e8f0",
                                    display: "flex",
                                    alignItems: "center",
                                    wordBreak: "break-word",
                                }}
                            >
                                {renderCell(row[column.key])}
                            </div>
                        ))}

                        {/* Фиксированные правые колонки */}
                        {fixedRightColumns.map((column, index) => (
                            <div
                                key={`${row.id}-${column.key}`}
                                style={{
                                    width: column.width || "200px",
                                    minWidth: column.minWidth || "150px",
                                    padding: "12px",
                                    borderRight: "1px solid #e2e8f0",
                                    display: "flex",
                                    alignItems: "center",
                                    wordBreak: "break-word",
                                    backgroundColor:
                                        striped && rowIndex % 2 === 1 ? "#f1f5f9" : "white",
                                    position: "sticky",
                                    right:
                                        index > 0
                                            ? `calc(${index} * (${column.width || "200px"}))`
                                            : 0,
                                    zIndex: 10,
                                }}
                            >
                                {renderCell(row[column.key])}
                            </div>
                        ))}
                    </div>
                ))
            )}
        </div>
    );
}
