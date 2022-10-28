import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../Context/context";
import createUser from "../api/createUser";

function Home() {
  const { userData, setUserData } = useContext(Context);

  const navigate = useNavigate();

  const dataInput = ({ target }) => {
    const { name, value } = target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const sendData = async () => {
    const result = await createUser(userData);
    if (result.message === 'Usuário criado com sucesso') {
      alert("User created successfully");
      navigate("/qrcode");
    }
  }

  return (
    <div>
      <header>
        <h1>QR Code Generator</h1>
      </header>
      <div>
        <label htmlFor="url">
          Name
          <input
            type="text"
            placeholder="Type your First Name"
            name="name"
            value={userData.name}
            onChange={dataInput}
          />
        </label>
        <label htmlFor="url">
          LinkedIn URL
          <input
            type="text"
            placeholder="Type your LinkedIn URL"
            name="linkedin"
            value={userData.linkedin}
            onChange={dataInput}
          />
        </label>
        <label htmlFor="url">
          GitHub URL
          <input
            type="text"
            placeholder="Type your GitHub URL"
            name="github"
            value={userData.github}
            onChange={dataInput}
          />
        </label>
        <button
          type="button"
          onClick={sendData}
        >
          Generate QR Code
        </button>
      </div>
    </div>
  );
}

export default Home;
