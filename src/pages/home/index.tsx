import React, { useEffect, useState } from 'react';
import Table from '../../components/table/';
import oneRow from '../../static-data/products/one/';
import { getOneCols } from '../../configs/table/products/one/';

const Home = () => {
  const [cols, setCols] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [showSrCheckbox, setShowSrCheckbox] = useState(false);

  useEffect(() => {
    const cols = getOneCols(showMore, showSrCheckbox);
    setCols([...cols]);
    console.log(cols, showMore);
  }, [showMore, showSrCheckbox]);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>
      <br />
      <Table rowData={oneRow} columnDefs={cols} rowSelection={'multiple'} />
    </>
  );
};

export default Home;
