import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import QRCodeGenerator from "./pages/QRCodeGenerator";
import ContextProvider from "./Context/contextProvider";
import UserPage from "./pages/userPage";

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/qrcode" element={<QRCodeGenerator />} />
        <Route exact path="/userPage" element={<UserPage />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
