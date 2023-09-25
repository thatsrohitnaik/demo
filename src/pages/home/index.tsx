import React, { useEffect, useState } from 'react';
import Table from '../../components/table/';
import actorsData from '../../static-data/products/actors/';
import { getActorsCols } from '../../configs/table/products/actors/';
import atheletData from '../../static-data/products/athelet/';
import { getAtheletCols } from '../../configs/table/products/athelet/';

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
      <Table rowData={actorsData} getCols={getActorsCols} />
    </>
  );
};

export default Home;
