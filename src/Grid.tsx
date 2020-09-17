import React, { useEffect, useState } from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
} from '@syncfusion/ej2-react-grids';

const Grid = () => {
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((res) => setDataSource(res))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <GridComponent dataSource={dataSource}>
        {/* <ColumnsDirective>
          <ColumnDirective field='' />
        </ColumnsDirective> */}
      </GridComponent>
    </div>
  );
};

export default Grid;
