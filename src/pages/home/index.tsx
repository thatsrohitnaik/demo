import React, { useEffect, useState } from 'react';
import Table from '../../components/table/';
import actorsData from '../../static-data/products/actors/';
import { getActorsCols } from '../../configs/table/products/actors/';
import athleteData from '../../static-data/products/athlete/';
import { getAthleteCols } from '../../configs/table/products/athlete/';

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
        <option value={'athlete'}>Athletes</option>
      </select>
      <br />
      <br />
      <Table rowData={actorsData} getCols={getActorsCols} />
    </>
  );
};

export default Home;
