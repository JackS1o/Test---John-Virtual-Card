import { useState } from "react";
import Context from "./context";
import PropTypes from 'prop-types';

function ContextProvider({ children }) {
  const [userData, setUserData] = useState({
    name: "",
    linkedin: "",
    github: "",
  });

  const context = {
    userData,
    setUserData,
  };

  return (
    <Context.Provider value={ context }>
      {children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
