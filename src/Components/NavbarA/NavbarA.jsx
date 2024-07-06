import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/default1.png";
import "./navbarA.css";

function NavbarA({ onAuthClick, onNewsletterClick }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    navigate("/", { state: { scrollToContact: true } });
  };

  return (
    <div className="font-outfit navbar-container flex justify-between items-center  px-10 py-3 font-mono shadow-xl">
      <Link to="/" className="">
        <img src={logo} alt="logo" className="logo h-[70px]" />
      </Link>
      <div className="flex gap-5">
        <p>
          <Link to="/" className="navbar-link hover:no-underline text-black mt">
            Startpagina
          </Link>
        </p>
        <p>
          <button onClick={onAuthClick} className="navbar-link hover:no-underline text-black">
            Aanmelden en registreren
          </button>
        </p>
        <p>
          <button onClick={onNewsletterClick} className="navbar-link hover:no-underline text-black">
            Nieuwsbrief
          </button>
        </p>
        <p>
          <button onClick={handleContactClick} className="navbar-link hover:no-underline text-black">
            Contact
          </button>
        </p>
      </div>
    </div>
  );
}

export default NavbarA;
