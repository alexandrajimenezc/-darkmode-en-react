
import React from 'react'
import CardSmall from './card-small'
import './overviews.css'

const cardSmallList = [
    {
      icon: 'images/icon-facebook.svg',
      pageViews: '87',
      growth: 1800,
      key: 1,
    },
    {
        icon: 'images/icon-facebook.svg',
        pageViews: '87',
        growth: 1800,
        key: 1,
    },
    {
      icon: 'images/icon-twitter.svg',
      pageViews: '52',
      growth: 2000,
      key: 2,
    },
    {
        icon: 'images/icon-twitter.svg',
        pageViews: '52',
        growth: 2000,
        key: 2,
      },
    {
      icon: 'images/icon-instagram.svg',
      pageViews: '5462',
      growth: 1800,
      key: 3,
    },
    {
        icon: 'images/icon-instagram.svg',
        pageViews: '5462',
        growth: 1800,
        key: 3,
      },
    {
      icon: 'images/icon-youtube.svg',
      pageViews: '117',
      growth: 3000,
      key: 4,
    },
    {
        icon: 'images/icon-youtube.svg',
        pageViews: '117',
        growth: 3000,
        key: 4,
      }
    
  
  ] 



export default function Overviews() {

    return (

    
        <section className="overview">
        <div className="wrapper">
            <h2>Overview - Today</h2>

            <div className="grid">
                {
                    cardSmallList.map(({icon, pageViews, growth, key })=> (
                    <CardSmall   
                    icon={icon}
                    key={key}
                    pageViews={pageViews}
                    growth={growth} /> ))
                }
                

              {/*   <div className="card-small">
                    <p className="card-small-views">Likes</p>
                    <p className="card-small-icon">
                        <img src="./images/icon-facebook.svg" alt=""/>
                    </p>
                    <p className="card-small-number">300</p>

                    <p className="card-small-percentage is-danger">
                        <span>
                            <img src="./images/icon-down.svg" alt=""/> 2%</p>

                    </span>


                </div>
                <div className="card-small">
                    <p className="card-small-views">Likes</p>
                    <p className="card-small-icon">
                        <img src="./images/icon-instagram.svg" alt=""/>
                    </p>
                    <p className="card-small-number">500</p>

                    <p className="card-small-percentage">
                        <span>
                            <img src="./images/icon-up.svg" alt=""/> 2512%</p>

                    </span>


                </div>
                <div className="card-small">
                    <p className="card-small-views">Profile Views</p>
                    <p className="card-small-icon">
                        <img src="./images/icon-instagram.svg" alt=""/>
                    </p>
                    <p className="card-small-number">1k</p>

                    <p className="card-small-percentage ">
                        <span>
                            <img src="./images/icon-up.svg" alt=""/>545%</p>

                    </span>


                </div>
                <div className="card-small">
                    <p className="card-small-views">Retweets</p>
                    <p className="card-small-icon">
                        <img src="./images/icon-twitter.svg" alt=""/>
                    </p>
                    <p className="card-small-number">70</p>

                    <p className="card-small-percentage">
                        <span>
                            <img src="./images/icon-up.svg" alt=""/> 2%</p>

                    </span>


                </div>
                <div className="card-small">
                    <p className="card-small-views">Likes</p>
                    <p className="card-small-icon">
                        <img src="./images/icon-twitter.svg" alt=""/>
                    </p>
                    <p className="card-small-number">90</p>

                    <p className="card-small-percentage">
                        <span>
                            <img src="./images/icon-up.svg" alt=""/> 2%</p>

                    </span>


                </div>
                <div className="card-small">
                    <p className="card-small-views">Likes</p>
                    <p className="card-small-icon">
                        <img src="./images/icon-youtube.svg" alt=""/>
                    </p>
                    <p className="card-small-number">37</p>

                    <p className="card-small-percentage is-danger">
                        <span>
                            <img src="./images/icon-down.svg" alt=""/> 2%</p>

                    </span>


                </div>
                <div className="card-small">
                    <p className="card-small-views">Total Views</p>
                    <p className="card-small-icon">
                        <img src="./images/icon-youtube.svg" alt=""/>
                    </p>
                    <p className="card-small-number">120</p>

                    <p className="card-small-percentage is-danger">
                        <span>
                            <img src="./images/icon-down.svg" alt="" > 1%</p>

                    </span>
                </div>
 */}

            </div>

        </div>

    </section>
    
    )
}