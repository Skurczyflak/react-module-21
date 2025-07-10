import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux.js';

import Tables from "../Tables/Tables";
const HomePage = () => {

  const tables = useSelector(getAllTables)

  if(tables.length === 0) return <h2>Loading...</h2>;
  else return (
    <>
      <h2>All tables</h2>
      <Tables tables={tables} />
    </>
  );
};

export default HomePage;
