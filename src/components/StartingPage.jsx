import React from "react";
import Card from "./Card";

import "./StartingPage.css";

const StartingPage = ({
  setShowStartingPage,
  setShowQuestionsPage,
  topScore,
  username,
  setUsername,
}) => {
  const startGame = () => {
    if (username.trim().length > 0) {
      setShowStartingPage(false);
      setShowQuestionsPage(true);
    }
  };

  //Checks to see if User already exists

  async function checkUserExists (req, res, next) {
    const user = await user.findOne({where: {
      username: req.body.username
    }})
    if (!User){
      next();
    } else {
      req.send ("this username already exists, please choose another :) ")
    }
  }


  return (
    <Card>
      <h1 className="header">welcome to the quiz</h1>
      <h3 className="primary_text">please enter your username</h3>
      <input
        type="text"
        className="username_input"
        placeholder="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      
      <button className="start_btn" onClick={startGame}>
        let's play
      </button>

      <p className="top_score">
        top score: <span>{topScore}</span>
      </p>
    </Card>
  );
};

export default StartingPage;
