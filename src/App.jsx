import React from "react";
import { useState } from "react";
import StartingPage from "./components/StartingPage";
import QuestionsPage from "./components/QuestionsPage";
import FinalPage from "./components/FinalPage";

function App() {
  const [showStartingPage, setShowStartingPage] = useState(true);
  const [showQuestionsPage, setShowQuestionsPage] = useState(false);
  const [showFinalPage, setShowFinalPage] = useState(false);

  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [username, setUsername] = useState("");

  import('./App.css')

  return (
    <div className="container">
    {showStartingPage && (
      <StartingPage
        setShowStartingPage={setShowStartingPage}
        setShowQuestionsPage={setShowQuestionsPage}
        topScore={topScore}
        username={username}
        setUsername={setUsername}/>
      )}
      {showStartingPage && (
        <StartingPage
          setShowStartingPage={setShowStartingPage}
          setShowQuestionsPage={setShowQuestionsPage}
          topScore={topScore}
          username={username}
          setUsername={setUsername}
        />
      )}
      {showQuestionsPage && (
        <QuestionsPage
          score={score}
          setScore={setScore}
          setShowQuestionsPage={setShowQuestionsPage}
          setShowFinalPage={setShowFinalPage}
        />
      )}
      {showFinalPage && (
        <FinalPage
          score={score}
          setScore={setScore}
          topScore={topScore}
          setTopScore={setTopScore}
          setShowStartingPage={setShowStartingPage}
          setShowFinalPage={setShowFinalPage}
          username={username}
          setUsername={setUsername}
        />
      )}
    </div>
  );
}

export default App;

