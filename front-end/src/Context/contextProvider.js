import Context from "./context";
import PropTypes from 'prop-types';

function ContextProvider({ children }) {
  const context = {};

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
