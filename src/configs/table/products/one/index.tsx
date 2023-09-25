import { rowIDFormatter } from '../../../../components/table/helpers/';

export const getOneCols = (more: boolean, checkbox: boolean) => {
  const oneCol = [
    {
      headerName: 'ID',
      valueGetter: 'node.id',
      valueFormatter: rowIDFormatter,
      checkboxSelection: more,
      field: 'id',
      width: 75,
    },
    { field: 'actor' },
    {
      field: 'movies',
      cellEditor: 'agNumberCellEditor',
      editable: true,
      width: 100,
    },
    { field: 'latestMovie', cellEditor: 'agTextCellEditor' },
    { field: 'upcomingMovie', cellEditor: 'agTextCellEditor', editable: true },
    { field: 'homeTown' },
    {
      field: 'followers',
      cellEditor: 'agNumberCellEditor',
      editable: true,
      width: 120,
    },
    { field: 'instagram', width: 120, hide: !checkbox },
    { field: 'twitter', width: 120, hide: !checkbox },
    { field: 'tumblr', width: 120, hide: !checkbox },
    { field: 'pilotLicense', width: 150 },
  ];
  return oneCol;
};
