import Header from './components/header.jsx'
import Body from './components/body'
import {Route, Routes} from "react-router-dom";
import OtherPage from "./components/otherPage";

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
            <Route exact path="/" element={<Body/>}/>
            <Route path="/second" element={<OtherPage number = '2' message = 'Это вторая страница!'/>}/>
            <Route path="/third" element={<OtherPage number = '3' message = 'Это третья страница, дальше ничего нет...'/>}/>
        </Routes>
      </div>

  );
}

export default App;
