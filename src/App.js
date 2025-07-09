import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import HomePage from "./components/pages/HomePage/HomePage";
import NotFound from "./components/pages/NotFound/NotFound";
function App() {
  return (
<Container>
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/table/:tableId" element={} />
      <Route path="/table/edit/:tableId" element={} />
      <Route path='/table/add' element={} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
</Container>
  );
}

export default App;
