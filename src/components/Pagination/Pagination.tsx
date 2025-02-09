import { useLocation, useNavigate } from "react-router-dom";
import { usePaginationStore } from "../../store/pagination";
import { useEffect } from "react";
import classes from "./Pagination.module.css";
import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

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
    const page = parseInt(params.get("page") ?? "1");
    const sizeParam = params.get("size");
    const size = sizeParam ? parseInt(sizeParam, 10) : pageSize;
    setPageSize(size)
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
    navigate(`?page=${newPage}&size=${pageSize}`);
  };

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    setCurrentPage(1); // Volver a la primera página cuando se cambia el tamaño
    navigate(`?page=1&size=${newPageSize}`);
  };

  return (
    <div className={classes.paginationContainer}>
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <InputLabel
          id="demo-simple-select-label"
          sx={{
            color: "#BCBCBC",
            fontSize: ".8rem",
            textWrap: "revert",
            "&.Mui-focused": { color: "#BCBCBC" },
          }}
        >
          Results per page:
        </InputLabel>
        <FormControl
          size="small"
          fullWidth
          sx={{
            bgcolor: "#fff",
            borderRadius: 1,
            minWidth: 80 
          }}
        >
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={pageSize}
            label="Results per page:"
            onChange={(e) => handlePageSizeChange(parseInt(e.target.value as string, 10))}
            sx={{
              color: "#333", // Texto oscuro
              backgroundColor: "#fff", // Fondo blanco
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ccc", // Borde gris
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#888", // Borde más visible al pasar el mouse
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#333", // Borde más oscuro al enfocar
              },
              "& .MuiSvgIcon-root": {
                color: "#333", // Color del icono del select
              },
            }}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>
      </Box>


      <div className={classes.pageNavigation}>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className={`${classes.pageNavigationButton} ${currentPage !== 1 ? classes.buttonBack : classes.buttonDisabled
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
          className={`${classes.pageNavigationButton} ${currentPage !== totalPages
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
