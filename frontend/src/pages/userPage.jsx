import { useEffect, useState } from "react";
import getUser from "../api/getUser";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "../styles/userPage.css";

function UserPage() {
  const [userName, setUserName] = useState();

  useEffect(() => {
    getUser().then((data) => setUserName(data));
  }, []);

  return (
    <div className="main">
      <h1>{`Hello, My name is ${userName?.name}`}</h1>
      <div className="container">
        <h3>Follow me on my social media:</h3>
        <Box
          component="span"
          sx={{
            "& > :not(style)": { m: 1 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
          noValidate
          autoComplete="off"
        >
          <a href={userName?.linkedin} target="_blank" rel="noreferrer">
            <Button variant="contained">
              LinkedIn
            </Button>
          </a>
          <a href={userName?.github} target="_blank" rel="noreferrer">
            <Button variant="contained">
              GitHub
            </Button>
          </a>
        </Box>
      </div>
    </div>
  );
}

export default UserPage;
