import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { GridReadyEvent } from 'ag-grid-community';

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

  const onGridReady = useCallback((params: GridReadyEvent) => {
    setAutoHeight();
  }, []);

  const setAutoHeight = useCallback(() => {
    gridRef.current!.api.setDomLayout('autoHeight');
    (document.querySelector<HTMLElement>('#myGrid')! as any).style.height = '';
  }, []);

  const refreshCols = useCallback(() => {
    const col: any[] = props.getCols(showMore, showSrCheckbox);
    setCols(col);
  }, [showMore, showSrCheckbox]);

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

      <div id="myGrid" className="ag-theme-alpine" style={{ width: '100%' }}>
        <AgGridReact
          {...props}
          columnDefs={cols}
          ref={gridRef}
          defaultColDef={{
            sortable: true,
            filter: true,
            resizable: true,
          }}
          sideBar={true}
          suppressMenuHide={true}
          onGridReady={onGridReady}
        ></AgGridReact>
      </div>
    </>
  );
};

export default Table;
