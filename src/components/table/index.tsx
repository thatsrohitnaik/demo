import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

type TablePorps = {
  rowData: any[];
  columnDefs: any[];
  rowSelection?: 'multiple' | 'single';
  sideBar?: boolean;
};

const Table = (props: TablePorps) => {
  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <AgGridReact
        {...props}
        defaultColDef={{
          sortable: true,
          filter: true,
          resizable: true,
        }}
      ></AgGridReact>
    </div>
  );
};

export default Table;
