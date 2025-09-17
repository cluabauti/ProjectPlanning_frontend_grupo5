import "./Header.css";

export default function Header({ isLoggedIn, onLogin }) {
  return (
    <header className="header">
      <div className="logo">ProjectPlanning</div>
      <div className="ong-info">
        {isLoggedIn ? (
          "ONG Activa"
        ) : (
          <button className="btn-login" onClick={onLogin}>
            Iniciar Sesión
          </button>
        )}
      </div>
    </header>
  );
}
