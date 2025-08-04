import React from 'react'
import { GridToolbarExportContainer, GridToolbarFilterButton, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { Box } from '@mui/system';

const DatagridToolbar = () => {
  return (
    <Box display="flex" gap={5}>
        <GridToolbarExportContainer />
        <GridToolbarFilterButton />
        <GridToolbarQuickFilter />
    </Box>
  )
}

export default DatagridToolbar;