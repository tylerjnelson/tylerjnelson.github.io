import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

        <div className="row work">
          <div className="three columns header-col">
              <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item) => {
                return(
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> 
                      
                        {item.StartDate !== "" ? (
                          <em className="date">{item.StartDate} - {item.EndDate}</em>
                        ) : (
                          <em className="date">{item.EndDate}</em>
                        )}
                
                      </p>

                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                )
              })
            }
            </div> 
        </div>



        <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                      <div className="twelve columns">
                        <h3>{item.UniversityName}</h3>
                        <p className="info">
                          {item.specialization}
                          <span>&bull;</span>

                          {item.StartDate !== "" ? (
                            <em className="date">{item.StartDate} - {item.EndDate}</em>
                          ) : (
                            <em className="date">{item.EndDate}</em>
                          )}
                  
                        </p>

                        <p>{item.Achievements}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
        </div>

        
        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Resume</span></h1>
          </div>

          <div className="nine columns main-col">

          <h3>
            <a href="resources/resume-tyler-nelson.pdf" target="_blank" rel="noreferrer">View my full resume here</a>
          </h3>

          {/*
            <p>{resumeData.skillsDescription}</p>

   				<div className="bars">

   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>
          */}
          
   		  </div>
        
        </div>

      </section>
    );
  }
}