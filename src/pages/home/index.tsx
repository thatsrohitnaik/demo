import React, { useEffect, useState } from 'react';
import Table from '../../components/table/';
import oneRow from '../../static-data/products/one/';
import { getOneCols } from '../../configs/table/products/one/';

const Home = () => {
  return (
    <>
      <select
        onChange={(e) => {
          console.log(e.target.value);
        }}
      >
        <option value={'actor'}>Actors</option>
        <option value={'athelet'}>Athelets</option>
      </select>
      <br />
      <br />
      <Table rowData={oneRow} getCols={getOneCols} />
    </>
  );
};

export default Home;
