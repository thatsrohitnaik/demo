import React, { useEffect, useState } from 'react';
import Table from '../../components/table/';
import actorsData from '../../static-data/products/actors/';
import { getOneCols } from '../../configs/table/products/actors/';

const Home = () => {
  const [value, setValue] = useState('actor');

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
      <Table rowData={actorsData} getCols={getOneCols} />
    </>
  );
};

export default Home;
