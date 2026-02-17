export interface IPropsPagination {
    currentPage: number;
    handlePageChange: (i: number) => void;
    totalPages: number;
}
