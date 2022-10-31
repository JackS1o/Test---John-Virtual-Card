import QRCode from "react-qr-code";
import Context from "../Context/context";
import { useContext } from "react";
import "../styles/qrGeneratorPage.css";

function QRCodeGenerator() {
  const { userData } = useContext(Context);
  return (
    <div className="main">
      <header className="header">
        <h1>{ userData.name }</h1>
      </header>
      <h2>Scan Me</h2>
      <QRCode value="http://localhost:4000/userPage" />
    </div>
  );
}

export default QRCodeGenerator;
