import { rowIDFormatter } from '../../../../components/table/helpers/';

export const getOneCols = (
  showMore: boolean,
  showSrCheckbox: boolean
): any[] => {
  console.log(showMore, showSrCheckbox);
  let oneCol: any = [];
  oneCol = [
    {
      headerName: 'ID',
      valueGetter: 'node.id',
      valueFormatter: rowIDFormatter,
      checkboxSelection: showSrCheckbox,
      field: 'id',
      width: 75,
    },
    { field: 'actor', flex: 1 },
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
    { field: 'instagram', width: 120, hide: !showMore },
    { field: 'twitter', width: 120, hide: !showMore },
    { field: 'tumblr', width: 120, hide: !showMore },
    { field: 'pilotLicense', width: 150 },
  ];
  return oneCol;
};
