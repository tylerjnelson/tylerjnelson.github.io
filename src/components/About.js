import React, { Component } from 'react';
export default class About extends Component {
  render() {
    /*let resumeData = this.props.resumeData;*/
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">
               <img className="profile-pic"  src="images/profilepic.png" alt="" />
            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                  <span>
                     💻 Programmer
                     <br></br>
                     ✍️ Writer
                     <br></br> 
                     🕹️ Gamer
                     <br></br><br></br>
                     Purdue University Computer Science graduate with over 2 years experience in the gaming industry. Substantial work with live service games like Genshin Impact and Black Desert. Mainly focusing on live operations, community management, and content creation.
                  </span>
               }
               </p>

               <h2>Contact Details</h2>
               <p className="address">
                  <span>If you'd like to get in touch, please reach out to me on LinkedIn:</span>
                  <br></br>
                  <a href="https://www.linkedin.com/in/tylernel" target="_blank" rel="noreferrer">linkedin.com/in/tylernel</a>
               </p>

            </div>
         </div>
      </section>
    );
  }
}