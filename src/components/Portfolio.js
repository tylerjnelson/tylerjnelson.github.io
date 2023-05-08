import React, { Component } from 'react';
export default class Porfolio extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      columns: 4,
      videos: [
        {
          url: "https://www.youtube.com/embed/maJKKSTarUU",
          category: "In-Person Event: Adventurers' Oasis",
          description: "Main MC and Console Team Coordinator",
        },
        {
          url: "https://www.youtube.com/embed/s46WJw-Lhhk",
          category: "In-Person Event: TwitchCon",
          description: "Console Team Coordinator",
        },
        {
          url: "https://www.youtube.com/embed/lr9byLBDVDE",
          category: "In-Person Event: Voice of Adventurers",
          description: "Speaker and Console Team Coordinator",
        },
        {
          url: "https://www.youtube.com/embed/Va71JA2SyS0",
          category: "In-Person Event: Anime Expo",
          description: "Main Black Desert Representative",
        },

        {
          url: "https://www.youtube.com/embed/UIS3F2OmOJw",
          category: "Livestream: Cross-Play 3rd Anniversary",
          description: "Producer and Main Host",
        },
        {
          url: "https://www.youtube.com/embed/ttD51hnF9Iw?start=3346",
          category: "Livestream: Seasonal Style",
          description: "Producer and Main Host",
        },
        {
          url: "https://www.youtube.com/embed/ff5VqQIPRZI?start=1321",
          category: "Livestream: Arena of Arsha 2022",
          description: "Producer and Main Host",
        },
        {
          url: "https://www.youtube.com/embed/ugvmPgzZH_c?start=1236",
          category: "Livestream: Inside the April Update",
          description: "Producer and Main Host",
        },

        {
          url: "https://www.youtube.com/embed/GcDopHgVo7o",
          category: "Guide: Getting Started in Black Desert",
          description: "Producer and Voiceover",
        },
        {
          url: "https://www.youtube.com/embed/M5ENz-J7fxs",
          category: "Guide: Season Tutorial",
          description: "Producer and Voiceover",
        },
      ],

      webpages: [
        {
          url: "https://www.console.playblackdesert.com/News/Notice/Detail?boardNo=13298",
          banner: "images/portfolio/website_banners/web-maegu.jpg",
          category: "Maegu Screenshot Event",
          description: "Author",
        },
        {
          url: "https://www.console.playblackdesert.com/News/Notice/Detail?boardNo=13503",
          banner: "images/portfolio/website_banners/web-maegu.jpg",
          category: "Maegu Screenshot Winners Announcement",
          description: "Author",
        },
        {
          url: "https://www.console.playblackdesert.com/News/Notice/Detail?boardNo=13028",
          banner: "images/portfolio/website_banners/web-3rd-year.jpg",
          category: "Cross-Play 3rd Anniversary Stream Recap",
          description: "Author",
        },
        {
          url: "https://www.console.playblackdesert.com/News/Notice/Detail?boardNo=13463",
          banner: "images/portfolio/website_banners/web-ao.jpg",
          category: "Adventurers' Oasis Recap",
          description: "Editor",
        },

        {
          url: "https://news.xbox.com/en-us/2022/04/07/explore-black-deserts-new-region-of-odyllita-today/",
          banner: "images/portfolio/website_banners/xwire-odyllita.jpg",
          category: "Xbox Wire: New Region O'dyllita",
          description: "Author",
        },
        {
          url: "https://news.xbox.com/en-us/2022/05/31/black-desert-new-drakania-class-revealed/",
          banner: "images/portfolio/website_banners/xwire-drakania.jpg",
          category: "Xbox Wire: New Class Drakania",
          description: "Editor",
        },
      ],

      projects: [
        {
          url: "images/portfolio/projects/dadportrait.png",
          banner: "images/portfolio/projects/stable.png",
          category: "Tech Trends",
          description: "The jury is still out on whether the pop culture AI revolution is positive overall. One thing is for certain: it is tranforming our lives. I try to stay up to date on emerging technology. This picture is 100% generated from text only. I trained an existing diffusion model to recognize my own likeness and reproduce it. I also made one of my dad (with his permission of course). Click on my face to see it.",
        },
        {
          url: "https://drive.google.com/drive/folders/1zqxdbb2ViZjO59aVKim-p0tGYHOb2Va7?usp=sharing",
          banner: "images/portfolio/projects/photography.png",
          category: "Photography",
          description: "Portraits, nature photography, and street photography. I chronicle a lot of my travel through photography. I shoot on a mix of DSLRs and mirrorless cameras. Portrait work was done for a friend over several years. Click for some samples of my work.",
        },
        {
          url: "",
          banner: "images/portfolio/projects/gunpla.jpg",
          category: "Model Building",
          description: "I am by no means the most talented builder, but I do enjoy model building - especially Gunpla. Currently working on HG 1/144 RX-78-02 Gundam the Origin Version. HG 1/144 Gundam Aerial is up next :)",
        },
        {
          url: "",
          banner: "images/portfolio/projects/discord2.png",
          category: "Discord",
          description: "Alongside rebuilding and managing the Black Desert Console, I've built and maintained servers for medium-sized content creators and small communities. I also developed node.js-based bots during hackathons and in personal time.",
        },
      ],

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
        
      <h1>Some Work I've Done</h1>
      
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {this.state.videos.map((video, index) => (
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
        {this.state.webpages.map((webpage, index) => (
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
      <h1>Some things I do in my free time</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {this.state.projects.map((project, index) => (
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

