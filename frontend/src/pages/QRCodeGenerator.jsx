import QRCode from "react-qr-code";
import Context from "../Context/context";
import { useContext } from "react";

function QRCodeGenerator() {
  const { userData } = useContext(Context);
  return (
    <div>
      <header>
        <h1>{ userData.name }</h1>
      </header>
      <h2>Scan Me</h2>
      <QRCode value="http://localhost:4000/userPage" />
    </div>
  );
}

export default QRCodeGenerator;
