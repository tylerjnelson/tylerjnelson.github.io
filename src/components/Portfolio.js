import React, { Component } from 'react';
export default class Porfolio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: 4,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    let columns;
    if (width > height) {
      if (width / height > 16 / 9) {
        columns = 5;
      } else {
        columns = 3;
      }
    } else {
      columns = 1;
    }
    this.setState({ columns });
  };

  render() {
    let resumeData = this.props.resumeData;
    return (

      

      <section id="portfolio">

      <h4>Portfolio</h4>
        
      <h1>In-Person Events & Video Content</h1>
      
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {resumeData.videos.map((video, index) => (
          <div
            key={`video-${index}`}
            style={{
              margin: "10px",
              textAlign: "center",
              flexBasis: `${100 / this.state.columns}%`,
              maxWidth: `${100 / this.state.columns}%`,
            }}
          >
            <iframe
              title={`Video ${index + 1}`}
              width="100%"
              height="215"
              src={video.url}
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <h2>{video.category}</h2>
            <p style={{ margin: "10px 0 0 0" }}>{video.description}</p>
          </div>
        ))}
      </div>
      
      <h1> </h1>
      <h1>Web Content I've Written & Edited</h1>
      
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {resumeData.webpages.map((webpage, index) => (
          <div
            key={`webpage-${index}`}
            style={{
              margin: "10px",
              textAlign: "center",
              flexBasis: `${100 / this.state.columns}%`,
              maxWidth: `${100 / this.state.columns}%`,
            }}
          >
            <a href={webpage.url} class="page-link" target="_blank" rel="noreferrer">
              <img src={webpage.banner} alt=""></img>
            </a>
            <h2>{webpage.category}</h2>
            <p style={{ margin: "10px 0 0 0" }}>{webpage.description}</p>
          </div>
        ))}
      </div>
      
      <h1> </h1>
      <h1>More About Me</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {resumeData.projects.map((project, index) => (
          <div
            key={`project-${index}`}
            style={{
              margin: "10px",
              textAlign: "center",
              flexBasis: `${100 / this.state.columns}%`,
              maxWidth: `${80 / this.state.columns}%`,
            }}
          >

          {project.url !== "" ? (
            <a href={project.url} class="page-link" target="_blank" rel="noreferrer">
              <img src={project.banner} alt=""></img>
            </a>
          ) : (
            <img src={project.banner} alt=""></img>
          )}      


            <h2>{project.category}</h2>
            <p style={{ margin: "10px 0 0 0" }}>{project.description}</p>
          </div>
        ))}
      </div>

      </section>
    );
  }
}

