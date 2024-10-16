import PropTypes from "prop-types";
import styles from "./styles.module.css";

const Button = ({ title, onClick, type }) => {
  return (
    <div className={`${styles.btnstyle}`}>
      <button type={type} onClick={onClick}>
        {title}
      </button>
    </div>
  );
};
Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};
// Button.defaultProps = {
//   type: "button",
//   onClick: () => {},
//   disabled: false,
// };

export default Button;
