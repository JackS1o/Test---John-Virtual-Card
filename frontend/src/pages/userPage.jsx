import { useEffect, useState } from "react";
import getUser from "../api/getUser";

function UserPage() {
  const [userName, setUserName] = useState();

  useEffect(() => {
    getUser().then((data) => setUserName(data));
  }, []);

  return (
    <div>
      <h1>{`Hello, My name is ${userName?.name}`}</h1>
      <div>
        <h3>Follow me on my social media:</h3>
        <a href={userName?.linkedin} target="_blank" rel="noreferrer">
          <button type="button">Linkedin</button>
        </a>
        <a href={userName?.github} target="_blank" rel="noreferrer">
          <button type="button">Github</button>
        </a>
      </div>
    </div>
  );
}

export default UserPage;
