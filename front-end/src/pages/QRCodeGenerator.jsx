import QRCode from 'qrcode';
import Context from '../Context/context';
import { useContext } from 'react';

function QRCodeGenerator() {
  const { userData } = useContext(Context);

  return (
    <div>
      <header>
        <h1>QR Code Generator</h1>
      </header>
      <div>
        {/* <img src={qrCode} alt="QR Code" /> */}
      </div>
    </div>
  );
}

export default QRCodeGenerator;
