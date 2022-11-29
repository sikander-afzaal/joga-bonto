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
      <div className="bracket-div">
        <Rounds
          mobileBreakpoint={0}
          rounds={rounds}
          renderSeedComponent={CustomSeed}
        />
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
            }}
          >
            {seed.teams[0]?.name || "NO TEAM "}
          </SeedTeam>
        </div>
      </SeedItem>
    </Seed>
  );
};
