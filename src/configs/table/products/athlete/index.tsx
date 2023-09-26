import { rowIDFormatter } from '../../../../components/table/helpers/';
import subRow from '../../../../components/table/renderer/subRow';
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
      headerName: 'Athlete Details',
      children: [
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
      ],
    },
    {
      headerName: 'Stats',
      children: [
        {
          headerName: 'Cup',
          width: 180,
          field: 'stats',
          autoHeight: true,
          rowSpan: rowSpan,
          cellRenderer: subRow,
          cellRendererParams: {
            subField: 'cup',
          },
          cellClassRules: {
            'show-cell': 'value !== undefined',
          },
          cellDataType: false,
        },
        {
          headerName: 'Appearance',
          width: 150,
          field: 'stats',
          autoHeight: true,
          rowSpan: rowSpan,
          cellRenderer: subRow,
          cellRendererParams: {
            subField: 'appearance',
          },
          cellClassRules: {
            'show-cell': 'value !== undefined',
          },
          cellDataType: false,
          columnGroupShow: 'open',
        },

        {
          headerName: 'Goal',
          width: 120,
          field: 'stats',
          autoHeight: true,
          rowSpan: rowSpan,
          cellRenderer: subRow,
          cellRendererParams: {
            subField: 'goal',
          },
          cellClassRules: {
            'show-cell': 'value !== undefined',
          },
          columnGroupShow: 'open',
        },
        {
          headerName: 'Assist',
          width: 120,
          field: 'stats',
          autoHeight: true,
          rowSpan: rowSpan,
          cellRenderer: subRow,
          cellRendererParams: {
            subField: 'assist',
          },
          cellClassRules: {
            'show-cell': 'value !== undefined',
          },
          columnGroupShow: 'open',
        },
        {
          headerName: 'Red Card',
          width: 120,
          field: 'stats',
          autoHeight: true,
          rowSpan: rowSpan,
          cellRenderer: subRow,
          cellRendererParams: {
            subField: 'redCard',
          },
          cellClassRules: {
            'show-cell': 'value !== undefined',
          },
          columnGroupShow: 'open',
        },
      ],
    },
  ];
  return athleteCol;
};
