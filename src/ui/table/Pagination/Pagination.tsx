import { IPropsPagination } from "./Pagination.type";

export default function Pagination({
  currentPage,
  handlePageChange,
  totalPages,
}: IPropsPagination) {
  return (
    <div
      style={{
        padding: "12px 16px",
        borderTop: "1px solid #e2e8f0",
        backgroundColor: "#f8fafc",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "12px",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          style={{
            padding: "6px 12px",
            border: "1px solid #cbd5e1",
            borderRadius: "6px",
            backgroundColor: currentPage === 1 ? "#f1f5f9" : "white",
            color: currentPage === 1 ? "#94a3b8" : "#475569",
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
            fontSize: "14px",
          }}
        >
          « Первая
        </button>

        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{
            padding: "6px 12px",
            border: "1px solid #cbd5e1",
            borderRadius: "6px",
            backgroundColor: currentPage === 1 ? "#f1f5f9" : "white",
            color: currentPage === 1 ? "#94a3b8" : "#475569",
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
            fontSize: "14px",
          }}
        >
          ‹ Назад
        </button>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontSize: "14px", color: "#475569" }}>Страница</span>
        <select
          value={currentPage}
          onChange={(e) => handlePageChange(Number(e.target.value))}
          style={{
            padding: "6px 12px",
            border: "1px solid #cbd5e1",
            borderRadius: "6px",
            backgroundColor: "white",
            color: "#475569",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <option key={page} value={page}>
              {page}
            </option>
          ))}
        </select>
        <span style={{ fontSize: "14px", color: "#475569" }}>
          из {totalPages}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{
            padding: "6px 12px",
            border: "1px solid #cbd5e1",
            borderRadius: "6px",
            backgroundColor: currentPage === totalPages ? "#f1f5f9" : "white",
            color: currentPage === totalPages ? "#94a3b8" : "#475569",
            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
            fontSize: "14px",
          }}
        >
          Вперед ›
        </button>

        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          style={{
            padding: "6px 12px",
            border: "1px solid #cbd5e1",
            borderRadius: "6px",
            backgroundColor: currentPage === totalPages ? "#f1f5f9" : "white",
            color: currentPage === totalPages ? "#94a3b8" : "#475569",
            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
            fontSize: "14px",
          }}
        >
          Последняя »
        </button>
      </div>
    </div>
  );
}
