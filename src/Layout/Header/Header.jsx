import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {
  const [header, setHeader] = useState(false);
  return (
    <div className="container">
      <header>
        <div className={`left-header ${header ? "activeHeader" : ""}`}>
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            NFT
          </a>
          <a href="#" className="nav-link">
            Create
          </a>
          <a href="#" className="play-btn">
            <p>Play</p>
            <img src="/assets/play-btn-bg.png" alt="" />
          </a>{" "}
          <button className=" cta-btn-inverse mobile-nav">
            Connect Wallet
          </button>
          <button className="cta-btn mobile-nav">Buy Token</button>
        </div>
        <div className="right-header">
          <p className="bit">Token Price</p>
          <p className="bit">1.42</p>
          <p className="bit">$WC</p>
          <button className=" cta-btn-inverse desktop-nav">
            Connect Wallet
          </button>
          <button className="cta-btn desktop-nav">Buy Token</button>
        </div>
        {header && (
          <div onClick={() => setHeader(false)} className="overlay"></div>
        )}
        <FontAwesomeIcon
          onClick={() => {
            setHeader((prev) => !prev);
          }}
          icon={header ? faXmark : faBars}
          className="mobile-nav"
        />
      </header>
    </div>
  );
};

export default Header;
