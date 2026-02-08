import { Route, Routes } from 'react-router';
import Home from './Home';
import MyAccount from './MyAccount';
import ErrorApp from './ErrorApp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myaccount" element={<MyAccount />} />
      <Route path="/errorapp" element={<ErrorApp />} />
    </Routes>
  );
}

export default App;
