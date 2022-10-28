import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import QRCodeGenerator from "./pages/QRCodeGenerator";
import ContextProvider from "./Context/contextProvider";

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/qrcode" element={<QRCodeGenerator />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
