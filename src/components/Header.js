import React from "react";
import { connect } from "react-redux";
import { logoutRequest } from "../actions";
import PropTypes from "prop-types";
import gravatar from "../utils/gravatar";
import { Link } from "react-router-dom";
import "../assets/styles/components/header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import iconProfile from "../assets/static/user-icon.svg";

const Header = props => {
  const { user } = props;

  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <header className="header header--purple">
      <Link to="/">
        <img className="header__img" src={logo} alt="Logo Platzi video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={iconProfile} />
          )}
          <p>Perfil</p>
        </div>

        {hasUser ? (
          <ul className="header__menu--list">
            <li>
              <Link to="/profile">{user.name}</Link>
            </li>
            <li>
              <a href="#logout" onClick={handleLogout}>
                Cerrar Sesion
              </a>
            </li>
          </ul>
        ) : (
          <ul className="header__menu--list">
            <li>
              <Link to="/login">Iniciar Sesion</Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
  logoutRequest: PropTypes.func
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  logoutRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
