"use client";
import { useState } from "react";

import Table from "@/ui/table/Table";

// Определяем типы
type Column = {
  key: string;
  value: string;
  width?: number;
  minWidth?: number;
  fixed?: "left" | "right";
};

type RowData = {
  [key: string]: any;
  id: string | number;
};
// Генерация колонок на основе данных
const generateColumns = (): Column[] => {
  return Array.from({ length: 35 }, (_, i) => ({
    key: `column${i + 1}`,
    value: `Колонка ${i + 1}`,
    width: 180,
    minWidth: 150,
    fixed: i === 0 ? "left" : undefined,
  }));
};

// Преобразование данных событий в формат для таблицы
const transformEventsToTableData = (): RowData[] => {
  // Возвращаем тестовые данные, если событий нет
  return Array.from({ length: 100 }, (_, rowIndex) => {
    const row: RowData = { id: rowIndex + 1 };
    for (let i = 0; i < 35; i++) {
      row[`column${i + 1}`] = `Значение ${rowIndex + 1}-${i + 1}`;
    }
    return row;
  });
};

export default function TablePage() {
  const columns = generateColumns();
  const tableData = transformEventsToTableData();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(30);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        flexDirection: "column",
        minHeight: 0,
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Table
        columns={columns}
        data={tableData}
        sortable={true}
        pagination={true}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        totalPages={0}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
