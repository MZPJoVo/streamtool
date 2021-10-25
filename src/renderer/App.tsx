import Sidebar from "./Components/ButtonModule";
import AppView from "./Components/AppView";

import { useState } from "react";
import ButtonModule from "./Components/ButtonModule";
import MatchState from "./Interfaces/MatchState";

export default function App() {
  const [view, setView] = useState('scoreboard');
  
  const [p1Team, setP1Team] = useState('');
  const [p1Tag, setP1Tag] = useState('');
  const [p1Score, setP1Score] = useState(0);

  const [p2Team, setP2Team] = useState('');
  const [p2Tag, setP2Tag] = useState('');
  const [p2Score, setP2Score] = useState(0);

  const [matchLength, setMatchLength] = useState(3);
  const [round, setRound] = useState('');

  const [darkmode, setDarkmode] = useState(true);

  const state: MatchState = {
    teams: [p1Team, p2Team],
    setTeams: [setP1Team, setP2Team],
    tags: [p1Tag, p2Tag],
    setTags: [setP1Tag, setP2Tag],
    scores: [p1Score, p2Score],
    setScores: [setP1Score, setP2Score],
    matchLength: matchLength,
    setMatchLength: setMatchLength,
    round: round,
    setRound: setRound,
    darkmode: darkmode,
    setDarkmode: setDarkmode,
  }

  return (
    <div className={'app'.concat(darkmode ? ' dark' : '')}>
      <AppView view={view} state={state} />
      <ButtonModule currentView={view} clickCallback={setView} />
    </div>
  )
}
