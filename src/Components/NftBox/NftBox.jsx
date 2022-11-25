import "./NftBox.css";

const NftBox = ({ img, name, stats: { power, sheild, aim }, health }) => {
  return (
    <div className="nft-box">
      <img src={img} alt="" />
      <div className="bottom-nft-box">
        <h2 className="bit">{name}</h2>
        <div className="stats">
          <div className="stat">
            <img src="/assets/sword.png" alt="" />
            <p className="bit">{power}</p>
          </div>
          <div className="stat">
            <img src="/assets/shield.png" alt="" />
            <p className="bit">{sheild}</p>
          </div>
          <div className="stat">
            <img src="/assets/thunder.png" alt="" />
            <p className="bit">{aim}</p>
          </div>
        </div>
        <div className="health-bar">
          <div className="bar">
            <div style={{ width: `${health}%` }} className="fill"></div>
          </div>
          <div className="bottom-bar">
            <h3 className="bit">{health}</h3>
            <h3 className="bit">Recover</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftBox;
