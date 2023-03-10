import "./leaderboard.css";
import React from "react";
import { useState } from "react";
import Players from "./players";
import { LeaderboardData } from "./database";

const Leaderboard = () => {

    const [period, setPeriod] = useState(0);

    const handleClick = (e) => {
     
        setPeriod(e.target.dataset.id)
      }

  return (
    <div className="container">
      <LeaderboardHeader/>
      <div className="duration">
            <button onClick={handleClick} data-id='7'>7 Days</button>
            <button onClick={handleClick} data-id='30'>30 Days</button>
            <button onClick={handleClick} data-id='0'>All-Time</button>
        </div>
{/* <Players LeaderboardData={}></Players> */}
       

      <ColumnHeader/>
      <Players LeaderboardData={between(LeaderboardData, period)}></Players>
        
    </div>
  );
};
export default Leaderboard;



const LeaderboardHeader = () => {
    return (
      <div className="leadheader">
          <h2>Leaderboard</h2>
      </div>
    )
  }

  const ColumnHeader = ({
  onClick,
  onClickAll
}) => {
    return(
<div className="row colheader">
   
        <div className="col-xs-1">
          <h4>#</h4>
        </div>
        <div className="col-xs-5">
          <h4>Name</h4>
        </div>
        <div className="col-xs-3 Game">
          <h4>Game</h4>
        </div>
        <div className="col-xs-3 Score">
          <h4>Score</h4>
        </div>
       
      </div>
    )
}

function between(data, between){
    const today = new Date();
    const previous = new Date(today);
    previous.setDate(previous.getDate() - (between + 1));

    let filter = data.filter(val => {
        let userDate = new Date(val.dt);
        if (between === 0) return val;
        return previous <= userDate && today >= userDate;
    })

    // sort with asending order
    return filter.sort((a, b) => {
        if ( a.score === b.score){
            return b.score - a.score;
        } else{
            return b.score - a.score;
        }
    })

}