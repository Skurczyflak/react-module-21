import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import HomePage from "./components/pages/HomePage/HomePage";
import NotFound from "./components/pages/NotFound/NotFound";
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import UpdateTableForm from './components/features/UpdateTableForm/UpdateTableForm';
import Tables from './components/pages/Tables/Tables';

function App() {
  return (
<Container>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/table/:tableId" element={<UpdateTableForm />} />
      <Route path="/table/edit/:tableId" element={<Tables />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
</Container>
  );
}

export default App;
