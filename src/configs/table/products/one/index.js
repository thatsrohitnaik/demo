import { rowIDFormatter } from '../../../../components/table/helpers/';

const oneCol = [
  {
    headerName: 'Row ID',
    valueGetter: 'node.id',
    valueFormatter: rowIDFormatter,
    checkboxSelection: true,
    field: 'id',
  },
  { field: 'actor' },
  { field: 'movies', cellEditor: 'agNumberCellEditor', editable: true },
  { field: 'latestMovie', cellEditor: 'agTextCellEditor' },
  { field: 'upcomingMovie', cellEditor: 'agTextCellEditor', editable: true },
  { field: 'homeTown' },
  { field: 'followers', cellEditor: 'agNumberCellEditor', editable: true },
  { field: 'pilotLicense' },
];

export default oneCol;
