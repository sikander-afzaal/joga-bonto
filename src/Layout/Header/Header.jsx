import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [header, setHeader] = useState(false);
  const [showPlayBtn, setShowPlayBtn] = useState(true);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/") {
      setShowPlayBtn(true);
    } else {
      setShowPlayBtn(false);
    }
  }, [pathname]);

  const addSound = () => {
    const btnSound = new Audio("/assets/sounds/sound2.mp3");
    btnSound.play();
  };
  return (
    <div className="container">
      <header>
        <div className={`left-header ${header ? "activeHeader" : ""}`}>
          <Link to={"/"} className="nav-link">
            Home
          </Link>
          <Link to={"/nft"} className="nav-link">
            NFT
          </Link>
          <a href="#" className="nav-link">
            Create
          </a>
          {showPlayBtn && (
            <Link onClick={addSound} to={"/play"} className="play-btn">
              <p>Play</p>
              <img src="/assets/play-btn-bg.png" alt="" />
            </Link>
          )}
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
