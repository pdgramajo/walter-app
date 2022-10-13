import { useContext, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import ubicationLogo from "../../assets/logo.png";
import "./Navigation.css";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const userStored = localStorage.getItem("currentUser");
    // console.log({ userStored })
    if (userStored) {
      setCurrentUser(JSON.parse(userStored));
    }
  }, []);

  const handleSignOut = () => {
    setCurrentUser(null);
    localStorage.setItem("currentUser", null);
    navigate("/");
  };

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={ubicationLogo} alt="Logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          {currentUser ? (
            <Link className="nav-link" to="/ubication/create">
              Crear ubicación
            </Link>
          ) : (
            <span className="nav-link">Crear ubicación</span>
          )}

          {currentUser ? (
            <span className="nav-link" onClick={handleSignOut}>
              Cerrar Sesión
            </span>
          ) : (
            <Link className="nav-link sign-in" to="/login">
              Iniciar Sesión
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
