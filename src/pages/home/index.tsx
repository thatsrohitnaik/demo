import React, { useEffect, useState } from 'react';
import Table from '../../components/table/';
import oneRow from '../../static-data/products/one/';
import { getOneCols } from '../../configs/table/products/one/';

const Home = () => {
  const [cols, setCols] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showSrCheckbox, setShowSrCheckbox] = useState(false);

  useEffect(() => {
    setCols(getOneCols(showMore, showSrCheckbox));
  }, []);

  return (
    <>
      <Table
        rowData={oneRow}
        columnDefs={cols}
        rowSelection={'multiple'}
        sideBar={true}
      />
    </>
  );
};

export default Home;
