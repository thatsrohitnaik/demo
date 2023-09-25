import React, { useEffect, useState } from 'react';
import Table from '../../components/table/';
import oneRow from '../../static-data/products/one/';
import { getOneCols } from '../../configs/table/products/one/';

const Home = () => {
  return (
    <>
      <Table rowData={oneRow} getCols={getOneCols} rowSelection={'multiple'} />
    </>
  );
};

export default Home;
