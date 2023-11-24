import PropTypes from "prop-types";

const User = ({ name, onGetData, children }) => {
  console.log(name);
  onGetData();
  return <div>{children}</div>;
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  onGetData: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default User;
