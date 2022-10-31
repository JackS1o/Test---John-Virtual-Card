import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../Context/context";
import createUser from "../api/createUser";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../styles/home.css";

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
    if (result.message === "Usuário criado com sucesso") {
      alert("User created successfully");
      navigate("/qrcode");
    }
  };

  return (
    <div className="main">
      <header className="header">
        <h1>QR Code Generator</h1>
      </header>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          name="name"
          value={userData.name}
          onChange={dataInput}
        />
        <TextField
          id="standard-basic"
          label="LinkedIn URL"
          variant="standard"
          name="linkedin"
          value={userData.linkedin}
          onChange={dataInput}
        />
        <TextField
          id="standard-basic"
          label="GitHub URL"
          variant="standard"
          name="github"
          value={userData.github}
          onChange={dataInput}
        />
        <Button variant="contained" onClick={sendData}>
          Link
        </Button>
      </Box>
    </div>
  );
}

export default Home;
