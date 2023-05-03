import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
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
                     Term - Term - Term
                     <br></br>
                     About Section
                  </span>
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       					<span>Tyler Nelson</span>
                     <br></br>
                     <a href="https://www.linkedin.com/in/tylernel">linkedin.com/in/tylernel</a>
       				</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}