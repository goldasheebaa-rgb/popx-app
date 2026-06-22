import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './Welcome';
import CreateAccount from './CreateAccount';
import Login from './Login';
import AccountSettings from './AccountSettings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
