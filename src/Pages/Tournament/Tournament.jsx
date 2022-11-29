import "./styles/Tournament.css";

const Tournament = () => {
  const addSound = () => {
    const btnSound = new Audio("/assets/sounds/sound1.mp3");
    btnSound.play();
  };
  return (
    <div className="container tournament-page">
      {" "}
      <img src="/assets/play-left.png" alt="" className="play-left" />
      <img src="/assets/play-right.png" alt="" className="play-right" />
      <div className="tournament-div">
        <h1 className="bit">TOURNAMENT- SEASON 1</h1>
        <div className="top-tournament">
          <div className="left-tour">
            <div className="tour-box">
              <h3 className="bit">Registration Pharse</h3>
              <p>01 Day 12 Hours 34 INS</p>
              <button onClick={addSound} className="cta-btn bit">
                Register
              </button>
            </div>
            <div className="tour-box">
              <h3 className="bit">Playing Pharse</h3>
              <p>-</p>
              <button onClick={addSound} className="cta-btn bit">
                Register
              </button>
            </div>
          </div>
          <div className="winner-box">
            <h3 className="bit">
              Winner <br /> --
            </h3>
            <h3 style={{ color: "var(--green)" }} className="bit">
              To Prize: 100$WC
            </h3>
          </div>
        </div>
        <div className="bottom-tournament">
          <h2 className="bit">00 GMT 16:06 - 111 teams</h2>
          <p className="bit">
            13:37:50 0x344...af1 has been registered successfully
          </p>
          <p className="bit">
            13:37:50 0x344...af1 has been registered successfully
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tournament;
