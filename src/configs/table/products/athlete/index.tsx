import { rowIDFormatter } from '../../../../components/table/helpers/';
import cups from '../../../../components/table/renderer/cups';
import { IGroupCellRendererParams } from 'ag-grid-community';
import { ColDef, ColGroupDef, RowSpanParams } from 'ag-grid-community';

function rowSpan(params: RowSpanParams<any>) {
  var stats = params.data ? params.data.stats : undefined;
  return stats.length;
}

export const getAthleteCols = (showSrCheckbox: boolean): any[] => {
  console.log(showSrCheckbox);
  let athleteCol: (ColDef | ColGroupDef)[] = [
    {
      headerName: 'ID',
      valueGetter: 'node.id',
      valueFormatter: rowIDFormatter,
      checkboxSelection: showSrCheckbox,
      field: 'id',
      width: 75,
    },
    { field: 'athlete', flex: 1, minWidth: 200 },
    {
      field: 'goal',
      cellEditor: 'agNumberCellEditor',
      editable: true,
      width: 100,
    },
    { field: 'position', cellEditor: 'agTextCellEditor' },
    { field: 'country', cellEditor: 'agTextCellEditor' },
    { field: 'club' },
    {
      headerName: 'Cup',
      width: 120,
      field: 'stats',
      autoHeight: true,
      rowSpan: rowSpan,
      cellRenderer: cups,
      cellClassRules: {
        'show-cell': 'value !== undefined',
      },
      cellDataType: false,
    },

    { field: 'instagram', width: 120 },
    { field: 'twitter', width: 120 },
    { field: 'tumblr', width: 120 },
    { field: 'pilotLicense', width: 150 },
  ];
  return athleteCol;
};
