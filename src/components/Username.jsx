import React from "react"
import Card from "./Card"
import "./Username.css"

const Username = ({
    setShowStartingPage,
    setShowQuestionsPage,
    topScore,
    username,
    setUsername,
  }) => {
    const letStartGame = () => {
      if (username.trim().length > 0) {
        setShowStartingPage(false);
        setShowQuestionsPage(true);
      }
    };

    async function checkUserExists (req, res, next) {
        const user = await user.findOne({where: {
          username: req.body.username
        }})
        if (!user){
          next();
        } else {
          req.send ("this username already exists, please choose another :) ")
        }
      }

  
    return (
      <Card>
        <h1 className="header">Welcome to the quiz</h1>
        <h3 className="primary_text">Please enter your username:</h3>
        <input
          type="text"
          className="username_input"
          placeholder="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        
        <button className="start_btn" onClick={letStartGame}>
          ready to play?
        </button>
  
        <p className="top_score">
          top score: <span>{topScore}</span>
        </p>
      </Card>
    );
  };
  
  export default Username;
  