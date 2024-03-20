import { Routes, Route } from "react-router-dom"
// import Nav from "./components/Nav";
import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";

function App() {
  
  return (
    <div className="App">
     {/* <Nav/> */}
     <Routes>
        <Route path="/" element={ <Join /> } />
        <Route path="chat" element={ <Chat /> } />
        <Route path="join" element={  <Join /> } />
      </Routes>
    </div>
  );
}

export default App;
