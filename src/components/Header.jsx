import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Employee Management System
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent ml-5"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-5">
            <li className="nav-item" onClick={() => navigate("/")}>
              <a className="nav-link active" aria-current="page" href="#">
                Employees
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Departments
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
