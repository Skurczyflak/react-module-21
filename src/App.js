import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { fetchTables  } from './redux/tablesRedux';
import { fetchStatuses } from './redux/statusesRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import HomePage from "./components/pages/HomePage/HomePage";
import NotFound from "./components/pages/NotFound/NotFound";
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import UpdateTableForm from './components/features/UpdateTableForm/UpdateTableForm';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTables());
    dispatch(fetchStatuses());
  }, [dispatch]);

  return (
<Container>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/table/:tableId" element={<UpdateTableForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
</Container>
  );
}

export default App;
