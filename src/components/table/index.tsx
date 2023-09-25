import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

type TablePorps = {
  rowData: any[];
  getCols: (showMore: boolean, showSrCheckbox: boolean) => any[];
  rowSelection?: 'multiple' | 'single';
  sideBar?: boolean;
};

const Table = (props: TablePorps) => {
  const gridRef = useRef<AgGridReact>(null);
  const [cols, setCols] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [showSrCheckbox, setShowSrCheckbox] = useState(false);

  const redrawAllRows = useCallback(() => {
    gridRef.current!.api.redrawRows();
  }, []);

  useEffect(() => {
    refreshCols();
    setTimeout(function () {
      redrawAllRows();
    }, 500);
  }, [showSrCheckbox]);

  useEffect(() => {
    refreshCols();
  }, [showMore]);

  const refreshCols = () => {
    const col: any[] = props.getCols(showMore, showSrCheckbox);
    setCols(col);
  };

  return (
    <>
      <div>
        <button
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
        <button
          style={{ marginLeft: '5px' }}
          onClick={() => {
            setShowSrCheckbox(!showSrCheckbox);
          }}
        >
          Selection {showSrCheckbox ? 'On' : 'Off'}
        </button>
      </div>
      <br />

      <div className="ag-theme-alpine" style={{ height: 175, width: '100%' }}>
        <AgGridReact
          {...props}
          columnDefs={cols}
          ref={gridRef}
          defaultColDef={{
            sortable: true,
            filter: true,
            resizable: true,
          }}
        ></AgGridReact>
      </div>
    </>
  );
};

export default Table;
