import { rowIDFormatter } from '../../helpers/';

const oneCol = [
  {
    headerName: 'Row ID',
    valueGetter: 'node.id',
    valueFormatter: rowIDFormatter,
    checkboxSelection: true,
    field: 'id',
  },
  { field: 'make' },
  { field: 'model' },
  { field: 'price' },
];

export default oneCol;
