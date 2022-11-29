import "./styles/Bracket.css";
import { Bracket as Rounds, Seed, SeedItem, SeedTeam } from "react-brackets";

const Bracket = () => {
  const rounds = [
    {
      seeds: [
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 7 }],
        },
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 2 }],
        },
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 1 }],
        },
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 2 }],
        },
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 7 }],
        },
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 2 }],
        },
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 1 }],
        },
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 2 }],
        },
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 7 }],
        },
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 2 }],
        },
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 1 }],
        },
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 2 }],
        },
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 7 }],
        },
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 2 }],
        },
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 1 }],
        },
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 2 }],
        },
      ],
    },
    {
      seeds: [
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 10 }],
        },
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 2 }],
        },
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 10 }],
        },
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 2 }],
        },
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 10 }],
        },
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 2 }],
        },
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 10 }],
        },
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 2 }],
        },
      ],
    },
    {
      seeds: [
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 0 }],
        },
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 0 }],
        },
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 0 }],
        },
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 0 }],
        },
      ],
    },
    {
      seeds: [
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 1 }],
        },
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 1 }],
        },
      ],
    },
    {
      seeds: [
        {
          id: 1,
          teams: [{ id: 1, name: "", score: 1 }],
        },
      ],
    },
  ];
  return (
    <div className="container bracket-page">
      <div className="bracket-wrapper">
        <div className="bracket-div">
          {" "}
          <div className="bracket-circle1"></div>
          <div className="bracket-circle2"></div>
          <div className="bracket-circle3"></div>
          <div className="bracket-heading">
            <h2 className="bit">TOURNAMENT - SEASON 1</h2>
            <p>Current Level: 1/12</p>
            <p>01 Day 12 Hours 34 INS</p>
            <button className="cta-btn bit">EDIT TEAM</button>
          </div>
          <Rounds
            mobileBreakpoint={0}
            rounds={rounds}
            renderSeedComponent={CustomSeed}
          />
          <div className="center-bracket">Winner</div>
          <div className="rotated-bracket">
            <Rounds
              mobileBreakpoint={0}
              rounds={rounds}
              renderSeedComponent={CustomSeedRightSide}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bracket;

const CustomSeed = ({ seed, breakpoint }) => {
  return (
    <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 12 }}>
      <SeedItem>
        <div>
          <SeedTeam
            style={{
              color: "white",
              backgroundColor: "var(--yellow)",
              height: "40px",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            {seed.teams[0]?.name || "NO TEAM "}
          </SeedTeam>
        </div>
      </SeedItem>
    </Seed>
  );
};
const CustomSeedRightSide = ({ seed, breakpoint }) => {
  return (
    <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 12 }}>
      <SeedItem>
        <div>
          <SeedTeam
            style={{
              transform: "rotate(180deg)",
              color: "white",
              textAlign: "center",
              justifyContent: "center",
              backgroundColor: "var(--yellow)",
              height: "40px",
            }}
          >
            {seed.teams[0]?.name || "NO TEAM "}
          </SeedTeam>
        </div>
      </SeedItem>
    </Seed>
  );
};
