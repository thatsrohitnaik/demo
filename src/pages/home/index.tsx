import React from 'react';
import Table from '../../components/table/';
import oneRow from '../../static-data/products/one/';
import oneCol from '../../configs/table/products/one/';

const Home = () => {
  return (
    <>
      <Table
        rowData={oneRow}
        columnDefs={oneCol}
        rowSelection={'multiple'}
        sideBar={true}
      />
    </>
  );
};

export default Home;
