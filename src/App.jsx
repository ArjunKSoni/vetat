import { React } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Provider } from "react-redux"
import Home from "./components/Home";
import Store from "./redux/store";
import Main from "./components/Main";
import Login from "./components/Login";
function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/main' element={<Main />} />
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  );
}
export default App;
