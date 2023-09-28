import React, { useEffect, useState } from 'react';
import Table from '../../components/table/';
import { getActorsCols } from '../../configs/table/products/actors/';
import { getAthleteCols } from '../../configs/table/products/athlete/';
import { Storecontext } from '../../store/context';
import { observer } from 'mobx-react';

const Home = () => {
  const [value, setValue] = useState('athlete');
  const { store } = React.useContext(Storecontext);
  const [rowData, setRowData] = useState(store.athlete);

  useEffect(() => {
    debugger;
    if (value === 'athlete') {
      setRowData(store.athlete);
    } else {
      setRowData(store.actors);
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
        <option value={'athlete'}>Athlete</option>
        <option value={'actor'}>Actor</option>
      </select>
      <br />
      <br />
      <Table
        rowData={rowData}
        getCols={value == 'actor' ? getActorsCols : getAthleteCols}
      />
    </>
  );
};

export default observer(Home);
