import "./styles/Play.css";

const Play = () => {
  return (
    <div className="container play-page">
      <img src="/assets/play-left.png" alt="" className="play-left" />
      <img src="/assets/play-right.png" alt="" className="play-right" />
      <img className="play-foot" src="/assets/footballer.png" alt="" />
      <div className="play-div">
        <img src="/assets/logo.png" alt="" />
        <div className="difficulty">
          <h2 className="bit">EASY</h2>
          <h2 className="bit">medium</h2>
          <h2 className="bit selected-dif">difficult</h2>
        </div>
        <div className="amount">
          <input
            type="text"
            className="bit"
            placeholder="Token amount to play"
          />
          <button className="cta-btn bit">Approve</button>
          <button className="cta-btn bit">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Play;
