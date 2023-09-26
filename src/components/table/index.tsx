import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { GridReadyEvent, RowHeightParams } from 'ag-grid-community';

type TablePorps = {
  rowData: any[];
  getCols: (showSrCheckbox: boolean) => any[];
  rowSelection?: 'multiple' | 'single';
  sideBar?: boolean;
};

const Table = (props: TablePorps) => {
  const gridRef = useRef<AgGridReact>(null);
  const [cols, setCols] = useState([]);
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
  }, [props.getCols]);

  const onGridReady = useCallback((params: GridReadyEvent) => {
    //  setAutoHeight();
  }, []);

  const setAutoHeight = useCallback(() => {
    gridRef.current!.api.setDomLayout('autoHeight');
    (document.querySelector<HTMLElement>('#myGrid')! as any).style.height = '';
  }, []);

  const refreshCols = useCallback(() => {
    const col: any[] = props.getCols(showSrCheckbox);
    setCols(col);
  }, [showSrCheckbox, props.getCols]);

  const getRowHeight = useCallback(
    (params: RowHeightParams): number | undefined | null => {
      return params.data.rowHeight;
    },
    []
  );

  return (
    <>
      <div>
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

      <div
        id="myGrid"
        className="ag-theme-alpine"
        style={{ width: '100%', height: '400px' }}
      >
        <AgGridReact
          {...props}
          columnDefs={cols}
          ref={gridRef}
          defaultColDef={{
            sortable: true,
            filter: true,
            resizable: true,
          }}
          suppressMenuHide={true}
          suppressRowTransform={true}
          onGridReady={onGridReady}
        ></AgGridReact>
      </div>
    </>
  );
};

export default Table;
