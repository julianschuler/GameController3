import ActionButton from "./ActionButton";

const StatePanel = ({ game }) => {
  return (
    <div className="flex flex-row gap-2">
      <ActionButton active={game.state === "initial" || game.state === "timeout"} label="Initial" />
      <ActionButton
        action={{ type: "startSetPlay", args: { side: game.kickingSide, setPlay: "kickOff" } }}
        active={game.state === "ready"}
        label="Ready"
      />
      <ActionButton
        action={{ type: "waitForSetPlay", args: null }}
        active={game.state === "set"}
        label="Set"
      />
      <ActionButton
        action={
          game.state === "playing"
            ? { type: "finishSetPlay", args: null }
            : { type: "freeSetPlay", args: null }
        }
        active={game.state === "playing"}
        label="Playing"
      />
      <ActionButton
        action={{ type: "finishHalf", args: null }}
        active={game.state === "finished"}
        label="Finish"
      />
    </div>
  );
};

export default StatePanel;