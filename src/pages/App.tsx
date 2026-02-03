import { Route, Routes } from 'react-router';
import Home from './Home';
import MyAccount from './MyAccount';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myaccount" element={<MyAccount />} />
    </Routes>
  );
}

export default App;
