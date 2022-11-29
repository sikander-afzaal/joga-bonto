import "./styles/Team.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NftBox from "../../Components/NftBox/NftBox";
import { useState } from "react";
import SuccessModal from "../../Components/SuccessModal/SuccessModal";
import DifficultyModal from "../../Components/DifficultyModal/DifficultyModal";

const Team = () => {
  const [selectedTeam, setSelectedTeam] = useState([]);
  const setTeam = (name, stats, health) => {
    setSelectedTeam((prev) => {
      if (prev[3] !== undefined) return prev;
      return [...prev, { name, stats, health }];
    });
  };
  return (
    <div className="container team-page">
      {/* {<SuccessModal title={"Victory"} msg="You won 7.8#WC" btnText={"Okay"} />} */}
      {/* {
        <SuccessModal
          title={"Failed"}
          msg="You did not pass. Play again?"
          btnText={"Yes"}
        />
      } */}
      {/* {<DifficultyModal />} */}
      <img src="/assets/nft-bg.png" alt="" />
      <div className="team-div">
        <div className="top-team">
          <div>
            <p>
              <strong>Select NFT</strong> to Organize Team
            </p>
            <div>
              <p>
                <strong>Mode:</strong> Easy
              </p>
              <p>
                <strong>Stamina in use:</strong> 5
              </p>
            </div>
          </div>
          <div className="selected-teams">
            <SelectedTeamBox team={selectedTeam[0]} />
            <SelectedTeamBox team={selectedTeam[1]} />
            <SelectedTeamBox team={selectedTeam[2]} />
            <SelectedTeamBox team={selectedTeam[3]} />
          </div>
        </div>
        <div className="bottom-team">
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
              setSelectedTeam={setTeam}
            />
            <NftBox
              img={"/assets/player.png"}
              name="Hector Herrera"
              stats={{ power: "233", sheild: "156", aim: "283" }}
              health={34}
              setSelectedTeam={setTeam}
            />
            <NftBox
              img={"/assets/player.png"}
              name="Hector Herrera"
              stats={{ power: "233", sheild: "156", aim: "283" }}
              health={61}
              setSelectedTeam={setTeam}
            />
            <NftBox
              img={"/assets/player.png"}
              name="Hector Herrera"
              stats={{ power: "233", sheild: "156", aim: "283" }}
              health={87}
              setSelectedTeam={setTeam}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

const SelectedTeamBox = ({ team }) => {
  return (
    <div className="selected-team">
      {team && (
        <>
          <FontAwesomeIcon icon={faPlus} />
          <h2 className="bit">{team.name}</h2>
          <div className="selected-stats">
            <div>
              <img src="/assets/sword.png" alt="" />
              <h3 className="bit">{team.stats.power}</h3>
            </div>
            <div>
              <img src="/assets/shield.png" alt="" />
              <h3 className="bit">{team.stats.sheild}</h3>
            </div>
            <div>
              <img src="/assets/thunder.png" alt="" />
              <h3 className="bit">{team.stats.aim}</h3>
            </div>
          </div>
          <div className="bar">
            <div
              style={{ width: `${team.health}%` }}
              className="inner-bar"
            ></div>
          </div>
        </>
      )}
    </div>
  );
};
