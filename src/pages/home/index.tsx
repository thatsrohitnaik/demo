import React, { useEffect, useState } from 'react';
import Table from '../../components/table/';
import actorsData from '../../static-data/products/actors/';
import { getActorsCols } from '../../configs/table/products/actors/';
import athleteData from '../../static-data/products/athlete/';
import { getAthleteCols } from '../../configs/table/products/athlete/';

const Home = () => {
  const [value, setValue] = useState('actor');
  const [rowData, setRowData] = useState(actorsData);

  useEffect(() => {
    if (value === 'athlete') {
      setRowData(athleteData);
    } else {
      setRowData(actorsData);
    }
  }, [value]);
  return (
    <>
      <select
        onChange={(e) => {
          console.log(e.target.value);
          setValue(e.target.value);
        }}
      >
        <option value={'actor'}>Actors</option>
        <option value={'athlete'}>Athletes</option>
      </select>
      <br />
      <br />
      <Table
        rowData={rowData}
        getCols={value == 'actors' ? getActorsCols : getAthleteCols}
      />
    </>
  );
};

export default Home;
