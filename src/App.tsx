import { BrowserRouter, Route } from "react-router-dom"

import { Home } from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";
import { Register } from "./pages/Register";

import { AuthContextProvider } from './contexts/AuthContext';


function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={Register} />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
