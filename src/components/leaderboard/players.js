
import React from 'react';

import { LeaderboardData } from './database';

export default function Players({ LeaderboardData }) {
  return (
        <div id="profile">
            {Item(LeaderboardData)}
        </div>
  )
}

function Item(data){
    return (

        <>
            {
                data.map((value, index) => (
                   
                    <div className="row flex " key={index}>
                        <div className="col item ">
                            <img src={value.img} alt="" />
            
                            <div className="info">
                                <h3 className='name text-red'>{value.name}</h3>    
                               
                            </div>                
                        </div>
                        <div className=" col item">
                            <span>{value.Game}</span>
                        </div>

                        <div className="col item ">
                            <span>{value.score}</span>
                        </div>

                        
                        <div className="col item ">
                            <span>{value.dt}</span>
                        </div>
                    </div>
                    )
                )
            }
        </>

        
    )
}
