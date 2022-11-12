import { FC } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { DataGrid, DataGridProps } from "@mui/x-data-grid";

const CustomDataGrid: FC<DataGridProps> = ({ rows, columns, sx }) => {
  return (
    <Box sx={{ height: "100%", overflow: "hidden", width: 1110, ...sx }}>
      <DataGrid
        rows={rows}
        autoHeight={true}
        columns={columns}
        columnBuffer={5}
        disableSelectionOnClick
        getRowId={(row) => row.token.contractAddress}
      />
    </Box>
  );
};

CustomDataGrid.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.array.isRequired,
  sx: PropTypes.object.isRequired,
};

export default CustomDataGrid;
