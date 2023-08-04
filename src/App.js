import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import Aulas from "./pages/Aulas";
import Sobre from "./pages/Sobre";
import Nav from "./components/Nav";
import Aula from "./pages/Aula";
import Assistir from "./components/assistir";

import loginReducer from "./reducers/loginReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import PrivateRoute from "./components/PrivateRoutes";

const store = createStore(loginReducer)

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Nav/>
          <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/aulas/:id" element={<Aula/>}></Route>
            <Route path="/aulas" element={<PrivateRoute redirectTo={"/"}>
              <Aulas />
              </PrivateRoute>
            }>

            </Route>
            <Route path="/sobre" element={<Sobre/>}></Route>
            <Route path="/assistir" element={<Assistir/>}></Route>
            <Route path="*" element={<div>Rota não existe</div>}>
            </Route>
          </Routes>
          
        </div>
      </Router>
    </Provider>
  );
}

export default App;
