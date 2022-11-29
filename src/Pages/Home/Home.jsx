import "./styles/Home.css";

const Home = () => {
  const addSound = () => {
    const btnSound = new Audio("/assets/sounds/sound1.mp3");
    btnSound.play();
  };

  return (
    <div className="container home-page">
      <img src="/assets/hero-circle.png" className="home-bg" />
      <div className="home-div">
        <div className="left-home">
          <img src="/assets/logo.png" alt="" />
          <h2>
            Excited to play the most <br /> <span>thrilling</span> <br />{" "}
            football game ever? If yes then <br /> hit the <span>PLAY</span>{" "}
            button at the top.
          </h2>
          <div className="btn-div">
            <button onClick={addSound} className="cta-btn-inverse bit">
              PVE
            </button>
            <button onClick={addSound} className="cta-btn-inverse bit">
              PVP
            </button>
            <button onClick={addSound} className="cta-btn bit">
              Tournament
            </button>
          </div>
        </div>
        <img src="/assets/footballer.svg" alt="" />
      </div>
    </div>
  );
};

export default Home;
