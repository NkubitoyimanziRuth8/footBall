import React, { Component } from 'react'
import img1 from "../images/foot.png"
import img2 from "../images/ball.png"
import img3 from "../images/background.png"

const about = () => {
  return (
    <div>
                {/* <nav>
                    <span className='logo_main'>
                        <img className='logo-img' src={img1} width="30%" />
                        <label className="logo-name">RUHANGO FC</label>
                    </span>
                    <ul>
                        <li><a href="#" >HOME</a></li>
                        <li><a href="#" >ABOUT US</a></li>
                        <li><a href="#" >PLAYERS</a></li>
                        <li><a href="#" >SHOP</a></li>
                        <li><a href="#" >NEWS</a></li>


                    </ul>

                </nav> */}
                <div className="two">

                    <img className='logo-imgse' src={img2} width="50%" />
                    <h1 className="center">KIREHE FOOTBALL CLUB</h1>
                </div>
                <div className="jeje">
                    <img className='logo-imgs' src={img3} width="20%" />

                    <div className="button" >
                        <p className="pop">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quia dolorum <br />facilis expedita. Atque, quam iure eum labore ad, voluptate, reprehenderit repellendus consectetur<br /> alias cumque quia accusamus ea similique quidem.<br /></p>
                        <p className="pop">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quia dolorum <br />facilis expedita. Atque, quam iure eum labore ad, voluptate, reprehenderit repellendus consectetur<br /> alias cumque quia accusamus ea similique quidem.<br /></p>
                        <p className="pop">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quia dolorum <br />facilis expedita. Atque, quam iure eum labore ad, voluptate, reprehenderit repellendus consectetur<br /> alias cumque quia accusamus ea similique quidem.<br /></p>
                        <button className="watch"><strong>Watch video</strong></button>
                    </div>
                </div>

                <div className="kiara">
                    <div className="button" >
                        <h1 className="caption">WE CARRY THE HAPPINESS OF RWANDANS</h1>
                        <p className="pop">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quia dolorum <br />facilis expedita. Atque, quam iure eum labore ad, voluptate, reprehenderit repellendus consectetur<br /> alias cumque quia accusamus ea similique quidem.<br /></p>
                        <p className="pop">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quia dolorum <br />facilis expedita. Atque, quam iure eum labore ad, voluptate, reprehenderit repellendus consectetur<br /> alias cumque quia accusamus ea similique quidem.<br /></p>
                        <p className="pop">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quia dolorum <br />facilis expedita. Atque, quam iure eum labore ad, voluptate, reprehenderit repellendus consectetur<br /> alias cumque quia accusamus ea similique quidem.<br /></p>
                        <button className="join"><strong>JOIN OUR TEAM</strong></button>
                    </div>
                    <img className='logo-imgs' src={img3} width="20%" />
                </div>

                <div className="ward">
                    <div className="buttons" >
                        <hr className="h"/>
                        <hr className="hs"/>
                        <br/>
                        <p className="pop">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quia dolorum consectetur adipisicyt<br /></p>
                        
                        
                        
                    </div>
                    <img className='logo-imgs' src={img3} width="20%" />
                </div>

                
            </div>
  )
}

export default about;