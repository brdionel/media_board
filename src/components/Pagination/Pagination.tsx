import { useLocation, useNavigate } from "react-router-dom";
import { usePaginationStore } from "../../store/pagination";
import { useEffect } from "react";
import classes from "./Pagination.module.css";
import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";

interface PaginationProps {
  totalResults: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalResults }) => {
  const {
    currentPage,
    pageSize,
    setCurrentPage,
    setPageSize,
    setTotalResults,
  } = usePaginationStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = parseInt(params.get("page") ?? 1);

    setCurrentPage(page);
    setTotalResults(totalResults);
  }, [
    location.search,
    totalResults,
    setCurrentPage,
    setPageSize,
    setTotalResults,
  ]);

  const totalPages = Math.ceil(totalResults / pageSize);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    navigate(`?page=${newPage}`);
  };

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    setCurrentPage(1); // Volver a la primera página cuando se cambia el tamaño
    navigate(`?page=1`);
  };

  return (
    <div className={classes.paginationContainer}>
      <div className={classes.pageSizeSelectorContainer}>
        <label className={classes.pageSizeSelectorLabel}>
          Results per page:
          <select
            className={classes.pageSizeSelector}
            value={pageSize}
            onChange={(e) => handlePageSizeChange(parseInt(e.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </label>
      </div>

      <div className={classes.pageNavigation}>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className={`${classes.pageNavigationButton} ${
            currentPage !== 1 ? classes.buttonBack : classes.buttonDisabled
          }`}
        >
          <ArrowBackIosNewOutlined />
        </button>

        <span className={classes.pageNavigationButtonLabel}>
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className={`${classes.pageNavigationButton} ${
            currentPage !== totalPages
              ? classes.buttonForward
              : classes.buttonDisabled
          }`}
        >
          <ArrowForwardIosOutlined />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
