import React from 'react'
import './card.css'

function Card({username, followers,todayFollowers,icon, name}){
console.log(name)
const cardClass =`card ${name}`
    return(
       
        <article className={cardClass}  >
        <p className="card-title">
            <img src={icon} alt="" />
            {username} 
        </p>
        <p className="card-followers">
            <span className="card-followers-number">{followers}</span>
            <span className="card-followers-title">Followers</span>
        </p>
        <p className="card-today">
            <img src="./images/icon-up.svg" alt=""/>
            {todayFollowers}
        </p>
    </article> 
    )
}
export default Card;




/* function Card(props){
    console.log(props)
    return(
       
        <article className="card facebook"  >
        <p className="card-title">
            <img src={props.icon} alt="" />
            {props.username} 
        </p>
        <p className="card-followers">
            <span className="card-followers-number">{props.followers}</span>
            <span className="card-followers-title">Followers</span>
        </p>
        <p className="card-today">
            <img src="./images/icon-up.svg" alt=""/>
            {props.todayFollower}
        </p>
    </article> 
    )
} */