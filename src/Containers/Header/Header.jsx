import "./Header.scss";

const Header = ({ handleResetButton }) => {
  return (
    <header className="header">
      <h1 className="header__title">My Todos</h1>
      <button
        className="header__button button"
        handleResetButton={handleResetButton}
      >
        reset
      </button>
    </header>
  );
};
export default Header;
