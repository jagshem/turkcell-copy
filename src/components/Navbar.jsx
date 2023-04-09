import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img
          src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Hakkimizda/genel-bakis/logolarimiz/TURKCELL_DIKEY_ERKEK_LOGO.png"
          alt="Türkcell Logo"
          className="navbar__logo"
          onClick={() => navigate("/main")}
        />
        <ul className="navbar__list">
          <li className="navbar__item">
            Pasaj <i class="fa-solid fa-cart-shopping"></i>
          </li>
          <li className="navbar__item">Paketler</li>
          <li className="navbar__item">Dijital Servisler</li>
          <li className="navbar__item">Ev İnterneti ve TV</li>
          <li className="navbar__item">Kampanyalar</li>
        </ul>
        <div className="right">
          <li className="navbar__item">
            Fatura ve Paket/TL<i class="fa-solid fa-wallet"></i>
          </li>
        </div>
        <li className="navbar__item navbar__search">
          <i className="fas fa-search"></i>
        </li>
        <li className="navbar__item navbar__profile">
          <i className="fas fa-user"></i>
        </li>
      </div>
      <div className="navbar__right">
        <div className="navbar__line--vertical"></div>
      </div>
      <div className="navbar__line--horizontal"></div>
    </nav>
  );
};

export default Navbar;
