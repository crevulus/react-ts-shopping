import Home from "./views/Home";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "./utils/AuthContext";
import { Dashboard } from "./views/Dashboard";

const App = () => {
  const [token, setToken] = useState<string | undefined>();

  const fakeAuth = () =>
    new Promise((resolve: (arg0: string) => void) => {
      setTimeout(() => resolve("2342f2f1d131rf12"), 250);
    });

  const handleLogin = async () => {
    const token: string = await fakeAuth();
    setToken(token);
  };

  const handleLogout = () => {
    setToken(undefined);
  };

  return (
    <div className="App">
      <AuthContext.Provider value={{ token }}>
        <Navigation
          token={token}
          onLogout={handleLogout}
          onLogin={handleLogin}
        />
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<div>No Match</div>} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
};

type NavProps = {
  onLogin: () => void;
  onLogout: () => void;
  token: string | undefined;
};

const Navigation = ({ onLogin, onLogout, token }: NavProps) => {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <button type="button" onClick={onLogin}>
        Sign In
      </button>
      {token && (
        <button type="button" onClick={onLogout}>
          Sign Out
        </button>
      )}
    </nav>
  );
};

export default App;
