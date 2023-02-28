import { invoke } from "@tauri-apps/api/tauri";
import { appWindow } from "@tauri-apps/api/window";

export const getLaunchData = async () => {
  if (window.__TAURI_METADATA__) {
    return await invoke("get_launch_data");
  } else {
    return {
      competitions: [
        { id: "champions_cup", name: "Champions Cup", teams: [0, 1, 2] },
        { id: "challenge_shield", name: "Challenge Shield", teams: [0, 3, 4, 5] },
      ],
      teams: [
        {
          number: 0,
          name: "Invisibles",
          fieldPlayerColors: ["blue", "red"],
          goalkeeperColors: ["yellow", "black"],
        },
        {
          number: 1,
          name: "UT Austin Villa",
          fieldPlayerColors: ["white", "orange"],
          goalkeeperColors: ["white", "orange"],
        },
        {
          number: 2,
          name: "Austrian Kangaroos",
          fieldPlayerColors: ["blue", "red"],
          goalkeeperColors: ["blue", "red"],
        },
        {
          number: 3,
          name: "Bembelbots",
          fieldPlayerColors: ["gray", "blue"],
          goalkeeperColors: ["gray", "blue"],
        },
        {
          number: 4,
          name: "Berlin United",
          fieldPlayerColors: ["blue", "red"],
          goalkeeperColors: ["blue", "red"],
        },
        {
          number: 5,
          name: "B-Human",
          fieldPlayerColors: ["black", "red"],
          goalkeeperColors: ["black", "red"],
        },
      ],
      networkInterfaces: [
        { id: "en0", address: "10.0.0.1", broadcast: "10.0.255.255" },
        { id: "lo0", address: "127.0.0.1", broadcast: "127.0.0.1" },
      ],
      defaultSettings: {
        competition: { id: "champions_cup", playOff: false },
        teams: {
          home: { number: 0, fieldPlayerColor: "blue", goalkeeperColor: "yellow" },
          away: { number: 0, fieldPlayerColor: "red", goalkeeperColor: "black" },
        },
        window: { fullscreen: false },
        network: { interface: "en0", broadcast: false, multicast: false },
      },
    };
  }
};

export const launch = (settings) => {
  if (window.__TAURI_METADATA__) {
    invoke("launch", { settings: settings });
  } else {
    console.log(settings);
  }
};

export const listenForState = async (handler) => {
  if (window.__TAURI_METADATA__) {
    return await appWindow.listen("state", (event) => {
      handler(event.payload);
    });
  } else {
    handler({
      game: {
        sides: "homeDefendsLeftGoal",
        phase: "firstHalf",
        state: "initial",
        setPlay: "noSetPlay",
        kickingSide: "home",
        primaryTimer: {
          started: { remaining: [600, 0], run_condition: "playing", behavior_at_zero: "overflow" },
        },
        secondaryTimer: { stopped: null },
        teams: {
          home: {
            goalkeeper: 1,
            score: 0,
            penaltyCounter: 0,
            timeoutBudget: 1,
            messageBudget: 1200,
            illegalCommunication: false,
            players: [
              { penalty: "noPenalty", penaltyTimer: { stopped: null } },
              { penalty: "noPenalty", penaltyTimer: { stopped: null } },
              { penalty: "noPenalty", penaltyTimer: { stopped: null } },
              { penalty: "noPenalty", penaltyTimer: { stopped: null } },
              { penalty: "noPenalty", penaltyTimer: { stopped: null } },
              { penalty: "noPenalty", penaltyTimer: { stopped: null } },
              { penalty: "noPenalty", penaltyTimer: { stopped: null } },
              { penalty: "substitute", penaltyTimer: { stopped: null } },
            ],
          },
          away: {
            goalkeeper: 1,
            score: 0,
            penaltyCounter: 0,
            timeoutBudget: 1,
            messageBudget: 1200,
            illegalCommunication: false,
            players: [
              { penalty: "noPenalty", penaltyTimer: { stopped: null } },
              { penalty: "noPenalty", penaltyTimer: { stopped: null } },
              { penalty: "noPenalty", penaltyTimer: { stopped: null } },
              { penalty: "noPenalty", penaltyTimer: { stopped: null } },
              { penalty: "noPenalty", penaltyTimer: { stopped: null } },
              { penalty: "noPenalty", penaltyTimer: { stopped: null } },
              { penalty: "noPenalty", penaltyTimer: { stopped: null } },
              { penalty: "substitute", penaltyTimer: { stopped: null } },
            ],
          },
        },
      },
    });
    return () => {};
  }
};

export const syncWithBackend = async () => {
  if (window.__TAURI_METADATA__) {
    await invoke("sync_with_backend");
  }
};

export const applyAction = (action) => {
  if (window.__TAURI_METADATA__) {
    invoke("apply_action", { action: action });
  } else {
    console.log(action);
  }
};