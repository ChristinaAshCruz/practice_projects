import propTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  // const onClick = () => {
  //   console.log("click");
  // };

  return (
    <header className="header">
      <h1>{title}</h1>
      {/* text changes when showAdd is true ('Close') or false ('Add') */}
      {/* same for button color */}
      <Button
        color={showAdd ? "#dc2626" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  // can set a data type
  title: propTypes.string.isRequired,
};
// CSS in JS

export default Header;
