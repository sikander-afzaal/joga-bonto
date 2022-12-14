import "./styles/Versus.css";

const Versus = () => {
  return (
    <div className="container versus-page">
      <div className="versus-div">
        <p>
          <strong>PICK A ROOM</strong> start playing
        </p>
        <div className="versus-grid">
          <VersusBox color="#111111" />
          <VersusBox color="var(--yellow)" />
          <VersusBox color="#111111" />
          <VersusBox color="var(--yellow)" />
          <VersusBox color="var(--yellow)" />
          <VersusBox color="#111111" />
          <VersusBox color="var(--yellow)" />
          <VersusBox color="#111111" />
          <VersusBox color="#111111" />
          <VersusBox color="var(--yellow)" />
          <VersusBox color="#111111" />
          <VersusBox color="var(--yellow)" />
          <VersusBox color="var(--yellow)" />
          <VersusBox color="#111111" />
          <VersusBox color="var(--yellow)" />
          <VersusBox color="#111111" />
        </div>
      </div>
    </div>
  );
};

export default Versus;

const VersusBox = ({ color }) => {
  const addSound = () => {
    const btnSound = new Audio("/assets/sounds/sound1.mp3");
    btnSound.play();
  };
  return (
    <div style={{ backgroundColor: color }} className="versus-box">
      <img src="/assets/versus1.svg" alt="" />
      <div className="btn-div">
        <button onClick={addSound} className="cta-btn bit">
          Apply
        </button>
        <button onClick={addSound} className="cta-btn bit">
          Apply
        </button>
      </div>
    </div>
  );
};
