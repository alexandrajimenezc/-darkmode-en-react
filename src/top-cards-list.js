import React from 'react'
import Card from './card'
import './top-cards-list.css'


const cardListData = [
    {
        username: '@artesalexj1',
        id: 1,
        followers: '1800',
        todayFollowers: 12,
        icon: 'images/icon-facebook.svg',
        name: 'facebook'
    },
    {
        username: '@artesalexj2',
        id: 2,
        followers: '1800',
        todayFollowers: 11,
        icon: 'images/icon-twitter.svg',
        name: 'twitter'
    },
    {
        username: '@artesalexj3',
        id: 3,
        followers: '2k',
        todayFollowers: 1,
        icon: 'images/icon-instagram.svg',
        name: 'instagram'
    },
    {
        username: '@artesalexj4',
        id: 4,
        followers: '2k',
        todayFollowers: -1,
        icon:'images/icon-youtube.svg',
        name: 'youtube'
    },
]

function TopCardList (){
    return(
        <section className="top-cards">
        <div className="wrapper">
            <div className="grid">


             {
                 cardListData.map(( cardData)=> <Card key={cardData.id} {...cardData}/>)
             } 





             {/*  {
                 cardListData.map(({ username, id ,followers, todayFollower ,icon})=> <Card key={id} icon={icon} username={username} followers={followers} todayFollower={todayFollower}/>)
             }  */}  
            {/* 
             {
                 cardListData.map((cardData)=><Card key={cardData.username} username={cardData.username}/>)
             }   
             */}
                
                {/* <article className="card twitter">
                    <p className="card-title">
                        <img src="images/icon-twitter.svg" alt="" />
                        <a href="https://twitter.com/artesalexj">@artesalexj</a>
                       
                    </p>
                    <p className="card-followers">
                        <span className="card-followers-number">1800</span>
                        <span className="card-followers-title">Followers</span>
                    </p>
                    <p className="card-today">
                        <img src="./images/icon-up.svg" alt=""/>
                        11 Today
                    </p>
                </article>
                <article className="card instagram">
                    <p className="card-title">
                        <img src="images/icon-instagram.svg" alt="" />
                        <a href="https://www.instagram.com/artesalex/" target="_blank">   @artesalexj</a>
                     
                    </p>
                    <p className="card-followers">
                        <span className="card-followers-number">1800</span>
                        <span className="card-followers-title">Followers</span>
                    </p>
                    <p className="card-today">
                        <img src="./images/icon-up.svg" alt=""/>
                        1 Today
                    </p>
                </article>
                <article className="card youtube">
                    <p className="card-title">
                        <img src="images/icon-youtube.svg" alt="" />
                      <a href="https://www.youtube.com/channel/UCZ0TE_Y2LlLQSuss0gsibYw?view_as=subscriber" target="_blank"> @artesalexj</a>
                       
                    </p>
                    <p className="card-followers">
                        <span className="card-followers-number">1800</span>
                        <span className="card-followers-title">Followers</span>
                    </p>
                    <p className="card-today">
                        <img src="./images/icon-up.svg" alt=""/>
                        1 Today
                    </p>
                </article> */}
            </div>
        </div>
    </section>

    )
}

export default TopCardList;