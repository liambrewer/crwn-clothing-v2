import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home';

const Shop = () => {
  return (
    <div>
      <h1>SHOP PAGE!!1</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />
    </Routes>
  );
};

export default App;
