import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NftBox from "../../Components/NftBox/NftBox";
import "./styles/Nft.css";

const SuccesfulNotif = ({ text }) => {
  return <div className="created-notif bit">{text}</div>;
};

const Nft = () => {
  return (
    <div className="nft-page container">
      <img src="/assets/nft-bg.png" alt="" />
      <div className="nft-div">
        <div className="top-btn-nft">
          <button className="bit">NFTS</button>
          <button className="bit">Gallery</button>
        </div>
        <div className="filter-div">
          <div className="left-filter">
            <button className="active-filter">All</button>
            <button>Common</button>
            <button>Rare</button>
            <button>Super Rare</button>
            <button>Epic</button>
            <button>Legendary</button>
          </div>
          <div className="right-filter-drop">
            <input
              className="bit"
              type="text"
              placeholder="ENTER PLAYER NAME"
            />
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
        <div className="nft-grid">
          <NftBox
            img={"/assets/player.png"}
            name="Hector Herrera"
            stats={{ power: "233", sheild: "156", aim: "283" }}
            health={74}
          />
          <NftBox
            img={"/assets/player.png"}
            name="Hector Herrera"
            stats={{ power: "233", sheild: "156", aim: "283" }}
            health={34}
          />
          <NftBox
            img={"/assets/player.png"}
            name="Hector Herrera"
            stats={{ power: "233", sheild: "156", aim: "283" }}
            health={61}
          />
          <NftBox
            img={"/assets/player.png"}
            name="Hector Herrera"
            stats={{ power: "233", sheild: "156", aim: "283" }}
            health={87}
          />
        </div>
      </div>
    </div>
  );
};

export default Nft;
